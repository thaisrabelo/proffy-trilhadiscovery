 //servidor
const express = require('express') // require sempre chama aquilo que nosso projeto precisa. Nesse caso vai requerer o express.

  // que tipo de dado o express é? é uma função, e a gente precisa executar ela.
  // thisIsAFunction() quando executar, sempre tem que ter os parenteses, mesmo sem parâmetros.
  // por isso tem parenteses na frente da função express acima.
  const server = express ()

  const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

  //cofigurar nunjucks (templete engine)
  const nunjucks = require('nunjucks')
  nunjucks.configure('src/views', {
    express: server,
    noCache: true,
  })
  //desse jeito que ta aqui em cima, vc cria a variavel constant express sem chamar ela, e chama na variavel server. Assim vc chama o express sem rodar ele ali embaixo no .use hahaha

  //inicio e configuração do servidor
  server
  //receber dados do req.body
  .use(express.urlencoded({ extended: true}))

  // configurar arquivos estáticos(css, scripts, imagens)
  .use(express.static("public")) // tudo o que é .use é configuração do servidor. usa o express, pega tudo o que é estático (imagens) e script e styles, tudo na pasta public. ou seja. fala pro servidor, cara, tudo o que for estatico tu pega ali no public mesmo.

  // ao abrimos o server, aparecia a mensagem CANNOT GET / .. temos que então adicionar outra ROTA pro nosso servidor.

  .get('/', pageLanding)// -> (req, res) => {(req, res) => {
    // .get é uma funcionalidade do express. "/" é o pedido. tamo pedindo a barra que ele CANNOT GET. mas então tem que retornar algo para nós. retornaria uma função simplificamos funções colocando ()=> para simplificar e não escrever function
    // req = requisição que acompanha meu pedido. e a res = resposta é o que mostra pra gente na tela.

    // -> return res.sendFile(__dirname + "/views/index.html") // return sempre nos retorna um valor ali dentro. string, numero, boolean, objeto?
    // nesse casso retorna uma resposta que "send" uma mensagem. sendfile envia um arquivo hehehe. nesse caso, precisa de uma variavel, a __dirname + "local onde ta o arquivo"
  

  .get('/study', pageStudy) // ->(req, res) => {
   // -> return res.sendFile(__dirname + "/views/study.html") // se só rodar assim e la no navegador colocar 127.0.0.1:5500/study não funfa. tem que reiniciar o servidor.
  

  .get('/give-classes', pageGiveClasses)// ->(req, res) => {
    // ->return res.sendFile(__dirname + "/views/give-classes.html")
  .post('/save-classes', saveClasses)
// start do servidor
  .listen(5500); // listen é uma funcionalidade que escuta algo. Ele tá escutando a porta 5500. Isso faz com que rode um servidor.

  // eu to colocando o nodemon pra sempre reiniciar o servidor quando houver alterações. depois no terminar é só dar npm run dev.