const Database = require('sqlite-async') // importanto o módulo que eu vou usar numa variavel tipo const
 // o argumento que passa é onde está o banco de dados.

// o banco de dados pode demorar tempo para abrir. Se colocarmos alguma linha depois pode dar problema no código, pois o javascript executa linha a linha sem esperar a tarefa terminar de acontecer, pra isso a fente faz:

 // aqui ta passando a função de nome execute

function execute (db) { // a função execute ta passando pra frente o parametro db. db também é um objeto com funcionalidades. 
  // as primeiras instruções sql é criar as tabelas do banco de dados.
  // SQL é considerado banco de dados relacional pois consegue relacionar uma tabela a outra. 
  // cada tabela pode ser chamada de entidades ou relations, e podem relacionar entre si.
  return db.exec(` 
      CREATE TABLE IF NOT EXISTS proffys (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          avatar TEXT,
          whatsapp TEXT,
          bio TEXT
      ); 

      CREATE TABLE IF NOT EXISTS classes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          subject INTEGER,
          cost TEXT,
          proffy_id INTEGER
      );

      CREATE TABLE IF NOT EXISTS class_schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTEGER,
        weekday INTEGER,
        time_from INTEGER,
        time_to INTEGER
      );
  `) // uma dessas funcionalidades é o exec. dentro do exec coloca os códigos sql e coloca entre crases.
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

// modulo que consegue receber dados e exportar
