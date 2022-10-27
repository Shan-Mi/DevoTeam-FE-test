import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    width: max-content;
    padding-left: 275px;
  }
`
