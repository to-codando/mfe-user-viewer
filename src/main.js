import { createApp, render } from 'terezzu'

import { userViewer } from '@/components/userViewer'
import { dataCard } from '@/components/dataCard'

// import { mockServiceFactory } from '@/mocks'

// const mockService = mockServiceFactory()
// mockService.init()

const appViewer = createApp({
  appName: 'userViewer',
  mount: target => {
    render(userViewer, target, context => {
      render(dataCard, context)
    })
  }
})

export { appViewer }
