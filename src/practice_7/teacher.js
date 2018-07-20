import Person from "./person";

export default class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        return `${super.introduce()} I am a Teacher. I teach ${this.klass === undefined ? 'No Class' : 'Class ' + this.klass.number}.`;
    }

    introduceWith(student){
        let teached = false;
        if(this.klass !== undefined && this.klass.number === student.klass.number)
            teached = true;
        return `${super.introduce()} I am a Teacher. ${teached === true ? 'I teach ' + student.name + '.' : 'I don\'t teach ' + student.name + '.'}`;
    }
}
