let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")

function loadBranches(){
    fetch("http://localhost:3000/branches")
    .then(resp => resp.json())
    .then(data => displayBranches(data))
}

loadBranches()

function displayBranches(branches){
    branches.forEach(branch => displayBranch(branch));
}

function displayBranch(branch){
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const list = document.createElement("ul")
    h2.textContent = branch.name 
    p.textContent = branch.description 
    branch.philosophers.forEach(philosopher => displayPhilosopher(philosopher))
    branchDiv().appendChild(h2)
    branchDiv().appendChild(p)
    branchDiv().appendChild(list)


    function displayPhilosopher(philosopher){
        const li = document.createElement('h3')
        li.textContent = philosopher.name 
        list.appendChild(li)
        const opt = document.createElement('option')
        opt.innerText = philosopher.name 
        opt.value = philosopher.id
        dropDown().appendChild(opt)}
}


noteForm().addEventListener("submit", addNote)


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
        new Note(obj.content, obj.philosopher)
        displayNote(obj)
        clearForm()
    })
}


notes().addEventListener("click", fetchNotes)


function fetchNotes(){
    fetch("http://localhost:3000/notes")
    .then(resp => resp.json())
    .then(data => {
        clearNotes()
        displayNotes(data)
})
}

function displayNotes(notes){
    notes.forEach(note => displayNote(note))
}

function clearNotes(){
    noteCont().innerHTML = "" 
}

function clearForm(){
    document.querySelector("#note-content").value = ""
    document.querySelector("#philosopher-dropdown").value = "Select Philosopher"
}

function displayNote(note){
    let p = document.createElement("p")
    p.innerText = `Did you know this about ${note.philosopher.name}?\n` + note.content + '\n'
    noteCont().appendChild(p)
    let button = document.createElement('button')
    p.appendChild(button)
    button.textContent = "I know this already"
    button.classList.add('btn')
    button.id = note.id 
    button.addEventListener("click", deleteNote)
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
