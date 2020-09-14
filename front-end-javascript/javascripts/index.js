let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")
document.querySelector("#note-content").value = "ADD YOUR NOTE"

API.loadBranches()

noteForm().addEventListener("submit", API.addNote)
notes().addEventListener("click", API.fetchNotes)





