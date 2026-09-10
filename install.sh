#!/bin/bash

echo "Installing Claude Code Output Styles..."

# Create the global output-styles directory if it doesn't exist
mkdir -p ~/.claude/output-styles

# Copy all style files
cp .claude/output-styles/*.md ~/.claude/output-styles/

echo "✅ Installation complete!"
echo "To use them, start Claude Code in your terminal and type:"
echo "👉 /output-style lead-engineer"
echo "👉 /output-style solutions-engineer"

