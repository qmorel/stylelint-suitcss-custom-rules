# stylelint-suitcss-rules
This [stylelint] configuration validates that your SCSS files follow the [SuitCSS](https://suitcss.github.io/) naming conventions (probably with some custom adjustments).

I encourage you to have a llok at `src/index.js` to see all the rules.

## Installation
```sh
npm install --save-dev https://github.com/qmorel/stylelint-suitcss-custom-rules
```

## Usage
Add this configuration to the end of your `extends` array inside `.stylelintrc`.

This package already extends [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) and must be used with Sass/Scss files.

```javascript
{
  "extends": [
    // ...some other shareable Stylelint configuration
    "stylelint-suitcss-rules"
  ],

  "rules": {
    // ...your own custom rules and overrides
  }
}
```

