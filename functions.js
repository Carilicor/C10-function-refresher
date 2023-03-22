//write a function that takes a number of adults, the number
//of beds in a vaction rental and returns true if there are 
//enough beds and false if not. Assume that all adults are coupled
//and 2 to a bed.  8 adults/4 kids/5 beds 

function enoughBeds(numAdults, numKids, numBeds) {
    //divide the number of adults by 2
    const adultBeds = numAdults / 2
    //add the to the numbers of kiddos
    const totalBedsNeeded = adultBeds + numKids
    // is that result <= number of beds 
   return(totalBedsNeeded <= numBeds) // simplify the function
   
    if(totalBedsNeeded <= numBeds) {
        return true 
    } 
        return false 
}
// you do not need the else because it will return false either way 
const canWeFit = enoughBeds(8, 4, 5)
console.log("Can we fit?", canWeFit)