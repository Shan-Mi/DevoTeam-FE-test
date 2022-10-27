import React from 'react'
import SortBy from '../SortBy/SortBy'
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher'
import {
  Input,
  SearchBarIconWrapper,
  SearchBarWrapper,
  ViewWrapper,
} from './SearchBar.styles'

const SearchBar = ({
  showListView,
  setShowListView,
  isAsc,
  setIsAsc,
  setSearchTerm,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.currentTarget.value)
  }
  return (
    <ViewWrapper>
      <SearchBarWrapper>
        <SearchBarIconWrapper />
        <Input onChange={handleOnChange} data-testid="search" />
      </SearchBarWrapper>
      <SortBy isAsc={isAsc} setIsAsc={setIsAsc} />
      <ViewSwitcher
        showListView={showListView}
        setShowListView={setShowListView}
      />
    </ViewWrapper>
  )
}

export default SearchBar
