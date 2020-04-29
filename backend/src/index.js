const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); /**
*{
*origin: "http://"
*}
*/
app.use(express.json());
app.use(routes);

/** 
 * Rota / Recurso
 */ 

 /**
  * Metodos HTTP:
  * 
  * GET: buscar informações do back-end
  * POST: criar uma informação back-end
  * PUT: alterar uma informação back-end
  * DELETE: deletar uma informação no back-end
  * 
  * Tipos de parâmetros:
  * 
  * Query Params: parametros nomeados enviados na rota após o "?" (filtros,paginação)
  * Route Params: parametros ultilizados para identificar recursos
  * Resquest Body: corpo da requisição, utilizado para criar ou alterar recursos
  */
 /**
  * SQL: MySql, Sqlite, PostgreSQL, ORACLE, Microsoft Sql Server
  * NoSql: MongoDB, CouchDB, etc
  *
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


app.listen(3333);