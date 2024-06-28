const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    
    const params = Array(
      request.body.email,
      request.body.senha
    );

    const query = 'INSERT INTO consulta(veterinario, paciente) VALUES(?, ?)';

    connection.query(query, params, (err, results) => {
      if (results) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Conta criada com sucesso!',
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: 'Dados inválidos',
            data: err
          });
      }
    });

  }

module.exports = {
  storeTask
};