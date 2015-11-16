class Api::EntriesController < ApplicationController
  
  respond_to :json
  
  def create
    entry = Entry.create(entry_params)
    respond_with(entry, location: nil) # tries to redirect which we dont want
  end

  def update
    entry = Entry.update(params[:id], entry_params)
    respond_with(entry)
  end

  def destroy
    respond_with(Entry.find(params[:id]).destroy)
  end

  def index
    respond_with(Entry.all)
  end
  
private

  def entry_params
    Rails.logger.info "BILL PARAMS = #{params.inspect}"
    params.permit(:sleep_rating, :bed_time, :wake_time)
  end

end
