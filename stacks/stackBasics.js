//Stack foloow - first IN last out or last in first out
//push(), pop(), peek(), isEmpty(), size()

//Basic Stack Implementation
//class is basically a template which is used to create object in JS

class Stack {
    constructor(){   //this constructor will be the one that run first and we are creating stack initialized as array
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }
    
    pop(){
        if(this.isEmpty()) {//check if stack is empty
            return "Stack is Empty, cant perform pop";
        }

        return this.stack.pop();
    }
    
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform peek";
        }

        return this.stack[this.size() - 1];
    }
    isEmpty(){
      return this.size() === 0
    }
    size(){
        return this.stack.length;
    }
    printStack(){
        return this.stack.map((element) => element)
    }
}

// how to create new object out of it
const stack = new Stack();


stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.printStack());

console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop()); 
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());

