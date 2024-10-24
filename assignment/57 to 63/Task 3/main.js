function ageInTime(theAge) {
    if(theAge>10 && theAge < 100){
        let years, months, weeks, days, hours, seconds;
        years = theAge;
        months = years * 12;
        weeks = months * 4;
        days = weeks * 7;
        hours = days * 24;
        seconds = hours * 60;
        console.log(`Years => ${years}`); 
        console.log(`Months => ${months}`); 
        console.log(`Weeks => ${weeks}`); 
        console.log(`Days => ${days}`); 
        console.log(`Hours => ${hours}`); 
        console.log(`Seconds => ${seconds}`); 
    }else   console.log("Age Out Of Range");
}
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months