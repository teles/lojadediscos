export const state = () => ({
  listById: {}
})

export const mutations = {
  add (state, disco) {
    state.listById[disco.id] = disco
  }
}
