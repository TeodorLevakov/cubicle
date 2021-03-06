const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getAll = (search = '', fromImp, toImp ) => {
    let from = Number(fromImp) || 0;
    let to = Number(toImp) || 6;

    let result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);

    return result;
};

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length-1].id + 1, ...cube});

    let data = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), data, { encoding: 'utf-8'})
        
}