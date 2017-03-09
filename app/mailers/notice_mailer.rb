class NoticeMailer < ApplicationMailer
  default from: "studentsandsociety@gmail.com"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notice_mailer.sendmail_confirm.subject
  #
  def sendmail_confirm(inquiry)
    @content = inquiry.message
    @name = inquiry.name
    mail(to: [inquiry.email, "studentsandsociety@gmail.com"], subject: "【お問い合わせ】") do |format|
      format.text
    end
  end
end
