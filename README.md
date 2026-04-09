# Lua (moonsharp)

Lua (moonsharp) is the VS Code extension for the RemakeEngine Lua workflow. It packages the language client, the Lua language server, and the project-specific configuration used to edit, analyze, and export Moonsharp/Lua code from the editor.

## Highlights

- Language server support for completion, hover, diagnostics, formatting, semantic tokens, hints, and signature help.
- Automatic activation when a Lua file is opened.
- Activity bar view for project status.
- Commands for exporting documents, reloading FFI metadata, and starting or stopping the server manually.
- Project-specific settings for runtime, diagnostics, completion, workspace libraries, and editor behavior.

## Commands

- Lua: Export Document - exports the current document data to a folder you choose.
- Lua: Reload FFI Meta - refreshes the FFI metadata used by the language server.
- Lua: Start Server - starts the language server client manually.
- Lua: Stop Server - stops the current language server client.
- Refresh project status - refreshes the Project Status view in the activity bar.

## Configuration

All extension settings are grouped under `Lua.*`. Common areas you may want to adjust include:

- `Lua.misc.executablePath` - use a custom language server binary.
- `Lua.misc.parameters` - pass extra server arguments.
- `Lua.workspace.library` - add extra library folders for analysis.
- `Lua.runtime.version` - choose the Lua runtime version the server should assume.
- `Lua.diagnostics.enable` - enable or disable diagnostics globally.

The full set of options is defined in the extension manifest and is designed to match the bundled server behavior.

## Getting Started

1. Install the extension or open the workspace in VS Code for development.
2. Open any `.lua` file to start the client automatically.
3. Use the command palette or the activity bar view to access server actions and project status.

## Development

The client bundle is built with Deno and esbuild.

- `deno task build` - builds the development client bundle.
- `deno task prod` - builds the minified production client bundle.
- `./build.ps1` - builds the server, client, localization files, and VSIX staging output.

The packaging flow stages the extension into `Build/TMP` before generating the VSIX.

## Repository Layout

- `src/` - VS Code extension source.
- `dist/` - bundled client output.
- `resources/` - icons and extension assets.
- `LICENSE` - client license.

## License

See the repository root and submodule license files for the applicable terms.
