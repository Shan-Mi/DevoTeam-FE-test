import React, { useState } from 'react'
import Header from './components/Header/Header'
import ThumbnailCards from './components/ThumbnailCards/ThumbnailCards'
import Error from './components/Error/Error'
import SearchBar from './components/SearchBar/SearchBar'
import ListCards from './components/ListCards/ListCards'

import styled from 'styled-components'

import useUsers from './hooks/useUsers'

const AppWrapper = styled.main`
  text-align: center;
  background-color: #ebe9e4;
  width: 100vw;
  min-height: 100vh;
  padding: 44px;
  box-sizing: border-box;
`

const ContentWrapper = styled.section`
  max-width: 749px;
  margin: auto;
`

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isAsc, setIsAsc] = useState(true)
  const [showListView, setShowListView] = useState(true)
  const { users, loading, error } = useUsers()

  let sortedUsers
  if (isAsc) {
    sortedUsers = users.sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
  } else {
    sortedUsers = users.sort((a, b) => (a.name.first < b.name.first ? 1 : -1))
  }

  let filteredUsers = sortedUsers
  if (searchTerm) {
    filteredUsers = users.filter((u) =>
      u.name.first.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
  }

  if (error) return <Error />

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <SearchBar
          showListView={showListView}
          setShowListView={setShowListView}
          results={filteredUsers}
          setIsAsc={setIsAsc}
          isAsc={isAsc}
          setSearchTerm={setSearchTerm}
        />
        {!showListView && (
          <ThumbnailCards results={filteredUsers} loading={loading} />
        )}
        {showListView && (
          <ListCards results={filteredUsers} loading={loading} />
        )}
      </ContentWrapper>
    </AppWrapper>
  )
}

export default App
