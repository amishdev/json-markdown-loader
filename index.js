const marked = require('marked');

module.exports = function(source) {

    let parseMarkdownRecursive = (data) => {
        let results = {};
        for(let i in data) {
            if(typeof data[i] === 'object') {
                if(data[i].type === 'markdown') {
                    results[i] = marked(data[i].value);
                }
                else {
                    results[i] = parseMarkdownRecursive(data[i]);
                }
            }
            else {
                results[i] = data[i];
            }
        }
        return results;
    };

    return JSON.stringify(parseMarkdownRecursive(JSON.parse(source)))
};