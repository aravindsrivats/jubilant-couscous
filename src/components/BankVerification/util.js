const maskAccount = input => {
  const pattern = /^(\d{4})(\d{4})(\d{2})(\d{2})$/
  const format = '$1 XXXX XX$4'
  return input.replace(pattern, format)
}

const maskIfsc = input => {
  const pattern = /^(\w{6}).*$/
  const format = '$1XXX'
  return input.replace(pattern, format)
}

export { maskAccount, maskIfsc }