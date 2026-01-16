class TaxCalculator{
    
        #rate = 15;
        state = 'TX';
        #exempt = false;
    
    calculate(){
        if(this.exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}
