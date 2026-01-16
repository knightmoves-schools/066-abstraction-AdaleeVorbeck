class TaxCalculator{
    
        #rate = 15;
        state = 'TX';
        #exempt = false;
        #calculateExempt(value){
            return this.#rate * value;
        }
        #calculateNonExempt(value){
            return this.#rate * value;
        }

    calculate(){
        if(this.#exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}

//    ? the index.js file should hide the `rate`
//    ? the index.js file should hide the `calculateExempt` method
//    ? the index.js file should hide the `calculateNonExempt` method