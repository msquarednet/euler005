describe("Euler003", function() {
    
    it('exists', function() {
        expect(Euler003).toBeDefined();
    });

    describe("Euler003.isPrime", function() {
        it('exists', function() {
            expect(Euler003.isPrime).toBeDefined();
        });        
        it("isPrime() returns false", function() {
            expect(Euler003.isPrime()).toBe(false);
        });
        it("isPrime(13) returns true", function() {
            expect(Euler003.isPrime(13)).toBe(true);
        });
        it("isPrime(12) returns false", function() {
            expect(Euler003.isPrime(12)).toBe(false);
        });
    });
    
    describe("Euler003.getFactors", function() {
        it('exists', function() {
            expect(Euler003.getFactors).toBeDefined();
        });
        it("getFactors() returns empty array", function() {
            expect(Euler003.getFactors().length).toEqual(0);
        });
        it("getFactors(10) returns [1,2,5,10]", function() {
            expect(Euler003.getFactors(10)).toEqual([1,2,5,10]);
        });
    });
    
    describe("Euler003.getPrimeFactors", function() {
        it('exists', function() {
            expect(Euler003.getPrimeFactors).toBeDefined();
        });
        it("getPrimeFactors() returns empty array", function() {
            expect(Euler003.getPrimeFactors().length).toEqual(0);
        });
        it("getPrimeFactors([1,2,5,10]) returns [2,5]", function() {
            expect(Euler003.getPrimeFactors([1,2,5,10])).toEqual([2,5]);
        });
    });
    
    describe("Euler003.getLargestPrimeFactor", function() {
        it('exists', function() {
            expect(Euler003.getLargestPrimeFactor).toBeDefined();
        });
        it("getLargestPrimeFactor() returns undefined", function() {
            expect(Euler003.getLargestPrimeFactor()).toEqual(undefined);
        });
        it("getLargestPrimeFactor(10) returns 5", function() {
            expect(Euler003.getLargestPrimeFactor(10)).toEqual(5);
        });
        it("getLargestPrimeFactor(600851475143) returns 6857", function() {
            expect(Euler003.getLargestPrimeFactor(600851475143)).toEqual(6857);
        });
    });    
    
});