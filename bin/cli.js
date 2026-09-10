#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Claude Code Output Style Installer

Usage:
  npx output-style [options]

Options:
  -p, --project   Install output styles into the current project (.claude/output-styles/) [default]
  -g, --global    Install output styles globally (~/.claude/output-styles/)
  -h, --help      Show this help message

Examples:
  npx output-style            # Installs to current project
  npx output-style --global   # Installs globally for all projects
`);
  process.exit(0);
}

const installScript = path.join(__dirname, '..', 'scripts', 'install.js');
const result = spawnSync(process.execPath, [installScript, ...args], {
  stdio: 'inherit'
});

process.exit(result.status || 0);
