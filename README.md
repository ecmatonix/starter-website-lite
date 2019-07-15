# starter-website-lite

Starting static website template to quickly create development environment of a simple test project.

## Features

1. Synchronization between browsers.
2. Livereload mode.
3. Normalization of browser styles.
4. Download required polyfills.
5. jQuery.
6. Test (Mocha and Chai).
7. PWA (Progressive Wep Application).
8. Convenient work with git-hooks (husky module).
9. Check commit message ([conventional commit](https://www.conventionalcommits.org) specification).
10. Automate the process of creating a change log.
11. Linting of HTML code (on demand and in the "pre-commit" hook).
12. Linting of CSS code (on demand and in the "pre-commit" hook).
13. Linting of JS code (on demand and in the "pre-commit" hook).
14. Formatting code (on demand and formatting check in the pre-commit hook).
15. Add the necessary prefixes for CSS properties.

## Required dependencies

To work with a website template on your computer, `Node.js 10.14.1+` and `npm 6.4.1+` are required.

## Getting started

Download this zip archive or clone this repository (Git required) to your computer.

Then:

1. `$ cd starter-website-lite` - go inside the project directory;
2. `$ npm install` - install dependencies;
3. `$ npm run start` - launch Gulp along with Browser-sync;
4. open the page in the browser at [http://localhost:3000](http://localhost:3000).

That's it, now the starting template is ready for work.

## Linters

Command line:

- `$ npm run lint` - launch all linters;
- `$ npm run lint:html` - launch HTML linter.
- `$ npm run lint:css` - launch CSS linter.
- `$ npm run lint:js` - launch JS linter;
- `$ npm run eslint-check` - check the compatibility of ESLint rules with Priettier.

In addition, the code check is performed in the pre-commit hook.

## Formatter

Command line:

- `$ npm run format` - format all code in files according to a pattern (`**/*.{html,css,js,json,yml,md}`);
- `$ npm run format:html` - format all code in files according to a pattern (`**/*.html`);
- `$ npm run format:css` - format all code in files according to a pattern (`**/*.css`);
- `$ npm run format:js` - format all code in files according to a pattern (`**/*.js`);
- `$ npm run format:json` - format all code in files according to a pattern (`**/*.json`);
- `$ npm run format:md` - format all code in files according to a pattern (`**/*.md`);
- `$ npm run format:file <glob pattern|path to file>` - format the code in the specified file or files  
  (example: `$ npm run format:file "public/index.html"`);
- `$ npm run format-check` - check if the files (glob pattern: `**/*.{html,css,js,json,yml,md}`) are formatted;
- `$ npm run format-check-file <glob pattern|path to file>` - check if the file is formatted  
  (example: `$ npm run format-check-file "public/index.html"`);

In addition, the code formatting check is performed in the pre-commit hook.

## Autoprefixer

List of supported browsers (see package.json):

- "last 2 version";
- "> 1%".

Command line:

- `$ npm run autoprefix` - add the necessary prefixes for CSS properties.

## Check commit message

Checking a commit message is done using the commitlint module. Rules for validation correspond to [conventional commit](https://www.conventionalcommits.org) specification.

[Commitlint.io](https://commitlint.io) (online generator) is used to create and pre-check the text of the commit message.

## Recommended workflow

Workflow:

1. make changes;
2. commit those changes;
3. pull all the tags _(optional)_;
4. `$ npm version [patch|minor|major]` - run the command;
5. push commits and tags to remote repository.

## Bugs

If you find a bug or something does not work, please leave your questions or comments on [issues](https://github.com/ecmatonix/starter-website-lite/issues).

## License

[MIT license](https://github.com/ecmatonix/starter-website-lite/blob/master/LICENSE)
