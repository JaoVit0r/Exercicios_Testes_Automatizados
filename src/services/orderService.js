class orderService {
    constructor() {};

    order = (array) => {
        return array.sort();
    };
};

class orderDescService {
    constructor() {}

    orderDesc = (array) => {
        return array.reverse();
    }
}

class removeDuplicates {
    constructor() {}

    removeDuplicates = (array) => {
        return array.filter((first, second) =>  array.indexOf(first) == second )
    }
}

module.exports = {orderService, orderDescService, removeDuplicates}