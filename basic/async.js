let a =1
let b = 2

function print() {
    console.log('TimeOut');
}

setTimeout(print, 0);

async function print2() {
    await console.log('TimeOut 2');
}

function square(number) {
    return new Promise((resolve, reject)=> {
        resolve(number * number);
    });
}

square(2).then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

const x = square(2);            
console.log(x);


print2();
console.log(a);
console.log(b);
