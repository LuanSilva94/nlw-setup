const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

/* isso foi so pra exemplo de como seria manual,
porem iremos criar uma função para que isso ocorra
pelo uso do botão
const data = {
  run: ["01-01", "01-02", "01-03"],
  readABook: ["01-08", "01-15"],
  workout: ["01-23", "01-09"],
}

nlwSetup.setData(data)
nlwSetup.load()

*os dados do array são no parametro mes/dia*/

const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🚨")
    return
  } 
  
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/* || {} significa ou objeto vaio */
nlwSetup.setData(data)
nlwSetup.load()