var Euler003 = {

    isPrime: function(num) {
        if (Euler003.getFactors(num).length===2 && num>1) {return true;}
        return false;
    },
    getFactors: function (num) {
        var factors = [];
        for (var i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
            if (num % i === 0) {
                factors.push(i);
                if (num / i !== i) {factors.push(num / i);}
            }
        }
        factors.sort(function(a, b){return a - b;});  // numeric sort
        return factors;
    },
    getPrimeFactors: function(factors) {
        var primefactors = [];
        if (factors) {
            for (var i=0, l=factors.length; i<l; i++) {
              if (Euler003.isPrime(factors[i])) {primefactors.push(factors[i])}
            }            
        }
        return primefactors;
    },
    getLargestPrimeFactor: function(num) {    //get largest prime factor of 600851475143
        var factors  = Euler003.getFactors(num);
        var primefactors = Euler003.getPrimeFactors(factors);
        //document.querySelector('input[name=answer]').value = sum;  
        //console.log(factors);
        //console.log(primefactors);
        return primefactors[primefactors.length-1];
    }
    
};
console.log("FOOBAR!!!!!!!!!!!!!!!!!!!!!");
// console.log(Euler003.getFactors(13195));
// console.log( Euler003.getPrimeFactors( Euler003.getFactors(13195) ) );
// console.log(Euler003.getFactors(600851475143));
// console.log( Euler003.getPrimeFactors( Euler003.getFactors(600851475143) ) );
// console.log(Euler003.getLargestPrimeFactor(600851475143));
