class Student{
    constructor(name, matricno, major){
        this.name = name;
        this.matricno = matricno;
        this.major = major;

    }
        get Name(){
            return this.name;
        }

        set Name(name){
            this.name = name; 
        }
        get MatricNo(){
            return this.matricno;
        }

        set MatricNo(matricno){
            this.matricno = matricno; 
        }
        get Major(){
            return this.major;
        }

        set Major(major){
            this.major = major; 
        }        
            
}

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Please enter your name: ', (name) =>{
    rl.question('Please enter your matric number: ', (matricno) =>{
        rl.question('Please enter your major:  ', (major) =>{
            
        let student = new Student(name, matricno, major);
       
        console.log(`Your name is ${student.name}`);
        console.log(`Your matric number is ${student.matricno}`);
        console.log(`Your major is ${student.major}`);
        
        rl.close();
        
        module.exports={student};
});
});
});

