class Philosopher {

    static all = []

    constructor(name, nationality, work, id, birthdate){
        this.name = name 
        this.nationality = nationality 
        this.work = work 
        this.id = id 
        this.birthdate = birthdate

        Philosopher.all.push(this)
    }


    static fillDropDown(){
        Philosopher.all.forEach(philosopher => philosopher.addToDropDown())
    }
        addToDropDown(){
            const opt = document.createElement('option')
            opt.innerText = this.name 
            opt.value = this.id
            dropDown().appendChild(opt)
        }

}
