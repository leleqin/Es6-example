import Person from "./person";

export default class Teacher extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let result = `${super.introduce()} I am a Teacher. `;
        result += this.klass ? `I teach Class ${this.klass.number}.` : `I teach No Class.`;
        return result;
    }

    introduceWith(student){
        let teached = false;
        if(this.klass !== undefined && this.klass.number === student.klass.number)
            teached = true;
        return `${super.introduce()} I am a Teacher. ${teached === true ? 'I teach ' + student.name + '.' : 'I don\'t teach ' + student.name + '.'}`;
    }
}
