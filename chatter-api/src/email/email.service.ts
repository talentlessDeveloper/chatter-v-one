import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const CLOUD_CLIENT_ID =
  '572328457278-n4tmuthr2s23o16r0bgi0efhua8r9ns3.apps.googleusercontent.com';

const CLOUD_CLIENT_SECRET = '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';

const CLOUD_REFRESH_TOKEN =
  '1//046FpXIWWjWlvCgYIARAAGAQSNwF-L9IrFswgrHjBKq65lc_sDLFKO0ZBORujT3skD0dMYrt9arw3N90rcb5A4ZQ6Hq8ADHBOwZU';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const OAuth2Client = new OAuth2(
  CLOUD_CLIENT_ID,
  CLOUD_CLIENT_SECRET,
  REDIRECT_URI,
);
OAuth2Client.setCredentials({
  refresh_token:
    '1//046FpXIWWjWlvCgYIARAAGAQSNwF-L9IrFswgrHjBKq65lc_sDLFKO0ZBORujT3skD0dMYrt9arw3N90rcb5A4ZQ6Hq8ADHBOwZU',
});

const accessToken = OAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  service: 'gmail', // working on the smtp nodmail config
  auth: {
    type: 'OAuth2',
    user: 'haryobamy.badmus@gmail.com',
    clientId: CLOUD_CLIENT_ID,
    clientSecret: CLOUD_CLIENT_SECRET,
    refreshToken: CLOUD_REFRESH_TOKEN,
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
            This <a href="http://localhost:8080/${userId}/${userToken}">link</a> will verify your email address.
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
      // transport.close();
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
            This <a href="http://localhost:8080/resetpassword/${userId}/${resetToken}">link</a> will help you to reset your password.
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
      // transport.close();
    });
  }
}
