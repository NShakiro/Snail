//The snail climbs up 7 feet each day and slips back 2 feet each night.
//How many days will it take the snail to get out of a well with the given depth?


function main() {
    var depth = parseInt(readLine(), 10);
    var day = 0;
    var len = 0;
    while( len <= depth){
        
        len = len + 7;
        day++;    
        if (len >= depth) {
            break;
        }    
        len = len -2;
    }
    console.log(day);//your code goes here
    
}
