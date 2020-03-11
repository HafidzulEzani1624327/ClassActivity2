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


export {Student};
