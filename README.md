# Cspell ug-khan Dictionary

Ug-khan dictionary for cspell.

## Installation

Global Install and add to cspell global settings.

```sh
npm install -g cspell-dict-ug-khan
cspell link add cspell-dict-ug-khan
```

## Uninstall from cspell

```sh
cspell link remove cspell-dict-ug-khan
```

## Manual Installation

Manual installation is useful if you want to include this dictionary as part of your CI/CD lint process.

```
npm i cspell-dict-ug-khan
```

The `cspell-ext.json` file in this package should be added to the import section in your `cspell.json` file.

```javascript
{
    // …
    "import": ["cspell-dict-ug-khan/cspell-ext.json"],
    // …
}
```

## License

MIT
