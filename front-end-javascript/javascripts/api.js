class API {

    static loadBranches(){
        fetch("http://localhost:3000/branches")
        .then(resp => resp.json())
        .then(data => {
            Branch.createBranches(data)
            Branch.displayBranches(data)
            Philosopher.fillDropDown()
        })
    }


    static fetchNotes(){
        fetch("http://localhost:3000/notes")
        .then(resp => resp.json())
        .then(data => {
            API.clearNotes()
            Note.createNotes(data)
            Note.displayNotes(data)
    })
    }


    static addNote(e){
        e.preventDefault()
        fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            note: {
                content: document.querySelector("#note-content").value,
                philosopher_id: document.querySelector("#philosopher-dropdown").value
            }
        })
        })
        .then(resp => resp.json())
        .then(obj => {
            let note = new Note(obj.content, obj.philosopher, obj.id)
            note.display()
            API.clearForm()
        })
    }



    static deleteNote(e){
        fetch("http://localhost:3000/notes/" + this.id, {
            method: "delete"
        })
        .then(resp => resp.json())
        .then(data => {
            Note.deletejsNote(this)
            this.parentNode.remove();
        })
    }

    static clearNotes(){
        noteCont().innerHTML = "" 
        
    }

    static clearForm(){
        document.querySelector("#note-content").value = "ADD YOUR NOTE"
        document.querySelector("#philosopher-dropdown").value = "Select Philosopher"
    }

}