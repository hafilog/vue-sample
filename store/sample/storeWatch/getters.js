export function fullName (state) {
  const { lastName, firstName } = state
  return `${lastName} ${firstName}`
}
