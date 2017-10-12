# json-var-file
Store JSON variable into a file.

[![NPM Version][npm-version]][npm-url]
[![travis][travis-badge]][travis-url]

## Install

```
npm install json-var-file --save
```
## Usage



``` js
var jvf = require('json-var-file');
```

### jvf.save(var, object)
```jvf.save()``` store value of object, a JSON variable inside var.json. If a file already exist, current value replace old file.

Example :

``` js
jvf.save("lastGoodProject", listing);
```

### jvf.get(var)
```jvf.get()``` return a valid JSON, by opening a JSON file called var.json. If no file exist, return __false__.

Example :

``` js
myJSON = jvf.get("lastGoodProject");
```
## Dependencies

json-var-file library is a [nodeJS](https://nodejs.org/en/) module using some usefull NPM modules like :

- [filenamify](https://github.com/sindresorhus/filenamify)
- [fs](https://nodejs.org/api/fs.html)

## Licence
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) - Arthur Lacoste


[npm-version]:https://img.shields.io/npm/v/json-var-file.svg
[npm-url]: https://npmjs.org/package/json-var-file
[travis-badge]: http://img.shields.io/travis/arthurlacoste/json-var-file.svg
[travis-url]: https://travis-ci.org/arthurlacoste/json-var-file
