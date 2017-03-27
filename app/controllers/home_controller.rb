class HomeController < ApplicationController
  def index
    @inquiry = Inquiry.new
    render layout: false
  end

  def member
  end

  def privacy
  end
end