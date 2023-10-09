
const factorial = number =>{
    var sum=1;
    for(var i = 1; i<= number; i++)
    {
        sum=sum*i;
    }
    return sum;
}
const permutation = (n,r) => {
   return factorial(n)/factorial(n-r)
}

const combination = (n,r) =>{
    return factorial(n)/factorial(r)/factorial(n-r);
}

const multiPermutation= (n,r) =>{
    var sum=1;
    for(var i = 1; i<=r; i++){
        sum= sum*n;
    }
    return sum;
}

const multiCombination= (n,r)=>{
    return factorial(n+r-1)/factorial(r)/factorial(n-1);
}

module.exports = {
factorial:factorial,
permutation: permutation,
combination: combination,
multiPermutation: multiPermutation,
multiCombination: multiCombination,
};
