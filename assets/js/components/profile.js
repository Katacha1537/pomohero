const inputName = document.querySelector('[data-inputName]')
const username = document.querySelector('[data-username]')
const btnDefinirNome = document.querySelector('[data-btnDefinirNome]')

btnDefinirNome.addEventListener('click', ()=> {
  console.log(inputName.value)
  username.innerHTML = `<strong>${inputName.value}</strong>`
})