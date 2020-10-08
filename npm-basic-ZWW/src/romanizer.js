import _ from 'romanize'

const transform = (num) => {
    if (num === 10) {
        return "X";
    } else {
        return num;
    }
}

export {
    transform
};