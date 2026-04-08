local json = require 'json-beautify'

local VERSION = "3.17.1"

local fsu     = require 'fs-utility'
local packagePath = 'submodules/client/package.json'
local package = json.decode(fsu.loadFile(packagePath))

package.version = VERSION

package.contributes.configuration = {
    title = 'Lua',
    type = 'object',
    properties = require 'submodules.server.tools.configuration',
}
package.contributes.semanticTokenScopes = {
    {
        language = 'lua',
        scopes = require 'package.semanticTokenScope',
    }
}

local encodeOption = {
    newline = '\r\n',
    indent  = '\t',
}
print('生成 package.json')
fsu.saveFile(packagePath, json.beautify(package, encodeOption) .. '\r\n')
