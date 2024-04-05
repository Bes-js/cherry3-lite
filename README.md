<br/>
<img src="https://raw.githubusercontent.com/Bes-js/cherry3/main/assets/package-logo.png">
<h4 align="center">Cherry3 is a SQlite object modeling tool designed to work in an asynchronous environment.</h6>
<p align="center">
<img src="https://img.shields.io/npm/v/cherry3?style=for-the-badge">
<img src="https://img.shields.io/github/repo-size/Bes-js/cherry3?style=for-the-badge"> 
<img src="https://img.shields.io/npm/l/cherry3?style=for-the-badge"> 
<img src="https://img.shields.io/npm/dt/cherry3?style=for-the-badge"> 
<img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/cherry3/sequelize?style=for-the-badge">
<img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/cherry3/sqlite3?style=for-the-badge"> 
<a href="https://discord.gg/luppux" target="_blank"> 
<img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> 
</a>
<a href="https://www.buymeacoffee.com/beykant" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee">
</a>
</p>

#
## Installation

Using npm:
```shell
$ npm install cherry3-lite
```

Using yarn:

```bash
$ yarn add cherry3-lite
```

Using pnpm:

```bash
$ pnpm add cherry3-lite
```

#
## Features

* **Simple Setup:** Get started quickly with minimal configuration.
* **SQlite Storage:** Sqlite Will Come To Your Help Because It Is Compressed, Economical And Fast.
* **Asynchronous Operations:** Perform Database Operations Asynchronously Using Promises.
* **Filter and Update:** Easily filter and update records in your collections.
#
## Usage
```js
import db from 'cherry3-lite';
/* const db = require('cherry3-lite'); For CommonJS */

var data;

(async () => {

data = await db.set('test',5);
console.log(data); // => 5

data = await db.get('test');
console.log(data); // => 5

data = await db.delete('test');
console.log(data); // => true

data = await db.has('test');
console.log(data); // => false

data = await db.fetch('test');
console.log(data); // => null

data = await db.add('test',6);
console.log(data); // => 6

data = await db.sub('test',1);
console.log(data); // => 5

data = await db.inc('test',2);
console.log(data); // => 7

data = await db.dec('test',2);
console.log(data); // => 5

data = await db.all();
console.log(data);
/*
[{
id:2,
key:'test',
value:5
}]
*/

data = await db.fetchAll();
console.log(data);
/*
[{
id:2,
key:'test',
value:5
}]
*/

data = await db.type('test');
console.log(data); // => number

data = await db.push('testArray',1);
console.log(data); // => [1]

data = await db.push('testArray',[2,3,4,5]);
console.log(data); // => [1,2,3,4,5]

data = await db.pull('testArray',3);
console.log(data); // => [1,2,4,5]

data = await db.pull('testArray',[1,2,4]);
console.log(data); // => [5]

data = db.version;
console.log(data) // => 1.0.0



})();
```
#
## Settings File Definitions
[*=>* **Click Here**](https://fivesobes.gitbook.io/cherry3/sql-config-file)
#
## Sqlite Viewer Extension
<a href="https://marketplace.visualstudio.com/items?itemName=yy0931.vscode-sqlite3-editor"> <img src="https://raw.githubusercontent.com/yy0931/sqlite3-editor/main/demo.gif"> </a>

[For Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=yy0931.vscode-sqlite3-editor)

## License

Cherry3 is licensed under the **Apache License 2.0** License. See the [LICENSE](./LICENSE.md) file for details.

## Changelog

[*=>* **Click Here**](./CHANGELOG.md)

## Support

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
