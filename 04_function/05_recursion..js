
function f(n){

    if(n<0){
        return"not define factorial";

    }
    else if(n === 1){

        return 1;
    }
    else{
        return n*f(n-1);
    }
}

console.log(f(5));

function factorial(num){

    if(num < 0){
        return "not define";
        
    }
    else if(num === 1){
        return 1;

    }
    else{
        return num *factorial(num - 1)
    }

}
console.log(factorial(10));




function fact(sum){
    if(sum < 0){

        return "not define";
    }

    else if(sum == 1){

        return 1;

    }

    else {

        return sum * fact(sum-1)
    }
}

console.log(fact(15));