const form = document.querySelector("#form-habits")
// aqui ele esta criando um novo objetos 'NLWSetup' e colocando
//dentro da const 'nlwSetup'
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso🛑")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save(){
  
}


// const data = {
//   run: ["01-20", "01-21", "01-22"],
//   study: ["01-22", "01-24"],
//   book: ["01-25"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
