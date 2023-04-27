# @matheus/sanitize

Sanitizes a string removing sql keywords

## Install

```
$ npm install @matheus/sanitize
```

## Usage

```js
const sanitize = require("@matheus/sanitize");

sanitize("login: user_xyz; select * from users where id = 1;");
//=> "Somuchspace!"
```