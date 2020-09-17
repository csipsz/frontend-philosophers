let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")
document.querySelector("#note-content").value = "ADD YOUR NOTE"
const design = new Design

API.loadBranches()
API.fetchNotes()
design.addStylebuttons()

noteForm().addEventListener("submit", API.addNote)

notes().addEventListener("click", function(e){
    if (noteCont().innerHTML === ""){
        Note.displayNotes()
    } else {
    design.clearNotes()
    }
})










