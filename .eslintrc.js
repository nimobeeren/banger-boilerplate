module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    // These rules are personal preference
    "no-console": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        // These rules are set to work nicely with TypeScript
        "no-undef": "off",
        "no-unused-vars": "off",
        "import/no-unresolved": "off",
        "spaced-comment": "off", // for `/// <reference />`
        "import/extensions": [
          "error",
          { js: "never", ts: "never", tsx: "never" },
        ],
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".js", ".tsx"] },
        ],
      },
    },
  ],
};
