function produceDrivingRange(range) {
   return function(start,finish) {
     const distance = Math.abs(parseInt(start) - parseInt(finish))
     if (distance > range) {
       return `${distance - range} blocks out of range`
     }
     else {
       return `within range by ${range - distance}`
     }
   }
 }

 function produceTipCalculator(percentage) {
   return function(bill) {
     return percentage*bill;
   }
 }

 function createDriver() {
   let driverId = 0

     return class {
       constructor(name) {
         this.name = name;
         this.id = ++driverId
       }
     }
   }
 }