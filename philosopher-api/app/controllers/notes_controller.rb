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
        if note.save
            render json: note, include: [:philosopher]
        else 
            render json: note.errors.full_messages 
        end 
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
