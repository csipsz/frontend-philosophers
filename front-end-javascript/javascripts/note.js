class Note {
    static all = []
    constructor(content, philosopher){
        this.content = content
        this.philosopher = philosopher
        Note.all.push(this)
    }



}