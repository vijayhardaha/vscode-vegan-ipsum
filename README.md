# Vegan Ipsum VS Code Extension

A lightweight VS Code extension that generates and inserts vegan-themed lorem ipsum text into your files.

## Usage

1. Open the command palette (<kbd>F1</kbd> or <kbd>Cmd/Ctrl+Shift+P</kbd>).
2. Type "lorem ipsum" and select one of the following options:
   - Insert a single line of text.
   - Insert a paragraph of text.
   - Insert multiple paragraphs of text.

## Customization

This extension provides the following commands:

- `vegan-ipsum.line` - Inserts a single line of vegan ipsum text.
- `vegan-ipsum.paragraph` - Inserts a single paragraph of vegan ipsum text.
- `vegan-ipsum.multipleParagraphs` - Inserts multiple paragraphs of vegan ipsum text.

### Adding Keybindings

By default, these commands do not have keybindings. You can add custom keybindings by modifying your keybindings.json file. For example:

```json
{
  "key": "ctrl+shift+l",
  "command": "vegan-ipsum.paragraph",
  "when": "editorTextFocus"
}
```

For more details, refer to the [VS Code keybindings documentation](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization).

## Credits

This extension leverages the [vegan-ipsum npm package](https://www.npmjs.com/package/vegan-ipsum) for its core functionality.
