import React from 'react'
import Email from '../../assets/Email.svg'
import Phone from '../../assets/Phone.svg'
import {
  Avatar,
  CardsWrapper,
  ContactIcons,
  ContentWrapper,
  Icon,
  ListCardWrapper,
  Location as City,
  Name,
  NameLocationWrapper,
  Skeleton,
} from './ListCards.styles'

const ListCard = ({ results, loading }) => {
  if (loading) return Skeleton

  return (
    <CardsWrapper data-testid="list-cards">
      {results.map(
        (
          {
            email,
            name: { first, last },
            location: { city },
            picture: { large },
          },
          i
        ) => (
          <ListCardWrapper index={i % 5} key={email} data-testid="list-card">
            <ContentWrapper>
              <Avatar src={large} data-testid="list-card-avatar" />
              <NameLocationWrapper>
                <Name data-testid="list-card-name">
                  {first} {last}
                </Name>
                <City data-testid="list-card-city">{city}</City>
              </NameLocationWrapper>

              <ContactIcons data-testid="list-card-contact-icons">
                <Icon iconSrc={Email} />
                <Icon iconSrc={Phone} />
              </ContactIcons>
            </ContentWrapper>
          </ListCardWrapper>
        )
      )}
    </CardsWrapper>
  )
}

export default ListCard
