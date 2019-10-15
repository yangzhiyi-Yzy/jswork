function calculate(){
    let num = document.getElementById('num').value
    console.log(num)
    num = parseInt(num)&&Number(num)
    console.log(num)
    if (!isNaN(num)){
        console.log(111)
        document.getElementById('pai').value = pi(num)
    }
}
    
function factorial(n){
    let sum = 1
    for (let i=1;i<=n;++i){
        sum *=i
    }
    return sum
}

function oddFactorial(n){
    let sum = 1
    for (let i=1;i<=n;++i){
        sum *= ((2*i)+1)
    }
    return sum
}

function pi(num){
    let sum = 0
    for (let i=0;i<=num;++i){
        let divdend = factorial(i)
        let divisor = oddFactorial(i)
        sum += (divdend/divisor)
        console.log(sum)
    }
    return sum*2
}
calculate()
console.log(document.getElementById('pai'))