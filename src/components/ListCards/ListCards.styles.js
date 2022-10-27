import styled from 'styled-components'

export const COLORS_LIST = [
  '#A7B8A8',
  '#E3D5C9',
  '#E7CDAB',
  '#E1D3C7',
  '#E8CDAD',
]
export const CardsWrapper = styled.div`
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`

export const ListCardWrapper = styled.div`
  min-width: 300px;
  height: 100px;
  background-color: ${(props) => COLORS_LIST[props.index]};
  margin-bottom: 12px;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

export const ContentWrapper = styled.div`
  background-color: #fff;
  min-width: 242px;
  height: 100px;
  margin-left: 58px;
  position: relative;
  border-radius: 42px 20px 20px 0;
  padding: 15px 15px 15px 50px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Avatar = styled.div`
  background-image: url(${(props) => props.src});
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  border-radius: 50%;
  left: -40px;
  top: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`

export const Name = styled.h2`
  font-family: 'Karla';
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin: unset;
  text-align: left;
`

export const Location = styled.p`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(41, 41, 41, 0.6);
  margin: unset;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16.8px;
    margin-top: 3px;
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

export const NameLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Skeleton = [...Array(50).keys()].map((i) => (
  <CardsWrapper key={i}>
    <ListCardWrapper index={i % 5} />
  </CardsWrapper>
))
