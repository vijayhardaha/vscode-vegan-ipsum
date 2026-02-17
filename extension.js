const vscode = require("vscode");
const veganIpsum = require("vegan-ipsum").veganIpsum;

/**
 * Activates the extension and registers commands.
 *
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
 *
 * @param {Object} lorem - The options for text generation.
 * @param {number} lorem.count - The number of units to generate.
 * @param {string} lorem.units - The type of units to generate (e.g., "sentences", "paragraphs").
 */
function insertText(lorem) {
  // Get the active text editor
  var editor = vscode.window.activeTextEditor;

  // If an editor is active, generate the vegan ipsum text and insert it into the editor
  if (editor) {
    // Generate the vegan ipsum text and insert it into the editor
    editor.edit((edit) =>
      // Loop through each selection in the editor and replace it with the generated vegan ipsum text
      editor.selections.forEach((selection) => {
        // Delete the current selection and insert the generated vegan ipsum text at the start of the selection
        edit.delete(selection);
        // Insert the generated vegan ipsum text at the start of the selection
        edit.insert(selection.start, veganIpsum(lorem));
      })
    );
  }
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

  // Populate the items array with numbers from 2 to 10 as strings
  for (let i = 2; i <= 10; i++) {
    items.push(i.toString());
  }

  // Show a quick pick dialog to the user with the items array and a placeholder text
  const count = await vscode.window.showQuickPick(items, {
    placeHolder: "How many paragraphs?",
  });

  // If the user cancels the quick pick dialog, count will be undefined, so we check for that before proceeding
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
