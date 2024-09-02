// Use break when sum reaches or exceeds 100

let num = 1;
let sum1 = 0;

while(true){
    console.log('The number is:', num);
    sum1 += num;
    console.log('The sum is:', sum1);
    if(sum1 >= 100){
        break;
    }
    num++;
}

console.log(`The sum reached ${sum1} with the last added number being ${num - 1}`);