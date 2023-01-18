import model from './model'
import view from './view'
import controller from './controller'

export const userCreator = (state) => ({
  state,
  model,
  view,
  controller
})
