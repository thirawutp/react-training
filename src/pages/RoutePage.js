import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Link
} from 'react-router'
import styles from './RoutePage.scss'

const NavigationBar = props => {
  return <div>
    <nav className={styles['nav-bar']}>
      NavigationBar
    </nav>
    <MenuBar />
    {props.children}
  </div>
}

const MenuBar = props => {
  return <nav className={styles['nav-bar']}>
    <Link className={styles.link} to='/'>home</Link> |
    <Link to='/product'>product</Link> |
    <Link to='/contact'>contact</Link>
  </nav>
}

const Page = props => {
  const { label, children } = props
  return (
    <div style={{ float: 'left' }}>
      <h1>{label} Page</h1>
      {children}
    </div>
  )
}

const HomePage = props => <Page label='Home' />
const ContactPage = props => <Page label='Contact' />
const NotFoundPage = props => <Page label='404' />
const ProductPage = props => <Page label='Product'>
  <ul>
    <li>sci-fi</li>
    <li>drama</li>
    <li>commady</li>
    <li>romance</li>
  </ul>
  {props.children}
</Page>

const SciFiPage = props => <Page label='Sci-Fi' />
const DramaPage = props => <Page label='Drama' />
const CommadyPage = props => <Page label='Commady' />
const RomancePage = props => <Page label='Romance' />

const TypePage = props => {
  switch (props.params.id) {
    case '1':
      return <SciFiPage />

    case '2':
      return <DramaPage />

    case '3':
      return <CommadyPage />

    case '4':
      return <RomancePage />

    default:
      return <NotFoundPage />
  }
}

class RoutePage extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavigationBar}>
          <IndexRoute component={HomePage} />
          <Route path='contact' component={ContactPage} />
          <Route path='product' component={ProductPage}>
            <Route path=':id' component={TypePage} />
          </Route>
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Router>
    )
  }
}

export default RoutePage