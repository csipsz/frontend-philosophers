let branchDiv = () => document.querySelector("#branches")
let dropDown = () => document.querySelector("#philosopher-dropdown")
let noteForm = () => document.querySelector('#note-submit')
let noteCont = () => document.querySelector("#note-container")
let notes = () => document.querySelector("#notes")
document.querySelector("#note-content").value = "ADD YOUR NOTE"

API.loadBranches()
noteForm().addEventListener("submit", API.addNote)
notes().addEventListener("click", API.fetchNotes)

//////////////////////// COLORSTYLING FUNCTION GROUP /////////////////////////////////////////////////////////////////////////////////////////////////
let colorOptions = [ "DarkSlateBlue", "Plum", "Deeppink", "Teal", "FireBrick", "Deepskyblue", "Navy",
"OliveDrab", "SteelBlue", "Sienna", "PeachPuff", "Olive", "OrangeRed", "PaleGreen", 
"RosyBrown", "PaleVioletRed", "Fuchsia", "DarkGreen", "DarkTurquoise"]

let nameOptions = ["Default", "Good Girl", "Bad Girl", "Manly", "Fire", "Cloudless Sky", "Navy", 
"Olive Tree", "Blizzard", "Campfire", "PeachPuff", "Mature", "Racecar", "Flying Lotus", 
"Seashell", "Flesh wound", "YOLO", "Potion", "Waves"]

addStylebuttons()

function addStylebuttons(){
    for (const el of colorOptions){
        let style = document.createElement('button')
        style.textContent = `Style ${el}`
        style.classList.add('style')
        document.body.appendChild(style)
        style.addEventListener('click', function(e){
        changeColor(el)
        })
    }
    nameGenerator()
}

function changeColor(color){
    branchDiv().style.backgroundColor = color
    dropDown().style.backgroundColor = color
    if (notes()){
    notes().style.backgroundColor = color
    notes().style.margin = "0px"
    notes().style.padding = "4px"
    }
}


function nameGenerator(){
let styleButtons = () => document.querySelectorAll(".style")
let stylearray = Array.from(styleButtons())

for (let i = 0;  i < nameOptions.length; i++){
    stylearray[i].textContent = nameOptions[i]
}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










