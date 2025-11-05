import globals from "globals";
import pluginjs from "@eslint/js";

export default [
    { Files: ["**/*.js"], languageOptions:{sourceType: "commonjs"}},
    {languageOptions: {globals: globals.node} },
    pluginjs.configs.recommended,
]