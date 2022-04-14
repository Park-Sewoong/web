for (let i = 0; i <5; i++) {
    console.log(i);
}

var i = 0;

//before
// while (i < 5) {
//     i++;
//     console.log(i);    
// }

//after
while (i < 5) {
    console.log(i);
    i++;    
}

i = 30;

if (i === 30) {
    console.log('true');
} else {
    console.log('false');
}

i === '30' ? console.log('true') : console.log('false')

function hello() {
    console.log('hello');
}

hello();

let i = '';

if (i) {
    console.log('yes!')
} else {
    console.log('no...');
}


let groceries = ['milk', 'cocoa puffs']; // array

//아래 두개는 같은 코드
for (let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]);
}



// groceries.map(function (grocery) {
//     console.log(grocery);
// }
