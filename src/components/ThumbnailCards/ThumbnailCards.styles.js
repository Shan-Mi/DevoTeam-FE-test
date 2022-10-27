import { COLORS_LIST } from '../ListCards/ListCards.styles'
import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 135px;
  height: 220px;
  margin: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 210px;
    height: 342px;
  }
`
export const ThumbnailCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const TopCard = styled.div`
  background: white;
  height: 50%;

  &:after {
    content: '';
    border-bottom-right-radius: 42px;
    background: ${(props) => COLORS_LIST[props.color]};
    display: block;
    height: 100%;
  }
`
export const BottomCard = styled.div`
  background: ${(props) => COLORS_LIST[props.color]};
  height: 50%;

  &:after {
    content: '';
    border-top-left-radius: 42px;
    background: white;
    display: block;
    height: 100%;
  }
`

export const Avatar = styled.div`
  background-image: url(${(props) => props.src});
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:after {
    content: '${(props) => props.city}';
    display: inline;
    position: absolute;
    bottom: -20px;
    width: max-content;
    transform: translateX(-50%);
    font-family: 'Lato';
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: rgba(41, 41, 41, 0.6);
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;

    &:after {
      bottom: -25px;
    }
  }
`

export const Name = styled.div`
  font-family: 'Karla';
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  margin: unset;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const UserInfoWrapper = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 33px 0 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 56px 0 38px;
  }
`
export const ContactIcons = styled.div`
  height: 17px;
  margin-top: 17px;
  display: flex;
  justify-content: end;
  column-gap: 10px;

  @media (min-width: 768px) {
    margin: unset;
  }
`
export const Icon = styled.button`
  background-image: url(${(props) => props.iconSrc});
  background-repeat: no-repeat;
  background-color: transparent;
  width: 22px;
  height: 22px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const Skeleton = [...Array(50).keys()].map((i) => (
  <ThumbnailCardsWrapper key={i}>
    <CardWrapper index={i % 5} />
  </ThumbnailCardsWrapper>
))
