import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'userViewer'
const app = { name, model, view, controller }
const userViewer = createComponent(app)

export { userViewer }
