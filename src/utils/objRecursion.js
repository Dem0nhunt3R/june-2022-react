export const explorer = (obj) => {
    let arr = [];
    let count = 0;

    f(obj);

    function f(o) {
        for (const key in o) {
            if (typeof o[key] === 'object') {
                f(o[key])
            } else {
                if (key === 'name' && count === 0) {
                    arr.push({[key]: o[key]});
                    count++;
                } else if (key === 'name' && count === 1) {
                    arr.push({companyName: o[key]});
                } else {
                    arr.push({[key]: o[key]})
                }
            }
        }
    }

    return arr;
}