class API {

    static loadBranches(){
        fetch("http://localhost:3000/branches")
        .then(resp => resp.json())
        .then(data => {
            Branch.createBranches(data)
            Branch.displayBranches(data)
        })
    }

}