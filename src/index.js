module.exports = function toReadable (number) {
    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];
    
    if(number > 999) {
        return "big number";
    }
    let b = number.toString(10);
    if(b.length == 1) {
        b = "00" + b;
    }
    if(b.length == 2) {
        b = "0" + b;
    }
    result = "";
    if(number == 0) {
        return "zero";
    }
    if(number > 99) {
        result += (units[b[0]] + " hundred");
        number = number - b[0]*100;
    }
    if(number>19) {
        result += (" "+tens[b[1]]);
        number = number - b[1]*10;
    }
    if(number>0) {
        result += (" "+units[number]);
    }
    return result.trim();
}
