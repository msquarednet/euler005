/* globals describe it expect Euler005 */
describe("Euler005", function() {
    
    it('exists', function() {
        expect(Euler005).toBeDefined();
    });

    // describe("Euler005.isPrime", function() {
    //     it('exists', function() {
    //         expect(Euler005.isPrime).toBeDefined();
    //     });        
    //     it("isPrime() returns false", function() {
    //         expect(Euler005.isPrime()).toBe(false);
    //     });
    //     it("isPrime(13) returns true", function() {
    //         expect(Euler005.isPrime(13)).toBe(true);
    //     });
    //     it("isPrime(12) returns false", function() {
    //         expect(Euler005.isPrime(12)).toBe(false);
    //     });
    // });

  
    describe("Euler005.getFactors", function() {
        it('exists', function() {
            expect(Euler005.getFactors).toBeDefined();
        });
        it("getFactors() returns empty array", function() {
            expect(Euler005.getFactors().length).toEqual(0);
        });
        it("getFactors(10) returns [1,2,5,10]", function() {
            expect(Euler005.getFactors(10)).toEqual([1,2,5,10]);
        });
    });
    
    describe("Euler005.getAllFactors", function() {
        it('exists', function() {
            expect(Euler005.getAllFactors).toBeDefined();
        });
        it("getAllFactors() returns empty array", function() {
            expect(Euler005.getAllFactors().length).toEqual(0);
        });
        it("getAllFactors(10) returns [10,9,8,7,6,5,4,3,2,1]", function() {
            expect(Euler005.getAllFactors(10)).toEqual([10,9,8,7,6,5,4,3,2,1]);
        });
    });
    
    describe("Euler005.getOptimizedFactors", function() {
        it('exists', function() {
            expect(Euler005.getOptimizedFactors).toBeDefined();
        });
        it("getOptimizedFactors() returns empty array", function() {
            expect(Euler005.getOptimizedFactors().length).toEqual(0);
        });
        it("getOptimizedFactors(10) returns [10,9,8,7,6,5]", function() {
            expect(Euler005.getOptimizedFactors(10)).toEqual([10,9,8,7,6,5]);
        });
    });
    
    describe("Euler005.isNumberZeroModFrom1thruX", function() {
        it('exists', function() {
            expect(Euler005.isNumberZeroModFrom1thruX).toBeDefined();
        });
        it("isNumberZeroModFrom1thruX() returns false", function() {
            expect(Euler005.isNumberZeroModFrom1thruX()).toBe(false);
        });
        it("isNumberZeroModFrom1thruX(1) returns false", function() {
            expect(Euler005.isNumberZeroModFrom1thruX(1)).toBe(false);
        });
        it("isNumberZeroModFrom1thruX(2520,10) returns true", function() {
            expect(Euler005.isNumberZeroModFrom1thruX(2520,10)).toBe(true);
        });
        it("isNumberZeroModFrom1thruX(232792560,20) returns true", function() {
            expect(Euler005.isNumberZeroModFrom1thruX(232792560,20)).toBe(true);
        });
    }); 
    
    describe("Euler005.findSmallestNumberZeroModFrom1thruX", function() {
        it('exists', function() {
            expect(Euler005.findSmallestNumberZeroModFrom1thruX).toBeDefined();
        });
        it("findSmallestNumberZeroModFrom1thruX() returns 0", function() {
            expect(Euler005.findSmallestNumberZeroModFrom1thruX()).toBe(0);
        });
        it("findSmallestNumberZeroModFrom1thruX(1) returns false", function() {
            expect(Euler005.findSmallestNumberZeroModFrom1thruX(1)).toBe(1);
        });
        it("findSmallestNumberZeroModFrom1thruX(10) returns true", function() {
            expect(Euler005.findSmallestNumberZeroModFrom1thruX(10)).toBe(2520);
        });
        it("findSmallestNumberZeroModFrom1thruX(20) returns true", function() {
            expect(Euler005.findSmallestNumberZeroModFrom1thruX(20)).toBe(232792560);
        });
    }); 
    
});