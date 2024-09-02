// Use break when it encounters the first square number

for(let i = 1; i <= 100; i++){
    let root = Math.floor(Math.sqrt(i));
    console.log(root);
    if(root * root === i){
        console.log(`The first square number between 1 and 100 is ${i}`);
        break;
    }
}