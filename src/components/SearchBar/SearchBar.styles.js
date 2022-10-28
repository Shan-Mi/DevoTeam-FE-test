import styled from 'styled-components'
import SearchIcon from '../../assets/SearchIcon.svg'

export const ViewWrapper = styled.div`
  display: grid;
  /* grid-template-rows: 0.2fr auto 0.2fr; */
  /* grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr; */
  grid-template-columns: 40px auto 0.2fr;
  text-align: center;
  grid-gap: 0.25rem;
`

export const SearchBarWrapper = styled.div`
  position: relative;
  grid-column: 1 / end;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    grid-row: 1;
    grid-column: 2;
    margin-bottom: unset;
    height: 24px;
  }
`

export const SearchBarIconWrapper = styled.span`
  background-image: url(${SearchIcon});
  width: 14px;
  height: 14px;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  height: 25px;
  padding: 0 30px;
  width: 100%;
  background: #fff;

  &:focus-visible {
    outline: #c55959b5 solid 2px;
  }
`
export const ClearBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 5px;

  }
`
