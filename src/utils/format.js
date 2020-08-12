
// cada proffy aqui passa a ser um objeto, hahaha
// atribuimos poderes ao html quando usamos a ferramenta template engine. esse template usa todo um motor de linguagem de programação para fazer nosso html
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
]

// funcionalidades

function getSubject(subjectNumber){
  const position = +subjectNumber - 1
  return subjects[position] // porque artes é numero 1 mas no array tem indice zero, então vai sempre subtrair 1.
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}
 module.exports = {
   subjects, 
   weekdays, 
   getSubject,
   convertHoursToMinutes
 }