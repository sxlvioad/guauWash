"use strict"; // cabecera del lenguaje
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(objeto) {
    try {

        let transporter = nodemailer.createTransport({
            // simple mail transfer protocol, pop3
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'tattotg@gmail.com', // generated ethereal user
            pass: 'tatolalo' // generated ethereal password
          },
        //   transport security layer
          tls: {
              rejectUnauthorized : false
          }
        });
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: objeto.mail, // list of receivers
          subject: "Solicitud de turno", // Subject line
      
          html: "Gracias por solicitar un turno con Guau Wash, nos estaremos comunicando en la brevedad para coordinar el horario del turno solicitado, Muchas Gracias!"// html body
        });
        return info.messageId;


    } catch(error) {
        console.log(error);
    }
}

module.exports = {main}