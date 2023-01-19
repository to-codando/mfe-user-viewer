import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'dataCard'
const app = { name, model, view, controller }
const dataCard = createComponent(app)

export { dataCard }
