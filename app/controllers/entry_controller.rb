class EntryController < ApplicationController
  
  respond_to :json
  
  def create
    Rails.logger.info "Bill in create entry"
    Entry.create(entry_params)
  end

  def update
    
  end

  def destroy
    
  end

  def index
    Entry.all
  end
  
  private
  def entry_params
    params.require(:entry).permit(:sleep_rating, :bed_time, :wake_time)
  end
end
