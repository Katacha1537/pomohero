const inputName = document.querySelector('[data-inputName]')
const addName = document.querySelector('[data-addName]')
export const userName = document.querySelector('[data-username]')
export const btnDefinirNome = document.querySelector('[data-btnDefinirNome]')

export function changeName(){
  if(!inputName.value == ''){
    userName.innerHTML = `<strong>${inputName.value}</strong>`
    addName.classList.add('modalHidden')
  }
}

export function appearModalName(){
  addName.classList.remove('modalHidden')
}