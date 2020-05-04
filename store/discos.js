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
  }
}
