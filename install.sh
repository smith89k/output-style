#!/bin/bash

echo "Installing Solutions Engineer Output Style for Claude Code..."

# Create the global output-styles directory if it doesn't exist
mkdir -p ~/.claude/output-styles

# Copy the file
cp solutions-engineer.md ~/.claude/output-styles/

echo "✅ Installation complete!"
echo "To use it, start Claude Code in your terminal and type:"
echo "👉 /output-style solutions-engineer"
