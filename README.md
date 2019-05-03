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
- `$ npm run lint` - launch all linters.

In addition, the code check is performed in the pre-commit hook.
### HTML linter
Command line:
- `$ npm run lint:html` - launch HTML linter.
### CSS linter
Command line:
- `$ npm run lint:css` - launch CSS linter.
### JS linter
Command line:
- `$ npm run lint:js` - launch JS linter;
- `$ npm run eslint-check` - check the compatibility of ESLint rules with Priettier.
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
If you find a bug or something does not work, then you can leave your questions or comments on [issues](https://github.com/ecmatonix/starter-website-lite/issues).
## License
[MIT license](https://github.com/ecmatonix/starter-website-lite/blob/master/LICENSE)