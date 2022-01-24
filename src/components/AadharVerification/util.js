const formatAadhar = input => {
  const pattern = /^(\d{4})(\d{4})(\d{4})$/
  const format = '$1-$2-$3'
  return input.replace(pattern, format)
}

export { formatAadhar }