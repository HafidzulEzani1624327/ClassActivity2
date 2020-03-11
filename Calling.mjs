import{Student} from './student.mjs';

import readline  from 'readline';
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Please enter your name: ', (name) =>{
    rl.question('Please enter your matric number: ', (matricno) =>{
        rl.question('Please enter your major:  ', (major) =>{
        
       
        let student = new Student(name, matricno, major);
        console.log(student);
        console.log(`Your name is ${student.name}`);
        console.log(`Your matric number is ${student.matricno}`);
        console.log(`Your major is ${student.major}`);
        
        rl.close();
        
});
});
});





