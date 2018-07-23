import Person from "./person";

export default class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses ? klasses : [];
    }

    introduce(){
        let result = `${super.introduce()} I am a Teacher. `;
        result += this.klasses.length != 0 ? `I teach Class ${this.klasses.map((klass) => klass.number).join(', ')}.` : `I teach No Class.`;
        return result;
    }

    introduceWith(student){
        let teached = false;
        if(this.klasses.find(klass => klass.isIn(student)))
            teached = true;
        return `${super.introduce()} I am a Teacher. ${teached ? 'I teach ' + student.name + '.' : 'I don\'t teach ' + student.name + '.'}`;
    }

    isTeaching(student){
        return this.klasses.find(klass => klass.isIn(student)) ? true : false;
    }

    handleNewMemberJoined(student, clazz){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${clazz.number}.`);
    }

    handleNewLeaderVoted(student, clazz){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${clazz.number}.`);
    }

}
