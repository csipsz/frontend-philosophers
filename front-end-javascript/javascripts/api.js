class API {

    static BASEURL = "http://localhost:3000/"

    static loadBranches(){
        fetch(API.BASEURL + "branches")
        .then(resp => resp.json())
        .then(data => {
            Branch.createBranches(data)
            Branch.displayBranches()
            Philosopher.fillDropDown()
        })
    }

    static fetchNotes(){
        fetch(API.BASEURL + "notes")
        .then(resp => resp.json())
        .then(data => {
            Note.createNotes(data)
    })
    }

    static addNote(e){
        e.preventDefault()
        fetch(API.BASEURL + "notes", {
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
            design.clearForm()
        })
    }

    static deleteNote(e){
        fetch(API.BASEURL + "notes/" + this.id, {
            method: "delete"
        })
        .then(resp => resp.json())
        .then(data => {
            Note.deletejsNote(this)
            this.parentNode.remove();
        })
    }

}