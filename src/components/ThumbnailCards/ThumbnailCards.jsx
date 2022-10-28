import React from 'react'
import Email from '../../assets/Email.svg'
import Phone from '../../assets/Phone.svg'
import NoResult from '../NoResult/NoResult'
import {
  Avatar,
  BottomCard,
  CardWrapper,
  ContactIcons,
  Icon,
  Name,
  Skeleton,
  ThumbnailCardsWrapper,
  TopCard,
  UserInfoWrapper,
} from './ThumbnailCards.styles'

const ThumbnailCards = ({ results, loading }) => {
  if (loading) return Skeleton

  if (!results.length) {
    return <NoResult />
  }
  return (
    <ThumbnailCardsWrapper data-testid="thumbnail-cards">
      {results?.map(
        (
          {
            email,
            name: { first, last },
            location: { city },
            picture: { large },
          },
          i
        ) => (
          <CardWrapper key={email} data-testid="thumbnail-card">
            <TopCard color={i % 5} />
            <BottomCard color={i % 5} />
            <UserInfoWrapper>
              <Name data-testid="thumbnail-card-name">
                {first} {last}
              </Name>
              <Avatar
                src={large}
                city={city}
                data-testid="thumbnail-card-avatar"
              />

              <ContactIcons data-testid="thumbnail-card-icons">
                <Icon iconSrc={Email} />
                <Icon iconSrc={Phone} />
              </ContactIcons>
            </UserInfoWrapper>
          </CardWrapper>
        )
      )}
    </ThumbnailCardsWrapper>
  )
}

export default ThumbnailCards
