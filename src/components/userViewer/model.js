export default state => {
  state.merge({
    title: 'User Viewer'
  })

  const setTitle = payload => {
    state.set({ ...payload })
  }

  const getState = () => state.get()

  return { getState, setTitle }
}
