# VanillaJS Browser Extension Template

An opinionated vanillaJS extension template.

## Why VanillaJS

Browser extension should be lightweight without any overhead. Somtimes
using a framework for simple browser extension is overkill. Some front-end
framework are easy to mess up by beginner and resulting in extension that
actually eat resources and slow down browsing experience.

## The flow

Build script will first try to match your manifest with your source folder.
Any folder that contains index.js will assumed as entry point.
The build script is a guplfile combine with rollup to bundle the javascript.

Fonts, manifest.json and CSS files will be copied from assets folder to the build folder.

Icon image should be in `assets/my-icon.png` and the script will generate `16`, `48` and `128` 
size according to the extension guidelines.

`debug` output folder can be use to directly loaded into your browser.
`release` output folder contain a zipped minified version of the extension.

This can be directly upload to extension marketplace or passed to CI for next step.

Output example:
```sh
extension_project/
└── build/
    └── debug/
        ├── icons/
        │   ├── icon_16x16.ico
        │   ├── icon_32x32.ico
        │   └── icon_48x48.ico
        ├── fonts
        ├── style.css
        ├── popup.js
        ├── popup.html
        └── manifest.json
```

## Scripts

```sh
npm run release # run test, update changelog and version, lastly build zipped version
npm run build # build zipped version
npm run dev # run gulp watch and bundle in dist/debug
npm run test # run both integration test and unit test
```

## Testing

This template include jest, jest-puppeteer, jsdom canvas for unit and integration test.

### Integration / e2e testing
Integration test is using jest-puppeteer and there is no way to extract the map 
the coverage to source file at the moment. Hence we are using `puppeteer-to-istanbul` 
to generate the reports.

default jest coverage is at `coverage/lcov-report/index.html`
integration coverage is at `coverage/index.html`

## Version Next
- support dynamic source structure
- compare manifest and validate manifest file

## Get the template

### Manifest v2
```
degit noxasch/extension_template/manifest_v2
```

Project Structure
```
extension_project/
├── assets/
│   └── manifest.json
├── src/
│   ├── lib
│   ├── background/
│   │   └── index.js
│   └── popup/
│       └── index.js
├── test
├── .eslintrc
├── gulpfile.js
├── jsconfig.json
├── package.json
└── README.md
```


### Manifest v3

WIP

## Typescript support

I prefer using vanilla javascript with JSdoc to utilize typescript in vscode instead
of using typescript direcly. I use this a lot in server side, and it allow me to execute 
my source code without transpile time while allow me to document my code with type acquisition.
However this is not the case with this template since we need to bundle it anyway. 
The tsconfig included works well with this setup.

Here are some read if you are interested with using jsdoc:
- https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/
- https://docs.joshuatz.com/cheatsheets/js/jsdoc/

However you are free to update the tsconfig to match your preference.
