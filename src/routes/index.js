import { render } from 'terezzu'
import { userCreator } from '@/components/userCreator'
import { userViewer } from '@/components/userViewer'
import { appNotFound } from '@/components/notFound'
import { dataCard } from '@/components/dataCard'

export const routes = [
  {
    regex: /\/404$/,
    default: '/404',
    mount: () => ({
      component: appNotFound,
      children: null
    })
  },
  {
    regex: /(\/|\/viewer)$/,
    start: '/viewer',
    mount: () => ({
      component: userViewer,
      children: context => {
        render(dataCard, context)
      }
    })
  },
  {
    regex: /\/creator$/,
    mount: () => ({
      component: userCreator,
      children: null
    })
  }
]
