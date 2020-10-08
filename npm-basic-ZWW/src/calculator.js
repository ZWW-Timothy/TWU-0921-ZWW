import _ from 'lodash';

const sum = (numbers) => {
    return _.sum(numbers);
};

const plus = (number, addend) => {
    return number + addend;
};

export {
    plus, sum
};