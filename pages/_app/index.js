import { Provider } from 'react-redux'
import configureStore from '@/state/store'
import GlobalStyle from '@/components/GlobalStyle'
import reduxWrapper from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { appWithTranslation } from '@server/helpers/i18n'
// import { PersistGate } from 'redux-persist/lib/integration/react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
})

function App({ Component, pageProps, store }) {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={store.__PERSISTOR}> */}
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
        {/* </PersistGate> */}
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

const translatedApp = appWithTranslation(App)
export default reduxWrapper(configureStore)(withReduxSaga(translatedApp))
