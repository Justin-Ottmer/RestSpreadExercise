const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doulbeAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
//review this one

const extend = (arr1, arr2) => ([...arr1, ...arr2]);
//check if works

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});
// check if works