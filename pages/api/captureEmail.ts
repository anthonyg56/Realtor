import type { NextApiRequest, NextApiResponse } from 'next'
import SendGridClient from '@sendgrid/client'
import Sendgrid from "@sendgrid/mail"
import { ClientRequest } from '@sendgrid/client/src/request'

const accessToken = '' || process.env.SENDGRID_API_KEY
Sendgrid.setApiKey(accessToken as string) 
SendGridClient.setApiKey(accessToken as string)

const captureEmail = (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req

  /* IF there is no email available return status 400 */
  if (!body.email) {
    return res.status(400).json({ message: "Invalid email" });
  }

  /* Email property for send grid*/
  const msg: Sendgrid.MailDataRequired = {
    from: "alec@masonsellsindy.com",
    to: body.email,
    templateId: "d-24ea356f593643eea00876845e46724d",
    subject: "Thanks for joining"
  }

  /* First send the email */
  Sendgrid.send(msg).then(() => {
    /* If its successful then we add them to the contact list */
    const contactData = {
      "contacts": [
        {
          "email": body.email
        }
      ]
    }

    /* Sendgrid request properties */
    const request: ClientRequest = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: contactData
    }

    /* preform the request and return a response base on if the request is successful or now */
    return SendGridClient.request(request)
      .then(([response, body]) => {
        console.log(response.statusCode)
        console.log(response.body)

        return res.status(200).json({ message: "Email added successfully" });
      })
      .catch(error => {
        console.error(error)
        return res.status(400).json({ message: "Email not added successfully" });
      });
 
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
    return res.status(400).json({ message: "Email not added successfully" });
  })
}

// Upon different request methods, switch function to return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
      case "POST":
          captureEmail(req, res)
          break
      default:
          res.setHeader("Allow", ["POST"]);
          res.status(405).end(`Method ${req.method} Not Allowed`);
          break;
  }
}