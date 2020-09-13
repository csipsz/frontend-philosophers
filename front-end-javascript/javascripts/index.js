let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")


API.loadBranches()

noteForm().addEventListener("submit", addNote)
notes().addEventListener("click", fetchNotes)

function clearNotes(){
    noteCont().innerHTML = "" 
}

function clearForm(){
    document.querySelector("#note-content").value = ""
    document.querySelector("#philosopher-dropdown").value = "Select Philosopher"
}


function addNote(e){
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
        clearForm()
    })
}


function fetchNotes(){
    fetch("http://localhost:3000/notes")
    .then(resp => resp.json())
    .then(data => {
        clearNotes()
        Note.createNotes(data)
        Note.displayNotes(data)
})
}



function deleteNote(e){
    fetch("http://localhost:3000/notes/" + this.id, {
        method: "delete"
    })
    .then(resp => resp.json())
    .then(data => {
        this.parentNode.remove();
    })
}