class InquiryController < ApplicationController
  def confirm
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.valid?
      render :action => 'confirm'
    else
      render :action => 'home/index'
    end
  end

  def thanks
    @inquiry = Inquiry.new(inquiry_params)
    # send mail
    NoticeMailer.sendmail_confirm(@inquiry).deliver

    flash[:notice] = "お問い合わせ頂き、ありがとうございました。"
    render :action => 'thanks'
  end

  private
  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :message)
  end

end