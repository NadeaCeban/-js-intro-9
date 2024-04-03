function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    
    
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}


function maxOfArray(arr){
    return Math.max(... arr);
}


function minOfArray(arr){
    return Math.min(... arr);
}


// Exporting your reusable methods
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.maxOfArray = maxOfArray;
module.exports.minOfArray = minOfArray;

// Exporting all the methods as an object

/*module.exports.MathHalper = {
    generateRandomNumber,
    minOfArray,
    maxOfArray
}*/




// export methods and field as a ES6 class

/*class MathHalper {
    static generateRandomNumber(a, b){
        let max = Math.max(a, b);
        let min = Math.min(a, b);
        
        
        return random = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
   static maxOfArray(arr){
        return Math.max(... arr);
    }
    
    
    static minOfArray(arr){
        return Math.min(... arr);
    }
}*/