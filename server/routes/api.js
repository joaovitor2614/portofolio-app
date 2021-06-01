var express=require('express');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator')
var nodemailer = require('nodemailer');//importing node mailer
dotenv.config()

const router = express.Router()

// using gmail as transport service
router.post('/sendemail', 
 check('name', 'Nome do contato é necessário').notEmpty(),
 check('email', 'Endereço de email é necessário').notEmpty(),
 check('message', 'Menssagem é necessária').notEmpty(),

 (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  console.log(req.body)
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.USER,
          pass: process.env.PASS
      }
  })
 console.log('process env user', process.env.USER)
  var mailOptions = {
      from: process.env.USER,
      to: process.env.USER,
      subject: `Mensagem a partir de site portfolio`,
      html: `<h1>Informações do contato</h1>
      <ul>
        ${req.body.name !== undefined ? `<li>Nome: ${req.body.name}</li>` : ''}
        ${req.body.email !== undefined ? `<li> Email: ${req.body.email}</li>` : ''}

      
      </ul>
     
    
        
      <h1>Mensagem:</h1>
      <p>- ${req.body.message}</p>
      
      `
  }
  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          console.log(error);
          res.send(error);
      } else {
          console.log('Email enviado: ' + info.response);
          res.send({ loading: false })
      }
  })
})


module.exports = router