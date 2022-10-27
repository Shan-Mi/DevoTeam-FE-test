import React from 'react'

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './Error.styles'

const Error = ({ error }) => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
    <ErrorImageText>
      Dude, this page is broken for now. Come back later.
      {error}
    </ErrorImageText>
  </ErrorImageOverlay>
)

export default Error
