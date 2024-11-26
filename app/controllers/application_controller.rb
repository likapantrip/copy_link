class ApplicationController < ActionController::Base
  before_action :copy_link

  private
  def copy_link
    @url = request.url
  end
end
