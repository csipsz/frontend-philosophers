class Branch {

    static all = []
    constructor(name, description, id, philosophers){
        this.name = name
        this.description = description
        this.id = id
        this.philosophers = philosophers.map(philosopher => new Philosopher(philosopher.name, philosopher.nationality, philosopher.work, philosopher.id, philosopher.birthdate))
        Branch.all.push(this)
    }

    static createBranches(data) {
        data.forEach(data => {
             let branch = new Branch(data.name, data.description, data.id, data.philosophers)
        }
    )}

    static displayBranches(){
        Branch.all.forEach(branch => branch.showCard());
    }

    showCard(){
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        div.appendChild(h1)
        branchDiv().appendChild(div)
        h1.textContent = this.name 
        // I think binding this to dislay here is a bit harsh
        h1.addEventListener('click', this.display.bind(this))
    }

    
    display(){
        branchDiv().innerHTML = ""
        Branch.displayBranches()
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const list = document.createElement("ul")
        h2.textContent = this.name 
        p.textContent = this.description 
        this.philosophers.forEach(philosopher => displayPhilosopher.call(philosopher))
        branchDiv().appendChild(h2)
        branchDiv().appendChild(p)
        branchDiv().appendChild(list)    
        
        function displayPhilosopher(){
            const li = document.createElement('h2')
            //li.classList.add('btn')
            li.textContent = this.name 
            list.appendChild(li)
            li.addEventListener('click', this.show)
        }
    }
}