import React, { useRef } from 'react'
import SortBy from '../SortBy/SortBy'
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher'
import {
  ClearBtn,
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
  const inputRef = useRef(null)
  const handleOnChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.currentTarget.value)
  }

  const resetSearch = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
    setSearchTerm('')
  }
  return (
    <ViewWrapper>
      <SearchBarWrapper>
        <SearchBarIconWrapper />
        <Input ref={inputRef} onChange={handleOnChange} data-testid="search" />
        <ClearBtn onClick={resetSearch}>X</ClearBtn>
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
