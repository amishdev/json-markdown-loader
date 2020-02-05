# json-markdown-loader

This is intended to be used with [amish-yaml-loader](https://github.com/amishdev/yaml-loader).
If you want to load in Yaml files and parse markdown please refer to those documents. If you want to use this in json files keep reading.

## install

install json markdown loader `npm install json-markdown-loader --save-dev` or `yarn add json-markdown-loader -D`

Webpack config
```js
module: {
        rules: [
            {
                test: /\.ya?ml$/,
                use: ['json-loader', 'json-markdown-loader'],
            },
        ],
    }
```

Json
```json
{
  "content": {
    "type": "markdown",
    "content": "##heading \n paragraph \n - list item \n - list item 2"
  }
}
```
