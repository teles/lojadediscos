import Disco from '../components/Disco'

export const state = () => ({
  listById: {},
  listCompleteById: {}
})

export const mutations = {
  add (state, data) {
    state.listById[data.data.id] = new Disco(data.data, 'list', data.notes)
  },
  addComplete (state, data) {
    state.listCompleteById[data.data.id] = new Disco(data.data, 'detail', data.notes)
  }
}

export const getters = {
  getCompleteById: state => (id) => {
    return state.listCompleteById[id]
  },
  listByGenreSlug: state => (genreSlug) => {
    return Object.values(state.listById).filter((item) => {
      return item.genres.map(genre => genre.slug).includes(genreSlug)
    })
  },
  genres: (state) => {
    return Object.values(state.listById).reduce((total, item) => {
      item.genres.forEach((genre) => {
        const isNewGenre = total.some((totalItem) => {
          return totalItem.slug === genre.slug
        }) === false

        if (isNewGenre) {
          total.push(genre)
        }
      })
      return total
    }, [])
  }
}
