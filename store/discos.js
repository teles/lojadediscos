export const state = () => ({
  listById: {},
  listCompleteById: {}
})

export const mutations = {
  add (state, disco) {
    state.listById[disco.id] = disco
  },
  addComplete (state, disco) {
    state.listCompleteById[disco.id] = disco
  }
}

export const getters = {
  getCompleteById: state => (id) => {
    return state.listCompleteById[id]
  }
}
