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
      iconSrc={showListView ? ListViewIcon : ThumbnailViewIcon}
    />
  )
}

export default ViewSwitcher
