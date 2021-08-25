const convertButton = document.querySelector('button')
const binary_input = document.querySelector('#binary_input')
const decimal_input = document.querySelector('#decimal_input')

function convert() {
  const value = binary_input.value
  console.log(value)

  if (value === '' || Array.from(value.toString()).length > 8) {
    inputAlert()
    return false
  }

  decimal_input.value = parseInt(value, 2)
  return true
}

function inputAlert() {
  alert('Please insert a valid binary number!')
}
