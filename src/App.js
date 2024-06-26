import React, { Component, Suspense } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import AppContext from './AppContext'
import Header from './Components/Header'
import Menu from './Components/Menu'
import style from './style'

const Experience = React.lazy(() => import('./Components/Experience/Component'))
const Skills = React.lazy(() => import('./Components/Skills/Component'))
const Education = React.lazy(() => import('./Components/Education/Component'))
const Extra = React.lazy(() => import('./Components/Extra/Component'))
const Certafication = React.lazy(() =>
  import('./Components/Certification/Component')
)
const Project = React.lazy(() => import('./Components/Project/Component'))

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    min-width: 320px;
  }

  @media print {
    @page {
      margin: 0 0rem;
      size: auto;
    }

    body {
      background-color: transparent;
      box-sizing: border-box;
    }
  }
`

const StyleBase = styled.div`
  padding: 16px;
  color: ${props => props.theme.fg};

  .side {
    margin-top: 38px;
  }

  @media print {
    width: 1024px;
    display: grid;
    grid-gap: 68px;
    grid-template-columns: 360px 1fr;
    grid-template-rows: auto 1fr;
    padding: 6rem 3.2rem;

    .main {
      grid-column: 2;
      grid-row: 1 / -1;
    }

    .side {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 425px) {
    padding-bottom: 56px;
  }
`

export default class App extends Component {
  constructor(props) {
    super(props)

    const theme =
      localStorage.getItem('theme') === 'dark' ? style.dark : style.light

    this.state = { theme }

    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    const theme = this.state.theme === style.light ? style.dark : style.light
    this.setState({ theme })
    localStorage.setItem('theme', theme === style.dark ? 'dark' : 'light')
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <ThemeProvider theme={this.state.theme}>
          <StyleBase>
            <GlobalStyle />
            <Menu pdfLink={process.env.REACT_APP_PDF} />
            <Header />
            <div className="main">
              <Suspense fallback="">
                <Experience />
              </Suspense>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Suspense fallback="">
                <Project />
              </Suspense>
            </div>
            <div className="side">
              <Suspense fallback="">
                <Education />
              </Suspense>
              <Suspense fallback="">
                <Certafication />
              </Suspense>
              <br />
              <br />
              <br />
              <Suspense fallback="">
                <Skills />
              </Suspense>
              <Suspense fallback="">
                <Extra />
              </Suspense>
            </div>
          </StyleBase>
        </ThemeProvider>
      </AppContext.Provider>
    )
  }
}
