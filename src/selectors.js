export const isJuvenile = (app) => {
  if (app.isAdult === 'Y') {
    return false
  }
  return true
}