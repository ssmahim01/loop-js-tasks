// Skip the numbers divisible by 5

for(let n = 55; n <= 85; n+=2){
    if(n % 5 === 0){
        continue;
    }
    console.log(n);
}