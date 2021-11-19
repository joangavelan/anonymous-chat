import React from 'react'
import User from './components/User'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import Search from './components/Search'
import CreateChannelButton from './components/CreateChannelButton'
import SidebarSection from './components/SidebarSection'
import { channels } from './data/channels'
import { users } from './data/users'
import { messages } from './data/messages'
const { colors } = theme;

const Container = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2.5rem;
  max-width: 100rem;
  margin: 0 auto;
  padding: 3rem;
  height: 100vh;
`

const Heading = styled.h1`
  font-size: 3rem;
  grid-column: span 2;
  color: ${colors.white};
  background-color: ${colors.dark[100]};
  text-align: center;
  padding: 3rem;
  border-radius: .8rem;
`

const SideBar = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-gap: 2rem;
  grid-column: 1 / 2;
  background-color: ${colors.dark[100]};
  border-radius: .8rem;
  padding: 2rem;
  overflow-y: scroll;
`

const Chat = styled.main`
  grid-column: 2 / 3;
  background-color: ${colors.dark[100]};
  border-radius: .8rem;
  padding: 2rem;
  
  & > h2 {
    font-size: 1.8rem;
  }
`

const App = () => {
  return (
    <Container>
      <GlobalStyles />

      {/* heading */}
      <Heading>ChatApp</Heading>

      {/* sidebar */}
      <SideBar>
        {/* user */}
        <User />

        {/* create channel button */}
        <CreateChannelButton />
        
        {/* search */}
        <Search />

        {/* channels */}
        <SidebarSection title="Channels" items={channels}/>        
        {/* channels */}
        <SidebarSection title="Users" items={users}/>        
        {/* channels */}
        <SidebarSection title="Messages" items={messages}/>        
        
      </SideBar>

      {/* chat window */}
      <Chat>
        <h2>Room Description</h2>
      </Chat>

    </Container>
  )
}

export default App