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

}
