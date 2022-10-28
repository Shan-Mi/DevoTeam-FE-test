import { shallow } from 'enzyme'
import ListCards from './ListCards'
import { mockProps } from '../ThumbnailCards/ThumbnailCards.test'

describe('listCards components', () => {
  describe('when fetching results is not finished, loading status is true', () => {
    const listCards = shallow(<ListCards results={mockProps} loading />)

    it('When loading, there should not have any listCards', () => {
      expect(listCards.find('[data-testid="list-cards"]').exists()).toBe(false)
    })
  })

  describe('when fetching results is finished', () => {
    const listCards = shallow(<ListCards results={mockProps} loading={false} />)

    it('should render listCardsWrapper', () => {
      expect(listCards.find('[data-testid="list-cards"]').length).toEqual(1)
    })

    it('When not loading, it should render 2 listCards', () => {
      expect(
        listCards.find('[data-testid="list-cards"]').children().length
      ).toEqual(2)
    })

    it('should contain correct url for avatar', () => {
      expect(
        listCards.find('[data-testid="list-card-avatar"]').first().prop('src')
      ).toEqual('https://randomuser.me/api/portraits/men/5.jpg')
    })

    it('should render correct name', () => {
      expect(listCards.find('[data-testid="list-card-name-1"]').text()).toEqual(
        'test-1 user-1'
      )
    })

    it('should render location', () => {
      expect(
        listCards.find('[data-testid="list-card-city"]').first().text()
      ).toEqual('tokyo')
    })

    it('should render contact icons', () => {
      expect(
        listCards
          .find('[data-testid="list-card-contact-icons"]')
          .first()
          // eslint-disable-next-line testing-library/no-node-access
          .children().length
      ).toEqual(2)
    })
  })
})
