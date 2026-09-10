#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const packageRoot = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');
const isPostInstall = args.includes('--postinstall');

// Find all style files (e.g. solutions-engineer.md or any .md in .claude/output-styles or root)
function getStyleFiles() {
  const styles = [];
  const sourceDir = path.join(packageRoot, '.claude', 'output-styles');

  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      styles.push({
        filename: file,
        filePath: path.join(sourceDir, file)
      });
    }
  }

  // Fallback to root level markdown styles if not in .claude/output-styles
  if (styles.length === 0) {
    const fallbackPath = path.join(packageRoot, 'solutions-engineer.md');
    if (fs.existsSync(fallbackPath)) {
      styles.push({
        filename: 'solutions-engineer.md',
        filePath: fallbackPath
      });
    }
  }

  return styles;
}

function resolveTargetDir() {
  if (isGlobal) {
    return path.join(os.homedir(), '.claude', 'output-styles');
  }

  // When installed as an npm dependency, npm sets INIT_CWD to the caller project directory
  const projectRoot = process.env.INIT_CWD || process.cwd();
  return path.join(projectRoot, '.claude', 'output-styles');
}

function install() {
  try {
    const targetDir = resolveTargetDir();
    const styleFiles = getStyleFiles();

    if (styleFiles.length === 0) {
      console.warn('⚠️  [output-style] No output style files found to install.');
      return;
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const installedNames = [];
    for (const style of styleFiles) {
      const destPath = path.join(targetDir, style.filename);
      fs.copyFileSync(style.filePath, destPath);
      const styleName = style.filename.replace(/\.md$/, '');
      installedNames.push(styleName);
    }

    const scope = isGlobal ? 'global (~/.claude/output-styles)' : 'project (.claude/output-styles)';
    console.log(`\n✅ [output-style] Successfully installed ${styleFiles.length} style(s) to ${scope}:`);
    for (const name of installedNames) {
      console.log(`   • ${name}`);
    }
    console.log('\nTo use in Claude Code, run:');
    for (const name of installedNames) {
      console.log(`   👉 /output-style ${name}`);
    }
    console.log('');
  } catch (err) {
    if (isPostInstall) {
      console.warn(`⚠️  [output-style] Could not complete installation: ${err.message}`);
    } else {
      console.error(`❌ [output-style] Installation failed: ${err.message}`);
      process.exit(1);
    }
  }
}

install();
