const formModal = document.getElementById("form-modal")
// console.log(formModal)
formModal.addEventListener("submit", (evento) => {
  evento.preventDefault()

  const emogi = evento.target.elements["exampleFormControlInput1"]
  const descricao = evento.target.elements["exampleFormControlInput2"]

  const itemAtual = {
    emogi: emogi.value,
    descricao: descricao.value,
  }
  console.log(itemAtual)

  emogi.value = ""
  descricao.value = ""
})

// function createHabiy (emogi, descricao) {
//   const divHabit = document.createElement("div")
//   divHabit.className("habit")
//   divHabit.innerHTML = `

//   `
// }
