class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show # TODO
    @track = Track.find(params[:id])
    render json: @track
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render json: @track
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: @track
  end

  def update
    @track = Todo.find(params[:id])
    @track.update(track_params)
    render json: @track
  end

  private

  def track_params
    params.require(:track).permit(:name, :roll, :time_start)
  end

end
