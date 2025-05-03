const veganIpsum = require("vegan-ipsum").veganIpsum;
const vscode = require("vscode");

/**
 * Activates the extension and registers commands.
 * @param {vscode.ExtensionContext} context - The extension context.
 */
function activate(context) {
  var commands = [
    vscode.commands.registerCommand("vegan-ipsum.line", generateLine),
    vscode.commands.registerCommand("vegan-ipsum.paragraph", generateParagraph),
    vscode.commands.registerCommand("vegan-ipsum.multipleParagraphs", generateMultipleParagraphs),
  ];

  commands.forEach(function (command) {
    context.subscriptions.push(command);
  });
}

/**
 * Inserts generated text into the active editor.
 * @param {Object} lorem - The options for text generation.
 * @param {number} lorem.count - The number of units to generate.
 * @param {string} lorem.units - The type of units to generate (e.g., "sentences", "paragraphs").
 */
function insertText(lorem) {
  var editor = vscode.window.activeTextEditor;
  editor.edit((edit) =>
    editor.selections.forEach((selection) => {
      edit.delete(selection);
      edit.insert(selection.start, veganIpsum(lorem));
    })
  );
}

/**
 * Generates a single line of vegan ipsum text and inserts it into the editor.
 */
function generateLine() {
  insertText({
    count: 1,
    units: "sentences",
  });
}

/**
 * Generates a single paragraph of vegan ipsum text and inserts it into the editor.
 */
function generateParagraph() {
  insertText({
    count: 1,
    units: "paragraphs",
  });
}

/**
 * Prompts the user to select the number of paragraphs to generate and inserts the text into the editor.
 */
async function generateMultipleParagraphs() {
  const items = [];
  for (let i = 2; i <= 10; i++) {
    items.push(i.toString());
  }

  const count = await vscode.window.showQuickPick(items, {
    placeHolder: "How many paragraphs?",
  });
  if (!count) {
    return;
  }

  insertText({
    count: Number.parseInt(count),
    units: "paragraphs",
  });
}

/**
 * Deactivates the extension.
 */
function deactivate() {
  // Cleanup logic if needed
}

module.exports = { activate, deactivate };
