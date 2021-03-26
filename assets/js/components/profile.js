const inputName = document.querySelector('[data-inputName]')
const username = document.querySelector('[data-username]')
export const btnDefinirNome = document.querySelector('[data-btnDefinirNome]')

export function changeName(){
  username.innerHTML = `<strong>${inputName.value}</strong>`
}