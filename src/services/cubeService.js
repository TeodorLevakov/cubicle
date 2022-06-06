const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.save = (cube) => {
    cubes.push(cube);

    let data = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), data, { encoding: 'utf-8'})
        
}