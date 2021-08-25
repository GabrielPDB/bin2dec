const convertButton = document.querySelector('button')
const binary_input = document.querySelector('#binary_input')
const decimal_input = document.querySelector('#decimal_input')

function convert() {
  const value = binary_input.value
  let valid = true

  if (value === '' || Array.from(value.toString()).length > 8) {
    valid = false
  }

  Array.from(value.toString()).forEach(char => {
    if (char !== '0' && char !== '1') valid = false
  })

  if (valid) {
    decimal_input.value = parseInt(value, 2)
    return true
  } else {
    inputAlert()
    return false
  }
}

function inputAlert() {
  alert('Please insert a valid binary number!')
}

document.addEventListener('keydown', event => {
  if (event.key == 'Enter') convert()
})
