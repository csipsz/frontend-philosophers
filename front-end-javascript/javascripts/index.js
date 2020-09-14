let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")

API.loadBranches()



noteForm().addEventListener("submit", API.addNote)
notes().addEventListener("click", API.fetchNotes)

function clearNotes(){
    noteCont().innerHTML = "" 
}

function clearForm(){
    document.querySelector("#note-content").value = ""
    document.querySelector("#philosopher-dropdown").value = "Select Philosopher"
}