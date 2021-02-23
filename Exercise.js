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
