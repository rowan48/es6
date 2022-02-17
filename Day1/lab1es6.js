class shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    circumference() {

    }
    area() {

    }
    log(){
        
       // console.log(this.constructor.name ,"area",this.area,"circumference",this.circumference);
        console.log(`area ${this.area} circumference ${this.circumference} type ${this.constructor.name}`);

        
    }
}//end of shape class

class rectangle extends shape {
    constructor(width, height) {
        super(shape);
        this.width = width;
        this.height = height;

    }
    circumference() {
        return this.length + this.width;
    }
    area() {
        return this.length * this.width;
    }
    log(){
        console.log("ll");
        super.log();  
      }
}//end of rect class
class square extends rectangle {
    constructor(l) {
        super(rectangle);
        this.width = l;
        this.height = l;
    }
    circumference() {
        super.circumference();

    }
    area() {
        super.area();
    }
    log(){
        super.log();  
      }

}//end of square class
class oval extends shape {
    constructor(A, B) {
        super(shape);
        this.A = A;
        this.B = B;

    }
    circumference() {
        super.circumference();
    }
    area() {
        super.area();
    }
    log(){
        super.log();  
      }
}//end of oval class
class circle extends oval {
    constructor(r){
        this.r=r;
    }
    circumference() {
        return 4*3.14*this.r;;
    }
    area() {
        return 3.14*this.r*this.r;

    }
    log(){
        super.log();  
      }
}//end of circle class

class drawshape {
    shape=[rectangle(10,5).log,square(5).log,oval(10,5).log,circle(5).log];

     print(){
        console.log(shape);

     }



}