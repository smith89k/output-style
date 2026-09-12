# Claude Code Output Styles

Custom output styles for [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code) with automatic installation support for local projects and global configurations.

---

## 🎭 Available Output Styles

### 1. Lead Engineer (`lead-engineer`)
Communicates with technical authority, root-cause depth, and clarity—tailored for substantial refactorings and complex bug fixes.
- **The Breakthrough Opening**: Immediate, energetic declaration of victory.
- **Root-Cause Narrative**: Clearly contrasts how legacy code behaved vs. what the modern framework expects, explaining the exact cascade failure.
- **Quantified "Heavy Lifting"**: Quantifies impact with exact counts (controllers, views, lines migrated, calls patched).
- **Verifiable Happy Path**: Provides exact instructions and endpoints so you can test and confirm the fix immediately.

### 2. Solutions Engineer (`solutions-engineer`)
Translates complex, technical engineering jargon into clear, reassuring client-facing explanations with zero fluff.
- **Zero Conversational Filler**: Direct output without conversational preambles.
- **Structured Format**: Includes **The Translation** (action, risk reduction, direct benefit) and **Jargon Breakdown** (term by term).
- **Client-Focused**: Emphasizes safety, stability, and tangible benefits.

### 3. IT Guy (`it-guy`)
Explains everything like the friendly IT guy at the office—short, simple, easy English that anyone can understand.
- **Simple English Only**: Short sentences, common words, no jargon, acronyms, code, or file paths.
- **Everything Is a Summary**: Result first, then *What was wrong*, *What I did*, *How to check*—each only a few lines.
- **"Summary" Ending**: Every answer closes with a 1–3 sentence recap in the simplest words possible.

---

## 🚀 Installation to Your Project

### Method 1: Using `npm install` (Recommended)

Run this in your target project directory. The postinstall hook will automatically copy the output style files into your project's `.claude/output-styles/`:

```bash
# Using GitHub shorthand (simplest)
npm install --save-dev github:smith89k/output-style

# Or via full Git URL
npm install --save-dev git+https://github.com/smith89k/output-style.git

# Or from local repository clone
npm install --save-dev /path/to/output-style
```

**Using pnpm or yarn?** Use your project's own package manager instead of `npm`:

```bash
# pnpm
pnpm add -D github:smith89k/output-style

# pnpm 10+ blocks dependency postinstall scripts by default — approve it once:
pnpm approve-builds

# yarn
yarn add -D github:smith89k/output-style
```

If you'd rather not add a dependency, use Method 2 (`npx`) below — it works with any package manager.

### Method 2: Using `npx` (No dependencies added)

Run directly inside your target project root:

```bash
# Install to current project (.claude/output-styles/)
npx github:smith89k/output-style

# Or install globally (~/.claude/output-styles/)
npx github:smith89k/output-style --global
```

### Method 3: In This Repository

If you cloned this repository, simply run:

```bash
# Install dependencies and setup local output styles
npm install

# Or explicitly install to project or global
npm run install:project
npm run install:global
```

### Method 4: Shell Script

```bash
chmod +x install.sh
./install.sh
```

---

## 💡 How to Use in Claude Code

1. Start Claude Code in your project terminal:
   ```bash
   claude
   ```

2. Switch to the style using the slash command:
   ```text
   /output-style solutions-engineer
   ```

3. Or configure it interactively:
   ```text
   /config
   ```
   Select **Output style** and choose **Solutions Engineer**.

---

## 📁 Directory Structure

```text
.
├── .claude/
│   └── output-styles/
│       └── solutions-engineer.md   # Project-level output style
├── bin/
│   └── cli.js                      # npx CLI executable
├── scripts/
│   └── install.js                  # Cross-platform installation script
├── install.sh                      # Shell installation script (global)
├── solutions-engineer.md           # Template source file
├── package.json                    # npm package configuration
└── README.md
```

---

## 📄 License

MIT © [smith89k](https://github.com/smith89k)
