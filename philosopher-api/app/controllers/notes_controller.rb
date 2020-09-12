class NotesController < ApplicationController

    def index 
        notes = Note.all 
        render json: notes, include: [:philosopher]
    end 

    def create 
        note = Note.create(note_params)
        render json: note, include: [:philosopher]
    end 

    def note_params 
        params.require(:note).permit(:content, :philosopher_id)
    end 
end
