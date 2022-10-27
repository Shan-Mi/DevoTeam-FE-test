import styled from 'styled-components'

export const SortByWrapper = styled.button`
  &:before {
    content: '';
    width: 23px;
    height: 23px;
    display: inline-block;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-color: transparent;
  }
  &:hover {
    cursor: pointer;
  }
  grid-column: 1;
  text-align: left;
  border: none;
  background: transparent;
  @media (min-width: 768px) {
    grid-row: 1;
  }
`
