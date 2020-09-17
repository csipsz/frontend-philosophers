let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")

const design = new Design

API.loadBranches()
API.fetchNotes()

design.clearForm()
design.addStylebuttons()

noteForm().addEventListener("submit", API.addNote)

Note.toggleNotes()











