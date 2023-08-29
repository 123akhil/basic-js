//Map    
Array.prototype.myMap = function (callback , thisArg){
    if(this === null){
        throw new TypeError('this is null or not defined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not a function');
    }
    const arr = Object(this); //to ensure that this is treated as object and we can use object llike property on it
    const len = arr.length >>> 0; //to check that the length must be greater than 0
    const mappedArr = new Array(len); //can use [] too but defining sapce according to length is a good choice
    for(let i=0; i < len; i++){
        if(i in arr){  // checking for sparse arrays
            mappedArr[i] = callback.call(thisArg, arr[i], i, arr);
        }
    }
    return mappedArr;
}

//forEach
Array.prototype.myforEach = function(callback, thisArg){
    if(this === null){
        throw new TypeError('this is null or not defined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not a function');
    }
   const arr = Object(this);
   const len = arr.length >>> 0;
   for(let i=0; i < len; i++){
    if(i in arr){
        callback.call(thisArg, arr[i], i , arr);
    }
   }
}
//differnce betwen for forEach and map is forEach is used to iterate over every element of an array with callbackfn provided it does not create new array.
//on  other hand map iterate every element of an array and return a new modified array.

//filter
Array.prototype.myFilter = function (callback, thisArg){
    if(this === null){
        throw new TypeError('this is null or not defined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not a function');
    }
    const arr = Object(this);
    const len = arr.length >>> 0;
    const filterdArr = [];// in this case we dont know the array len to return after filter so we are using [];

    for(let i=0; i<len; i++){
        if(i in arr && callback.call(thisArg, arr[i], i, arr)){// in this case we will check weather the array is sparse and the callback will return true or false
            filterdArr.push(arr[i]);// pushing the array value that got filtered after callback
        }
    }
    return filterdArr;
}


//Reduce
Array.prototype.myReduce = function (callback, initialValue){

    const arr = Object(this);
    const len = arr.length >>> 0;
    if(len === 0 && initialValue === undefined){
        throw new TypeError('Reduce of empty array with no initial value');
    }
    let accumelator = initialValue === undefined ? arr[0]: initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for(let i = startIndex; i < len; i++){
        if(i in arr){
            accumelator = callback.call(undefined, accumelator, arr[i], i , arr);
        }
    }

    return accumelator;
}

