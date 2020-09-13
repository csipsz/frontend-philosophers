class Note {
    static all = []
    constructor(content, philosopher, id){
        this.content = content
        this.philosopher = philosopher
        this.id = id
        Note.all.push(this)
    }

    static displayNotes(){
        Note.all.forEach(note => note.display())
    }
    
    display(){
        let p = document.createElement("p")
        p.innerText = `Did you know this about ${this.philosopher.name}?\n` + this.content + '\n'
        noteCont().appendChild(p)
        let button = document.createElement('button')
        p.appendChild(button)
        button.textContent = "I know this already"
        button.classList.add('btn')
        button.id = this.id 
        button.addEventListener("click", API.deleteNote)
    }


    static createNotes(data) {
       data.forEach(data => {
            let note = new Note(data.content, data.philosopher, data.id)
        }
        )};
    

}