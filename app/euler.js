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
        var index = 0;
        for (var i=num; i>0; i--) {
            arr.push(i);
        } 
        for (var i=num; i>0; i--) {
            arr.push(i);
        } 
        // var temparr;
        // for (var i=num; i>0; i--) {
        //     temparr = Euler005.getFactors(i);
        //     console.log(temparr);
        //     for (var j=0, l=temparr.length; j<l; j++) {
        //         if (arr.indexOf(temparr[j])==-1) {arr.push(temparr[j])};
        //     }
        //     //arr.push.apply(arr, Euler005.getFactors(i));
        // } 
        return arr;
        
        // function onlyUnique(value, index, self) { 
        //     return self.indexOf(value) === index;
        // }
        // arr = arr.filter( onlyUnique ).sort();
        // return arr;
        //well, that was dumb...
    },
    isNumberZeroModFrom1thruX: function(number, x) {    //should skip 1(?)....
        if (number && x) {
            if (isNaN(number)) {number=1};  if (isNaN(x)) {x=1};    //greater than zero?
            for (var i=1; i<=x; i++) {
                if (number%i===0) {/*console.log("TRUE: "+number+"%"+i+"===0")*/}
                else {
                    //console.log("FALSE: "+number+"%"+i+"===0")
                    return false;   //break;
                }
            }
            return true;
        } else {return false;}
    },
    findSmallestNumberZeroModFrom1thruX: function(x) {    //should skip 1(?).... 
        if (x) {
            if (isNaN(x)) {x=1};
            x = Math.abs(x);
            var worky = false;
            var starttime = new Date().getTime();       //console.log(starttime);
            
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

//console.log(Euler005.getAllFactors(6));
//console.log("is zero-mod for all: " + Euler005.isNumberZeroModFrom1thruX(2520,10));
//console.log("is zero-mod for all: " + Euler005.isNumberZeroModFrom1thruX(232792560,20));


// console.log("smallest zero-mod for 1-"+4+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(4));
// console.log("smallest zero-mod for 1-"+10+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(10));
// console.log("smallest zero-mod for 1-"+11+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(11));
//console.log("smallest zero-mod for 1-"+15+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(15));
 console.log("smallest zero-mod for 1-"+20+" is: " + Euler005.findSmallestNumberZeroModFrom1thruX(20));

