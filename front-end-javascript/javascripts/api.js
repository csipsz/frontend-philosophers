class API {

    static loadBranches(){
        fetch("http://localhost:3000/branches")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            Branch.createBranches(data)
            Branch.displayBranches(data)
        })
    }

}