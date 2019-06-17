export default function replaceSpecial (str) {
  str = str.replace(/[ÀÁÂÃÄÅ]/g, 'A')
  str = str.replace(/[àáâãäå]/g, 'a')
  str = str.replace(/[ÈÉÊË]/g, 'E')
  str = str.replace(/[èéê]/g, 'e')
  str = str.replace(/[ìíîĩ]/g, 'i')
  str = str.replace(/[ÍÌĨÎ]/g, 'I')
  str = str.replace(/[ôõóò]/g, 'o')
  str = str.replace(/[ÔÕÓÒ]/g, 'O')
  str = str.replace(/[úùũû]/g, 'u')
  str = str.replace(/[ÚÙŨÛ]/g, 'U')
  str = str.replace(/[Ç]/g, 'C')
  str = str.replace(/[ç]/g, 'c')
  return str
}
