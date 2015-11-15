class Api::EntriesController < ApplicationController
  
  respond_to :json
  
  def create
    respond_with(Entry.create(entry_params))
  end

  def update
    respond_with(Entry.update(entry_params))
  end

  def destroy
    respond_with(Entry.find(entry_params[:id]).destroy)
  end

  def index
    respond_with(Entry.all)
  end
  
private

  def entry_params
    params.require(:entry).permit(:sleep_rating, :bed_time, :wake_time)
  end

end
