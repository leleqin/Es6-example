import Person from "./person";

export default class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
        klass.appendMember(this);
    }

    introduce(){
        let leaderStr = `I am at Class ${this.klass.number}.`;
        if(this.klass.leader)
            leaderStr = `I am Leader of Class ${this.klass.number}.`;
        let result = `${super.introduce()} I am a Student. ` + leaderStr;
        return result;
    }

    setClass(klass){
        this.klass = klass;
    }

    equal(student){
        return student.id === this.id;
    }

}
