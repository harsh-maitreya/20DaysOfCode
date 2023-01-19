//JavaScript program to find the larger number from the two given positive integers, the two numbers  are in the range 40..60 inclusive.
function max_townums_range(x, y){
    if( (x >= 40) && (x <= 80) && (y >= 40 && y <= 80) ){
    if(x === y){
    return "Numbers are the same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "Numbers don't fit in range";
    }
    }

    console.log(max_townums_range(41, 70));
    console.log(max_townums_range(25, 79));
    console.log(max_townums_range(52, 110));
    console.log(max_townums_range(39, 77));
    console.log(max_townums_range(42, 66));
