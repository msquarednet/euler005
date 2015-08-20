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
        for (var i=num; i>0; i--) { arr.push(i); } 
        return arr;
    },
    getOptimizedFactors: function(num) {  //from 1 to num
        var arr = [];
        var mainstr, substr;
        //create array...
        for (var i=num; i>0; i--) { arr.push(i); }; //  [6,5,4,3,2,1]
        //eliminate redunant factors from array...
        for (var i=0; i<arr.length; i++) {
            mainstr = Euler005.getFactors(arr[i]).toString();           // console.log(mainstr, "i="+i);
            for (var j=arr.length-1; j>i; j--) {    //j>i :)
                substr = Euler005.getFactors(arr[j]).toString();        // console.log("_ "+substr,"j="+j);
                if (mainstr.indexOf(substr)!=-1) {
                    arr.splice(j,1);                                    // console.log("    splice! "+arr);  
                };
            };             // console.log("arr="+arr);
        }; 
        return arr;
    },
    isNumberZeroModFrom1thruX: function(number, x) {    //should skip 1(?)....
        if (number && x) {
            if (isNaN(number)) {number=1;}  if (isNaN(x)) {x=1;}    //greater than zero?
            
            // var factors_array = Euler005.getOptimizedFactors(x); //way slow????? huh?????
            var factors_array = Euler005.getAllFactors(x);
            
            for (var i=0,l=factors_array.length; i<l; i++) {
                if (number%factors_array[i]!==0) {return false;}
            }
            // for (var i=1; i<=x; i++) {
            //     if (number%i===0) {/*console.log("TRUE: "+number+"%"+i+"===0")*/}
            //     else {              //console.log("FALSE: "+number+"%"+i+"===0")
            //         return false;   
            //     }
            // }
            return true;
        } else {return false;}
    },
    findSmallestNumberZeroModFrom1thruX: function(x) {    //x=10, then number (answer) becomes 2520
        if (x) {
            var starttime = new Date().getTime();       //console.log(starttime);
            if (isNaN(x)) {x=1;}    x = Math.abs(x);
            var worky = false;
            var number = x;
            
            do {
                worky = Euler005.isNumberZeroModFrom1thruX(number,x);
                if (worky) {
                    var endtime = new Date().getTime(); //console.log(endtime);
                    console.log("---------------------------WORKY!!!!!: "+number); 
                    console.log(endtime-starttime+" milliseconds");
                    return number;
                } else {/*console.log("------------------NO worky: " + number)*/};
                number++;
            } while (!worky);
            
        } else {return 0;}
    }
    
};
console.log("FOOBAR!!!!!!!!!!!!!!!!!!!!!");

// console.log(Euler005.getOptimizedFactors(20));   //so slow. why?
// console.log(Euler005.getAllFactors(20));
// console.log("is zero-mod for all: " + Euler005.isNumberZeroModFrom1thruX(2520,10));
// console.log("is zero-mod for all: " + Euler005.isNumberZeroModFrom1thruX(232792560,20));

// console.log("smallest zero-mod for 1-"+4+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(4));
console.log("smallest zero-mod for 1-"+10+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(10));
// console.log("smallest zero-mod for 1-"+11+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(11));
// console.log("smallest zero-mod for 1-"+15+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(15));
// console.log("smallest zero-mod for 1-"+20+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(20));