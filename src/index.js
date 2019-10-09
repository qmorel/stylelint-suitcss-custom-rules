module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines",
  ],
  plugins: ['stylelint-order'],
  "rules": {
    "function-comma-space-after": "always-single-line",
    "function-parentheses-space-inside": "never-single-line",
    "max-nesting-depth": [
      3,
      {
        "ignore": ["blockless-at-rules"],
        "ignoreAtRules": [
          "media",
          "supports",
          "include"
        ]
      }
    ],
    "order/order": [
      [
        {
          "type": "at-rule",
          "name": "include",
          "parameter": "/^(media-)?breakpoint/",
          "hasBlock": true,
          "disableFix": true
        }
      ]
    ],
    "scss/dollar-variable-pattern": "^_?[A-Z]?[a-z]+(-?[a-z]+([A-Z0-9][a-z0-9]*)*)*$",
    "scss/percent-placeholder-pattern": "^[A-Z]?[a-z]+(-?[a-z]+([A-Z0-9][a-z0-9]*)*)*$",
    "selector-class-pattern": [
      "^error$|^(t|u|is|has|not?)(-(sm|md|lg))?-[a-z0-9]+([A-Z0-9][a-z0-9]*)*$|^([a-z]+-)?(([A-Z0-9][a-z0-9]*)*)+(-[a-z0-9]+([A-Z0-9][a-z0-9]*)*)*(--[a-z0-9]+([A-Z0-9][a-z0-9]*)*)*$|^form-|^js$",
      {
        "message":
        "Selector should be follow the SUIT CSS naming conventions: see https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md (selector-class-pattern)"
      }
    ],
    "unit-whitelist": ["deg", "em", "ex", "ms", "rem", "%", "s", "turn", "px", "vw", "vh", "fr", "ch"]
  }
}