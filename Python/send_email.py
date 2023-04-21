from flask import Flask, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)




@app.route('/send_email', methods=['POST'])
def send_email():
    sender_name = request.form['contact-name']
    sender_email = request.form['contact-email']
    sender_company = request.form['contact-company']
    message = request.form['contact-message']

    # Construct the message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = 'wolfdanver@gmail.com'
    msg['Subject'] = f'New message from {sender_name} ({sender_company})'
    msg.attach(MIMEText(message))

    # Send the message using Gmail SMTP
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login('wolfdanver@gmail.com', 'sfWy*}v(8b`Lr^Nm')
        smtp.send_message(msg)

    return 'Message sent!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)