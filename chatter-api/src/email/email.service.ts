import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(
  process.env.CLOUD_CLIENT_ID,
  process.env.CLOUD_CLIENT_SECRET,
);

OAuth2Client.setCredentials({
  refresh_token: process.env.CLOUD_REFRESH_TOKEN,
});

const accessToken = OAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'you email here',
    clientId: process.env.CLOUD_CLIENT_ID,
    clientSecret: process.env.CLOUD_CLIENT_SECRET,
    refreshToken: process.env.CLOUD_REFRESH_TOKEN,
    accessToken: accessToken,
  },
});

@Injectable()
export class EmailService {
  sendVerificationEmail(to, userId, userToken) {
    const mailOptions = {
      from: 'Chatter socials <your email herer>',
      to: to,
      subject: 'Email Verification',
      html: `<p> Dear User, Please verify your email for chatter socials.  </p>
        <p>
       Here is your Otp 1234
        </p>

        <p>
      If you did not register on chatter socials, you can ignore this message
         </p>
        `,
    };

    transport.sendMail(mailOptions, function (error, result) {
      if (error) {
        return error;
      } else {
        return result;
      }
      transport.close();
    });
  }
}
