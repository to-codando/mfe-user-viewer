export default ({ model }) => {
  const getAny = () => 'Any...'

  const setTitle = () => model.setTitle({ title: 'Outro Texto' })

  const showAlert = () => {
    window.alert()
  }

  return { getAny, showAlert, setTitle }
}
