function getDayName(dayNumber){
    let dayName;
    switch(dayNumber){

        case 1 :
            dayName = "Monday";
            break;
        case 2:
            dayName ="Tuesday";
            break
        case 3 :
            dayName ="Wednesday"
            break;
        case 4:
            dayName ="Thursday"
            break
        case 5 :
            dayName ="Friday"
            break
        case 6:
            dayName ="Saturday"
            break
        case 7:
            dayName="Sunday";
            break
            default:
      dayName = "Invalid Day Number (must be 1-7)";


    }
    return dayName;

}
console.log("Day 3 is:", getDayName(3));