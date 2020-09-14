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


    show(){
        //my this is the header element with the philosophers's name, so I can find my object after it
        let philosopher = Philosopher.all.find(philosopher => philosopher.name === this.textContent)
        let div = document.createElement('div')
        div.classList.add('secret')

        let ul = document.createElement('ul')
        console.log(philosopher)
        for (const key in philosopher){
            if (key !== "id" && key !== "work"){
                let li = document.createElement('li')
                li.textContent = philosopher[key]
                ul.appendChild(li)
            }
        }
        
        let p = document.createElement('p')
        p.textContent = philosopher.work
        div.appendChild(ul)
        div.appendChild(p)
        this.appendChild(div)
    }

}
