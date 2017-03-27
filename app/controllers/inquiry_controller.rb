class InquiryController < ApplicationController
  #バリデーションを通らなかった場合のviewの表示のためにコントローラーを設置
  def index
  end
  
  #確認画面を生成するコントローラー
  def confirm
    #データの取得
    @inquiry = Inquiry.new(inquiry_params)
    #データのバリデーション
    if @inquiry.valid?
      #バリデーションを通過した場合確認画面へ
      render action: 'confirm'
    else
      #元のフォームに戻ってエラーメッセージを表示
      render action: 'index'
    end
  end

  #送信完了画面を生成するコントローラー 
  def thanks
    #データの取得
    @inquiry = Inquiry.new(inquiry_params)
    #メール送信
    NoticeMailer.sendmail_confirm(@inquiry).deliver
    #viewの選択
    render :action => 'thanks'
  end

  private
  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :message)
  end

end