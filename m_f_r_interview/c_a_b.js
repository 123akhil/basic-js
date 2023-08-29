//Call
Function.prototype.myCall =  function (context, ...arg){
    if(typeof this !== 'function'){
        throw new TypeError('my call is called on non-function');
    }
    context = context || window;// Use the global object as the default context (e.g., window in a browser)
    context.fn = this;// Function Binding: It binds the function (this) to a property named fn on the context object.
    const result = context.fn(...args);// Execute the function with the provided context and arguments
    delete context.fn; // Clean up by deleting the temporary property
    return result;
}

//Apply
Function.prototype.myApply =  function (context, arg){
    if(typeof this !== 'function'){
        throw new TypeError('my apply is called on non-function');
    }
    context = context || window;
    context.fn = this;
    let result;
    if(Array.isArray(arg)){
        result = context.fn(...arg); 
    } else {
         result = context.fn();// Applying the function without argument or we can also throw error
    }
    delete context.fn;
    return result;
}

//Bind
Function.prototype.myBind = function (context, ...arg){
    if(typeof this !== 'function'){
        throw new TypeError('my apply is called on non-function');
    }
    context = context || window;
    context.fn = this;
    return function (...arg2){
        return context.fn(...arg,...arg2);
    }
}