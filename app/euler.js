var Euler005 = {

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
    getAllFactors: function(num) {  //from 1 to num
        var arr = [];
        for (var i=num; i>0; i--) {
            arr.push.apply(arr, Euler005.getFactors(i));
        } 
        //return arr;
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        arr = arr.filter( onlyUnique ).sort();
        return arr;
        //well, that was dumb...
    }
    
};
console.log("FOOBAR!!!!!!!!!!!!!!!!!!!!!");

console.log(Euler005.getAllFactors(20));

