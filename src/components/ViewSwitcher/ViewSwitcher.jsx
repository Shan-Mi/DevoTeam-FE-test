import React from 'react'
import ThumbnailViewIcon from '../../assets/ThumbnailViewIcon.svg'
import ListViewIcon from '../../assets/ListViewIcon.svg'
import { ViewSwitcherWrapper } from './ViewSwitcher.styles'

const ViewSwitcher = ({ showListView, setShowListView }) => {
  const handleOnClick = () => {
    setShowListView((prev) => !prev)
  }

  return (
    <ViewSwitcherWrapper
      data-testid="switcher"
      onClick={handleOnClick}
      role="button"
      aria-roledescription="click to toggle different view between lists view and thumbnail cards view"
      iconSrc={showListView ? ListViewIcon : ThumbnailViewIcon}
    />
  )
}

export default ViewSwitcher
