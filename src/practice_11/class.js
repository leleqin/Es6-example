export default class Class {
    constructor(number){
        this.number = number;
        this.students = [];
        this.newLeaderlisteners = [];
        this.newMembersListeners = [];
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.klass === this)
            this.leader = student;
        console.log('It is not one of us.');
        this.notifyNewLeaderVoted(student, this);
    }

    appendMember(student){
        if(!this.isIn(student)) {
            this.students.push(student);
            student.setClass(this);
        }
        this.notifyNewMemberJoined(student);
    }

    isIn(student){
        if(this.students){
            return this.students.find((elem) => elem.equal(student)) ? true : false;
        }
    }

    registerAssignLeaderListener(teacher){
        this.newLeaderlisteners.push(teacher);
    }

    notifyNewLeaderVoted(student){
        this.newLeaderlisteners.forEach(listener => {
            listener.handleNewLeaderVoted(student, this);
        });
    }

    registerJoinListener(teacher){
        this.newMembersListeners.push(teacher);
    }

    notifyNewMemberJoined(student){
        this.newMembersListeners.forEach(listener => {
            listener.handleNewMemberJoined(student, this);
        });
    }
}
