class NotesController < ApplicationController

    def index 
        notes = Note.all 
        render json: notes, include: [:philosopher]
    end 

    def show 
        note = Note.find_by_id(params[:id])
        render json: note
    end 

    def create 
        note = Note.create(note_params)
        render json: note, include: [:philosopher]
    end 

    def destroy 
        note = Note.find_by_id(params[:id])
        note.destroy
        render json: note
    end 

    def note_params 
        params.require(:note).permit(:content, :philosopher_id)
    end 
end
