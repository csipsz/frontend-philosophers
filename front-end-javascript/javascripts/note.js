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


    static deletejsNote(button){
        // button id is string note id is number, so loose equality operator is better cause I want the type coercion
        Note.all = Note.all.filter(note => note.id != button.id)
        return Note.all
    }

    display(){
        let p = document.createElement("p")
        noteCont().appendChild(p)
        if (this.philosopher){
        p.innerText = `About ${this.philosopher.name}\n` + this.content + '\n'
        p.classList.add('comment')
        let button = document.createElement('button')
        p.appendChild(button)
        button.textContent = "I know this already"
        button.classList.add('btn')
        button.id = this.id 
        button.addEventListener("click", API.deleteNote)
        } else {
            Note.deletejsNote(this)
            p.textContent = "PLEASE ADD A PHILOSOPHER"
            p.classList.add("error")
            setTimeout(function(){ p.parentNode.removeChild(p) }, 5000);
        }
    }


    static createNotes(data) {
       data.forEach(data => {
            let note = new Note(data.content, data.philosopher, data.id)
        }
        )};
    

}