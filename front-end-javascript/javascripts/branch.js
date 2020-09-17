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
        const h1 = document.createElement('h1')
        branchDiv().appendChild(h1)
        h1.textContent = this.name 
        h1.classList.add("clickable")
        h1.addEventListener('click', this.display.bind(this))
    }

    
    display(){
        branchDiv().innerHTML = ""
        Branch.displayBranches()
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const list = document.createElement("ul")
        list.id = "philosopher-list"
        h2.textContent = this.name 
        p.textContent = this.description 
        p.style.fontSize = '20px'
        branchDiv().appendChild(h2)
        branchDiv().appendChild(p)
        branchDiv().appendChild(list) 

        this.philosophers.forEach(philosopher => philosopher.listPhilosopher.call(philosopher))
    }
}