# Vegan Ipsum for VS Code

A lightweight, distraction-free extension for Visual Studio Code that generates vegan-themed placeholder text. Perfect for developers who want to add a cruelty-free twist to their mockups and design prototypes.

## Features

- **Single Line:** Instantly generate a short snippet of placeholder text.
- **Paragraph:** Insert a full block of vegan-themed ipsum.
- **Multiple Paragraphs:** Populate large layouts with multiple paragraphs automatically.

## Usage

1.  Open the **Command Palette** (`F1` or `Cmd/Ctrl+Shift+P`).
2.  Type **"Vegan Ipsum"**.
3.  Select your desired output format:
    - `Vegan Ipsum: Insert Line`
    - `Vegan Ipsum: Insert Paragraph`
    - `Vegan Ipsum: Insert Multiple Paragraphs`

## Configuration & Keybindings

The extension exposes the following commands, which you can bind to custom keyboard shortcuts for a faster workflow:

| Command                          | Description                    |
| :------------------------------- | :----------------------------- |
| `vegan-ipsum.line`               | Inserts a single line of text. |
| `vegan-ipsum.paragraph`          | Inserts a single paragraph.    |
| `vegan-ipsum.multipleParagraphs` | Inserts multiple paragraphs.   |

### Setting a Shortcut

To add a custom keybinding, open your `keybindings.json` and add an entry like so:

```json
{
	"key": "ctrl+shift+l",
	"command": "vegan-ipsum.paragraph",
	"when": "editorTextFocus"
}
```

> **Tip:** For detailed instructions on advanced keybinding customization, refer to the [VS Code Keybindings Documentation](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization).

## Credits

This extension is powered by the [vegan-ipsum npm package](https://www.npmjs.com/package/vegan-ipsum).

## Ecosystem

Explore the rest of the Vegan Ipsum suite:

- **Website:** [veganipsum.vercel.app](https://veganipsum.vercel.app)
- **JSON API:** [View Docs](https://veganipsum.vercel.app/json-api)
- **Node CLI:** [View Docs](https://veganipsum.vercel.app/node-cli)
- **npm Package:** [View on npm](https://www.npmjs.com/package/vegan-ipsum)

## Support

- **Changelog:** [View Releases](https://github.com/vijayhardaha/vscode-vegan-ipsum/blob/master/CHANGELOG.md)
- **License:** [View License](./LICENSE)
