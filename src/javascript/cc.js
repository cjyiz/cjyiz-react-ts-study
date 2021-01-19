export const test=()=> {
    var list = [
        {"name": "John", "Average": 15, "High": 10, "DtmStamp": 1358226000000},
        {"name": "Jane", "Average": 16, "High": 92, "DtmStamp": 1358226000000},
        {"name": "Jane", "Average": 17, "High": 45, "DtmStamp": 1358226000000},
        {"name": "John", "Average": 18, "High": 87, "DtmStamp": 1358226000000},
        {"name": "Jane", "Average": 15, "High": 10, "DtmStamp": 1358226060000},
        {"name": "John", "Average": 16, "High": 87, "DtmStamp": 1358226060000},
        {"name": "John", "Average": 17, "High": 45, "DtmStamp": 1358226060000},
        {"name": "Jane", "Average": 18, "High": 92, "DtmStamp": 1358226060000}
    ];

    var sorted = groupBy(list, function (item) {
        return item.name;
    });
    console.log(sorted);
}
test();

const groupBy=(array, f) =>{
    var groups = {};
    array.forEach( (n)=> {
        const group=f(n)
        // var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(f(n));
    });
    return Object.keys(groups).map((group)=> {
        return groups[group];
    });
}
