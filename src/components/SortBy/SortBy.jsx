import React from 'react'
import SortByDesc from '../../assets/SortByDesc.svg'
import SortByAsc from '../../assets/SortByAsc.svg'
import { SortByWrapper } from './SortBy.styles'

const SortBy = ({ isAsc, setIsAsc }) => {
  const toggleSortBy = () => {
    setIsAsc((prev) => !prev)
  }

  return (
    <SortByWrapper
      data-testid="sort"
      src={isAsc ? SortByAsc : SortByDesc}
      onClick={toggleSortBy}
    />
  )
}

export default SortBy
