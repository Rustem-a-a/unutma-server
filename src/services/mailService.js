import nodemailer from 'nodemailer'

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_HOST,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, user, password, activationLink) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: `Account activation on the website unutma.ru`,
                text: '',
                html: `<div>
                        <h1>Welcome to Unutma.ru!</h1>
                        <h2>You have registered on our website</h2>
                        <h4>Credentials:</h4>
                        <p>Username:${user}</p>
                        <p>Password:${password}</p>
                        <h2>For account activation on the website unutma.ru please follow the link:</h2>
                        <a href="${activationLink}">${activationLink}</a>
                    </div>`
            })
        } catch (e) {
            return e.responseCode
        }
    }
}

export default new MailService();