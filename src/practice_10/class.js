export default class Class {
    constructor(number){
        this.number = number;
        this.students = [];
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.klass === this)
            this.leader = student;
        console.log('It is not one of us.');
    }

    appendMember(student){
        if(!this.isIn(student)) {
            this.students.push(student);
            student.setClass(this);
        }
    }

    isIn(student){
        if(this.students){
            return this.students.find((elem) => elem.equal(student)) ? true : false;
        }
    }

}
