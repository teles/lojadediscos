function Translator (word) {
  const translations = [{
    from: 'Vinyl',
    to: 'Vinil'
  },
  {
    from: 'Europe',
    to: 'Europa'
  },
  {
    from: 'Brazil',
    to: 'Brasil'
  },
  {
    from: 'UK',
    to: 'Reino Unido'
  },
  {
    from: 'Album',
    to: 'Álbum'
  },
  {
    from: 'US',
    to: 'Estados Unidos'
  }]

  return translations.reduce((total, translation) => {
    return total.replace(new RegExp(`${translation.from}`, translation.flags || 'gi'), translation.to)
  }, word)
}

export default Translator
