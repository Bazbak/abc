const categories = {
    'Смартфоны': [
        {
            'name': 'Apple Iphone 13',
            'price': 459_000,
            'options': {
                'Производитель': 'Apple',
                'Диагональ': '6.2',
            }
        },
        {
            'name': 'Samsung Galaxy S22',
            'price': 459_000,
            'options': {
                'Производительность': 'Samsung',
                'Диагональ': '5.9'
            }
        }
    ],
    'Наушники': [
        {
            'name': 'Samsung Galaxy Buds 2',
            'price': 113_000,
            'options': {
                'Производитель': 'Samsung',
                'Сопротивление': '32'
            }
        }
    ]
};

let arr = []

// let korzina = 0;

for (let categoriesKey in categories) {
    for (let item of categories[categoriesKey]) {
            if (item.price !== ){
                arr.push(item.price)
            }
        }
    }
}

console.log(arr)

// console.log(korzina)

// for (let categoriesKey in categories) {
//     for (let num of categories[categoriesKey]) {
//         console.log(num.name)
//         console.log(num.price)
//         for (let item in num.options) {
//             console.log(num.options[item])
//         }
//     }
// }
