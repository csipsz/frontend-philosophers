class PhilosophersController < ApplicationController

    def index 
        philosophers = Philosopher.all 
        render json: philosophers, include: [:notes]
    end 
    
end
