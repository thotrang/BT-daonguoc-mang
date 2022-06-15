export class Stack<T>{
    container:T[]=[];
    constructor(){};

    push(index:T):void{
        this.container.push(index);
    }
    pop():T|undefined{
        return this.container.pop();
    }
    size():number{
        return this.container.length;
    }
}