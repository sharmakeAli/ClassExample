

// /Create a CLass Student
 class Student {
    id="C119001"
    name ="Ahmed";
    age=20;
    getData(
    ){

        return `ID is : ${this.id} Name is : ${this.name}
         Age is : ${this.age}`

    }

}
//Student Object
const std =new Student()
console.log(std.getData())

///Class Rectangle
const Rectangle=class{
    constructor(height,width)
    {
        this.height=height
        this.width=width;
    }
    area(){
        return `Area is :${this.height *this.width}`
    }
}
console.log(new Rectangle(12,7).area());