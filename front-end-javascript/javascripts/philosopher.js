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


        listPhilosopher(){
            let list = document.querySelector('#philosopher-list')
            const h3 = document.createElement('h3')
            h3.textContent = this.name 
            h3.id = this.name
            list.appendChild(h3)
            h3.classList.add('clickonce')
            h3.addEventListener('click', this.show)
        }


    show(){
        //my 'this' is the header element with the philosophers's name, so I can find my object after it
        let philosopher = Philosopher.all.find(philosopher => philosopher.name === this.textContent)
        if (philosopher){
            this.classList.remove('clickonce')
            let div = document.createElement('div')
            div.classList.add('info')
            for (const key in philosopher){
                if (key !== "id" && key !== "birthdate"){
                    let p = document.createElement('p')
                    p.textContent = philosopher[key]
                    div.appendChild(p)
                }
            }
            let p = document.createElement('p')
            p.textContent = `He was born on ${philosopher.birthdate}.`
            div.appendChild(p)
            this.appendChild(div)
        }
    }

}
