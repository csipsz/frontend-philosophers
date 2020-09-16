class Design {

    static colorOptions = [ "DarkSlateBlue", "Plum", "Deeppink", "Teal", "FireBrick", "Deepskyblue", "Navy",
    "OliveDrab", "SteelBlue", "Sienna", "PeachPuff", "Olive", "OrangeRed", "PaleGreen", 
    "RosyBrown", "PaleVioletRed", "Fuchsia", "DarkGreen", "DarkTurquoise"]
    
    static nameOptions = ["Default", "Good Girl", "Bad Girl", "Manly", "Fire", "Cloudless Sky", "Navy", 
    "Olive Tree", "Blizzard", "Campfire", "PeachPuff", "Mature", "Racecar", "Flying Lotus", 
    "Seashell", "Flesh wound", "YOLO", "Potion", "Waves"]
    

    addStylebuttons(){
        for (const el of Design.colorOptions){
            let style = document.createElement('button')
            style.textContent = `Style ${el}`
            style.classList.add('style')
            document.body.appendChild(style)
            style.addEventListener('click', this.changeColor.bind(this, el))
        }
        this.nameGenerator()
    }
    
    changeColor(color){
        branchDiv().style.backgroundColor = color
        dropDown().style.backgroundColor = color
        if (notes()){
        notes().style.backgroundColor = color
        notes().style.margin = "0px"
        notes().style.padding = "4px"
        }
    }
    
    
    nameGenerator(){
    let styleButtons = () => document.querySelectorAll(".style")
    let stylearray = Array.from(styleButtons())
    
    for (let i = 0;  i < Design.nameOptions.length; i++){
        stylearray[i].textContent = Design.nameOptions[i]
    }
    }

}