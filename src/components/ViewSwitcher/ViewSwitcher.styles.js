import styled from 'styled-components'

export const ViewSwitcherWrapper = styled.button`
  grid-column: 4;
  text-align: right;
  border: none;
  background: transparent;

  &:before {
    content: '';
    width: 23px;
    height: 23px;
    display: inline-block;
    background-image: url(${(props) => props.iconSrc});
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    grid-row: 1;
  }
`
