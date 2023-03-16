const formModal = document.getElementById("form-modal")
const divHabits = document.getElementById("form-habits")

console.log(divHabits)

//const nlwSetupAddHabits = new NLWSetup(formModal)
const addHabits = JSON.parse(localStorage.getItem("NWLSetup@addhabits")) || []
formModal.addEventListener("submit", (evento) => {
  evento.preventDefault()

  const emogi = evento.target.elements["exampleFormControlInput1"]
  const descricao = evento.target.elements["exampleFormControlInput2"]

  const newHabit = {
    emogi: emogi.value,
    descricao: descricao.value,
  }
  console.log(newHabit)

  emogi.value = ""
  descricao.value = ""

  criaElemento(newHabit)
  // addHabits.push(newHabit)
  // localStorage.setItem("itens", JSON.stringify(newHabit))
})

function criaElemento(item) {
  divHabits.innerHTML = `
   <div class="habit" data-name="run">${item.emogi}</div>
  `
  // console.log(item.emogi)
}
formModal.setData(addHabits)
formModal.load()
