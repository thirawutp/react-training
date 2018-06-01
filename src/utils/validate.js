export const validateIdNo = (idNo='') => {
  if(typeof idNo !== 'string') {
    return 'invalid_format'
  }
  if(idNo.length !== 13) {
    return 'invalid_idNo'
  }
}