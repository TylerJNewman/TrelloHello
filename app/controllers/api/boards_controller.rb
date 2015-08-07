class Api::BoardsController < ApplicationController
  def index
    render :json => Board.all
  end

  def show
    render :json => Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render :json => @board
    else
      render :json => @board.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
