export const mockServiceFactory = () => {
  const onServiceWorkerStart = async () => {
    if (process.env.NODE_ENV === 'development') {
      const { worker } = require('@/mocks/browser')
      await worker.start({
        serviceWorker: {
          url: '/mockServiceWorker.js'
        }
      })
    }
  }

  const init = async () => {
    await onServiceWorkerStart()
  }

  return { init }
}
