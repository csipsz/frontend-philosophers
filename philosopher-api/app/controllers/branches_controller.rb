class BranchesController < ApplicationController

    def index 
        branches = Branch.all 
        render json: branches, include: [:philosophers]
    end 

end
