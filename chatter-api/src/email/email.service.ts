import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

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
    user: 'haryobamy.badmus@gmail.com',
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
      from: 'Chatter Project <haryobamy.badmus@gmail.com>',
      to: to,
      subject: 'Email Verification',
      text: 'Email Verification',
      html: `<p>Dear User, please verify your email for Chatter project.</p>
        <p>
            This <a href="http://localhost:3000/${userId}/${userToken}">link</a> will verify your email address.
        </p>
        <p>
            If you did not registered on Chatter project, you can just ignore this message and do not click on the link!
        </p>`,
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

  sendPasswordResetEmail(to, userId, resetToken) {
    const mailOptions = {
      from: 'Chatter Project <haryobamy.badmus@gmail.com>',
      to: to,
      subject: 'Password Reset',
      text: 'Password Reset',
      html: `<p>Dear User, you requested password reset.</p>
        <p>
            This <a href="http://localhost:3000/resetpassword/${userId}/${resetToken}">link</a> will help you to reset your password.
        </p>
        <p>
            If it was not you, who requested password reset, you can just ignore this message and do not click on the link!
        </p>`,
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
