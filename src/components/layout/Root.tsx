import { Switch } from 'solid-js'
import { tw } from 'twind'
import { MatchRoute } from '@rturnq/solid-router'

import AnalyticsPage from '../../pages/AnalyticsPage'
import DashboardPage from '../../pages/DashboardPage'
import InstancesPage from '../../pages/InstancesPage'
import NotFoundPage from '../../pages/NotFoundPage'
import CodePage from '../../pages/CodePage'
import CloudPlatformPage from '../../pages/CloudPlatformPage'
import VersionPage from '../../pages/VersionPage'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import HomeNavbar from './HomeNavbar'
import Topbar from './Topbar'
import CodeTopbar from './CodeTopbar'
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import BlogPage from '../../pages/BlogPage'
import ContactPage from '../../pages/ContactPage'
import DocsPage from '../../pages/DocsPage'
import LoginPage from '../../pages/LoginPage'
import MediaPage from '../../pages/MediaPage'
import PrivacyPage from '../../pages/PrivacyPage'
import StartPage from '../../pages/StartPage'
import SupportPage from '../../pages/SupportPage'
import TermsPage from '../../pages/TermsPage'
import TutorialPage from '../../pages/TutorialPage'


function Root() {
  return (
    <>
    <style>
      {`
    .dot {
      height: 10px;
      width: 10px;
      background-color: #44BA76;
      border-radius: 50%;
      display: inline-block;
    }
  `}
    </style>

    <div className={tw`w-screen dark:bg-dark`}>

    <Switch>

      <MatchRoute end>
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="instances">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="code">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="version">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="cloud-platform">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="home">
        <HomeNavbar/>
      </MatchRoute>


      <MatchRoute path="docs">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="blog">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="login">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="start">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="about">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="support">
      <HomeNavbar/>
      </MatchRoute>

      <MatchRoute path="contact">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="tutorial">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="media">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="privacy">
      <HomeNavbar/>
      </MatchRoute>
      
      <MatchRoute path="terms">
      <HomeNavbar/>
      </MatchRoute>

    </Switch>
    
    <Switch>
      <MatchRoute end>
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="code">
      <CodeTopbar/>
      </MatchRoute>

    </Switch>

    </div>

    <div className={tw`flex w-screen`}>

    <Switch>
      <MatchRoute end>
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="analytics">
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="code">
      <Sidebar />
      </MatchRoute>
      
    </Switch>

      <main className={tw`w-full flex-1`}>
        <Switch fallback={NotFoundPage}>
          <MatchRoute end>
            <DashboardPage />
          </MatchRoute>

          <MatchRoute path="instances">
            <InstancesPage />
          </MatchRoute>

          <MatchRoute path="analytics">
            <AnalyticsPage />
          </MatchRoute>

          <MatchRoute path="code">
            <CodePage />
          </MatchRoute>

          <MatchRoute path="version">
            <VersionPage/>
          </MatchRoute>

          <MatchRoute path="cloud-platform">
            <CloudPlatformPage/>
          </MatchRoute>

          <MatchRoute path="home">
            <HomePage/>
          </MatchRoute>

          <MatchRoute path="docs">
            <DocsPage/>
          </MatchRoute>
          
          <MatchRoute path="blog">
            <BlogPage/>
          </MatchRoute>
          
          <MatchRoute path="login">
            <LoginPage/>
          </MatchRoute>
          
          <MatchRoute path="start">
            <StartPage/>
          </MatchRoute>
          
          <MatchRoute path="about">
            <AboutPage/>
          </MatchRoute>
          
          <MatchRoute path="support">
            <SupportPage/>
          </MatchRoute>

          <MatchRoute path="contact">
            <ContactPage/>
          </MatchRoute>
          
          <MatchRoute path="tutorial">
            <TutorialPage/>
          </MatchRoute>
          
          <MatchRoute path="media">
            <MediaPage/>
          </MatchRoute>
          
          <MatchRoute path="privacy">
            <PrivacyPage/>
          </MatchRoute>
          
          <MatchRoute path="terms">
            <TermsPage/>
          </MatchRoute>
          
        </Switch>
      </main>
    </div>
    </>
  )
}

export default Root
