let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")

function loadBranches(){
    fetch("http://localhost:3000/branches")
    .then(resp => resp.json())
    .then(data => displayBranches(data))
}

loadBranches()

function displayBranches(branches){
    branches.forEach(branch => {
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const list = document.createElement("ul")
        h2.textContent = branch.name 
        p.textContent = branch.content 
        branch.philosophers.forEach(philosopher => {
            const li = document.createElement('li')
            li.textContent = philosopher.name 
            list.appendChild(li)
            const opt = document.createElement('option')
            opt.innerText = philosopher.name 
            opt.value = philosopher.id
            dropDown().appendChild(opt)
        })
        branchDiv().appendChild(h2)
        branchDiv().appendChild(p)
        branchDiv().appendChild(list)

    });
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
        debugger
        let p = document.createElement('p')
        p.innerText = obj.content 
        noteCont().appendChild(p)
    })
}

