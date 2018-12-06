const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const spriter = new SVGSpriter({
    dest: './public/images/sprite/',
    mode: {
        symbol: true
    }
});
const readPromise = new Promise((res, rej) => {
    fs.readdir('./public/images/',function(err,files){
        if(err) throw err;
        files.forEach(function(file){
            if (file.indexOf('.svg') !== -1){
                spriter.add(path.resolve(
                    `./public/images/${file}`),
                    file,
                    fs.readFileSync(`./public/images/${file}`),
                    {encoding: 'utf-8'}
                );
            }
        });
        res('result');
    });
});
readPromise.then(() => {
    spriter.compile(function(error, result) {
        mkdirp.sync(path.dirname(result.symbol.sprite.path));
        fs.writeFileSync(result.symbol.sprite.path, result.symbol.sprite.contents);
    });
});
