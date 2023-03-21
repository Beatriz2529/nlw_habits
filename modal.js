const formModal = document.getElementById("form-modal")
const divHabits = document.getElementById("form-habits")
const Habit = JSON.parse(localStorage.getItem("newHabit")) || []

Habit.forEach((elemento) => {
  criaElemento(elemento)
})

formModal.addEventListener("submit", (evento) => {
  evento.preventDefault()

  const emogi = evento.target.elements["emogi"]
  const descricao = evento.target.elements["descricao"]

  const newHabit = {
    emogi: emogi.value,
    decricao: descricao.value,
  }
  newHabit.id = Habit[Habit.length - 1] ? Habit[Habit.length - 1].id + 1 : 0

  criaElemento(newHabit)
  Habit.push(newHabit)

  localStorage.setItem("Habit", JSON.stringify(Habit))
})

function criaElemento(item) {
  divHabits.innerHTML = `
   <div class="habit" data-name="run">${item.emogi}</div>
  `
  // console.log(item.emogi)
}

// formModal.setData(Habits)
// formModal.load()
