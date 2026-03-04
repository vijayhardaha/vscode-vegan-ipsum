# How to Publish Your Extension

This guide walks you through packaging and publishing the **Vegan Ipsum** extension to the Visual Studio Code Marketplace.

## Prerequisites

Before you begin, ensure you have the following:

1.  **Node.js:** Installed on your machine.
2.  **GitHub Account:** Required for authentication with the Marketplace.
3.  **Azure DevOps Account:** The VS Code Marketplace uses Azure DevOps for identity management.

---

## Step 1: Install the CLI Tool

Microsoft provides a command-line tool called `vsce` (Visual Studio Code Extension Manager) to handle packaging and publishing.

Open your terminal and install it globally:

```bash
npm install -g @vscode/vsce
```

---

## Step 2: Prepare Your `package.json`

Before publishing, verify that your `package.json` contains the necessary metadata. The marketplace requires specific fields to display your extension correctly.

Ensure these fields are present and filled out:

```json
{
	"name": "vegan-ipsum",
	"displayName": "Vegan Ipsum",
	"description": "A lightweight extension to generate vegan-themed lorem ipsum text.",
	"version": "1.0.0",
	"publisher": "YOUR_PUBLISHER_ID",
	"engines": { "vscode": "^1.60.0" },
	"categories": ["Snippets"],
	"activationEvents": [],
	"main": "./out/extension.js",
	"contributes": {
		"commands": [
			{
				"command": "vegan-ipsum.line",
				"title": "Vegan Ipsum: Insert Line"
			}
		]
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/veganipsum/vegan-ipsum.git"
	},
	"license": "SEE LICENSE IN LICENSE"
}
```

> **Important:** You need a `publisher` ID. If you don't have one yet, you will create it in the next step.

---

## Step 3: Create a Publisher ID

All extensions must be published under a unique publisher ID.

1.  Go to the **[Visual Studio Marketplace Publisher Management](https://marketplace.visualstudio.com/manage)** page.
2.  Sign in with your GitHub account.
3.  Click **"Create Publisher"**.
4.  Enter a unique ID (e.g., `veganipsum` or your username).
5.  Update your local `package.json` file to match this new ID in the `"publisher"` field.

---

## Step 4: Authenticate Your Machine

To publish from your terminal, you need a Personal Access Token (PAT). You do **not** use your GitHub password directly.

### Generate a Personal Access Token (PAT)

1.  Go to **[Azure DevOps](https://dev.azure.com)** and sign in.
2.  Click the **User Settings** gear icon (top right) -> **Personal access tokens**.
3.  Click **"New Token"**.
4.  Configure the token:
    - **Name:** `vsce-publish`
    - **Organization:** "All accessible organizations"
    - **Expiration:** 90 days (or custom)
    - **Scopes:**
        - Click "Show all scopes".
        - Scroll to **Marketplace**.
        - Check **Manage**.
5.  Click **Create**.
6.  **Copy the token immediately.** You will not be able to see it again.

### Login via Terminal

Run the following command in your project directory:

```bash
vsce login YOUR_PUBLISHER_ID
```

The terminal will prompt you for the token you just generated. Paste it in.

---

## Step 5: Publish

Once authenticated, you can publish the extension with a single command:

```bash
vsce publish
```

This command will:

1.  Increment the version number (optional, see below).
2.  Verify the `README.md` exists.
3.  Package the extension into a `.vsix` file.
4.  Upload it to the Marketplace.

### Version Bumping Shortcuts

You can automatically bump the version number while publishing:

- **Patch update (1.0.0 -> 1.0.1):**
    ```bash
    vsce publish patch
    ```
- **Minor update (1.0.0 -> 1.1.0):**
    ```bash
    vsce publish minor
    ```
- **Major update (1.0.0 -> 2.0.0):**
    ```bash
    vsce publish major
    ```

### Publish Specific version

```bash
vsce publish 1.0.5
```

This command does two things automatically:

1.  Updates the `version` field in your `package.json` to `1.0.5`.
2.  Publishes the extension to the marketplace.

### "Unpublish" a Specific Version

If you made a mistake and need to remove a **specific version** without taking down the entire extension:

```bash
vsce unpublish vegan-ipsum@1.0.5
```

_(Replace `vegan-ipsum` with your actual extension name)._

> **Warning:** Once a version is unpublished, you **cannot** reuse that specific version number again. You would have to publish a new version (e.g., `1.0.6`).

---

## Optional: Local Testing

If you want to test the installation locally before publishing to the world:

1.  **Package the extension:**

    ```bash
    vsce package
    ```

    This generates a `.vsix` file in your project directory (e.g., `vegan-ipsum-1.0.0.vsix`).

2.  **Install in VS Code:**
    - Open VS Code.
    - Go to the Extensions view (`Cmd/Ctrl+Shift+X`).
    - Click the "..." (Views and More Actions) menu in the top right.
    - Select **"Install from VSIX..."**.
    - Choose your generated file.

---

## Troubleshooting

- **"README.md not found" error:** Ensure you have a `README.md` in your project root. The marketplace requires it.
- **"Missing publisher" error:** Ensure the `publisher` field in `package.json` matches the ID you created on the Marketplace website exactly.

## Helpful Links

- **VS Code API Documentation:** [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- **Publishing Overview:** [VS Code Publishing Extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- **Marketplace Portal:** [Manage Publishers](https://marketplace.visualstudio.com/manage/publishers)

To publish a **specific version** (for example, jumping straight to version `2.0.0` or setting a specific patch number like `1.0.5`), you can pass the version number directly to the publish command.
