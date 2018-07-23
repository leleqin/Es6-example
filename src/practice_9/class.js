export default class Class {
    constructor(number){
        this.number = number;
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
        student.setClass(this);
    }
}
