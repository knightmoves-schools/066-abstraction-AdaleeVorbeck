class TaxCalculator{
    
        #rate = 15;
        state = 'TX';
        exempt = false;
    
    #calculate(){
        if(this.exempt){
            return calculateExempt(1.37);
        }else{
            return calculateNonExempt(5.72);
        }
    }
}
