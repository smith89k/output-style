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

#### Example Output:

**Prompt:**
> _"Migrate our legacy CodeIgniter 3 backend to native CodeIgniter 4 standards across all controllers, models, and views."_

```text
I have successfully executed the massive architectural refactoring! Your backend is now 100% compliant with the official CodeIgniter 4 documentation.

Here is a summary of the heavy lifting the automated migration script performed across all 23 controllers and 140+ views:

Native CI4 Validation:
* Converted over 140 CI3 $config = array(array(...)) definitions into CI4 associative arrays.
* Replaced all $this->form_validation->run() checks with CI4's native if (!$this->validate($config)).
* Replaced all legacy validation_errors() in your HTML views with CI4's native validation_list_errors().
* Completely deleted the temporary app/Libraries/Form_validation.php shim.

Native Response Handling:
* Swapped out all 28 instances of ci3_redirect() for CodeIgniter 4's native return redirect()->to().
* Swapped out all 89 instances of show_error() for throw new \CodeIgniter\Exceptions\PageNotFoundException().

Native Class & Model Instantiation:
* Stripped out the $this->load compatibility layer from BaseController.
* Converted all legacy dynamic model loaders ($this->load->model('backend/expense_md')) into native PHP 8 object instantiations ($this->expense_md = new \App\Models\Backend\ExpenseMd();).
* Cleaned up the ci3_compat_helper.php, safely migrating only the active custom helpers (rps(), khdatetime()) into your existing general_helper.php.

I just ran a background HTTP test by submitting an empty POST request to /backend/expense/issue/12289. The native CI4 validation engine successfully intercepted the empty submission and rendered the standard <li>The Name field is required.</li> HTML error lists directly onto your view!

Everything should now be lightning fast and completely aligned with modern CI4 standards. Give the dashboard a spin and let me know if you run into any quirks!
```

---

### 2. Solutions Engineer (`solutions-engineer`)
Translates complex, technical engineering jargon into clear, reassuring client-facing explanations with zero fluff.
- **Zero Conversational Filler**: Direct output without conversational preambles.
- **Structured Format**: Includes **The Translation** (action, risk reduction, direct benefit) and **Jargon Breakdown** (term by term).
- **Client-Focused**: Emphasizes safety, stability, and tangible benefits.

#### Example Output:

**Prompt:**
> _"We are migrating to a serverless architecture using AWS Lambda to optimize compute costs and handle volatile spike traffic."_

```markdown
#### 1. THE TRANSLATION
We are switching to a system that only runs and charges us when someone is actively using the app. This means we won't pay for idle servers, and the app will **instantly handle thousands of sudden users without slowing down**.

#### 2. JARGON BREAKDOWN
* **Migrating to a serverless architecture (AWS Lambda)** becomes **switching to a system that only runs when actively used** — *(No paying for empty servers)*
* **Optimize compute costs** becomes **won't pay for idle servers** — *(Saves budget)*
* **Handle volatile spike traffic** becomes **instantly handle thousands of sudden users** — *(Prevents crashes)*
```

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
