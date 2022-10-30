import React from "react"
import { useSelector } from 'react-redux'

import GlobalFonts from './assets/fonts/fonts'
import GlobalStylesReset from './assets/reset'
import Router from './Router'
import { ProviderStoreReact } from './storeLocationRules/ProviderStoreReact'

function App() {

  // const cookieAgree = store.getState().user.cookieAgree
  // const userInfo = store.getState().user.cookieAgree

  const { loading, userInfo, cookieAgree, error } = useSelector((state) => state.user)
  
  const user = userInfo && userInfo.user
  const todaySummary = userInfo && userInfo.todaySummary
  const accessToken = userInfo && userInfo.accessToken


  const cookieParse = (name) => {
      const c = document.cookie.match("\\b" + name + "=([^;]*)\\b")
      return c ? c[1] : null
  }
  const cookieTrue = cookieParse('agree')

  const sourceTrue = {
      userInfoGlobal: null,
      todaySummary: null,
      googleAds: null,
      cookieAg: null
  }

  
  // ----------------------------------------------------------
  if (cookieAgree || cookieTrue) {
    sourceTrue.userInfoGlobal = JSON.parse(sessionStorage.getItem('userInfo'))
    sourceTrue.todaySummary = JSON.parse(sessionStorage.getItem('todaySummary'))
    sourceTrue.googleAds = cookieParse('google')
    sourceTrue.cookieAg = cookieTrue
    }
  else  {  
        sourceTrue.userInfoGlobal = user
        sourceTrue.todaySummary = todaySummary
        sourceTrue.googleAds = accessToken
        sourceTrue.cookieAg = cookieAgree
      }
  // -------------------------------------------------------------

  return (
    <ProviderStoreReact.Provider value={sourceTrue}>
      <GlobalFonts />
      <GlobalStylesReset />
      <Router />
    </ProviderStoreReact.Provider>
  )
}

export default App
