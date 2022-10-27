import { shallow } from 'enzyme'
import ThumbnailCards from './ThumbnailCards'

export const mockProps = [
  {
    email: 'a-test-1',
    name: { first: 'test-1', last: 'user-1' },
    location: { city: 'tokyo' },
    picture: { large: 'https://randomuser.me/api/portraits/men/5.jpg' },
  },
  {
    email: 'b-test-2',
    name: { first: 'test-2', last: 'user-2' },
    location: { city: 'lisbon' },
    picture: { large: 'https://randomuser.me/api/portraits/men/65.jpg' },
  },
]

describe('ThumbnailCards components', () => {
  describe('when fetching results is not finished, loading status is true', () => {
    const thumbnailCards = shallow(
      <ThumbnailCards results={mockProps} loading />
    )

    it('When loading, there should not have any thumbnailCards', () => {
      expect(
        thumbnailCards.find('[data-testid="thumbnail-card"]').length
      ).toEqual(0)
    })
  })

  describe('when fetching results is finished', () => {
    const thumbnailCards = shallow(
      <ThumbnailCards results={mockProps} loading={false} />
    )

    it('should render thumbnailCardsWrapper', () => {
      expect(
        thumbnailCards.find('[data-testid="thumbnail-cards"]').length
      ).toEqual(1)
    })

    it('When not loading, it should render 2 thumbnailCards', () => {
      expect(
        thumbnailCards.find('[data-testid="thumbnail-card"]').length
      ).toEqual(2)
    })

    it('should contain correct url for avatar', () => {
      expect(
        thumbnailCards
          .find('[data-testid="thumbnail-card-avatar"]')
          .first()
          .prop('src')
      ).toEqual('https://randomuser.me/api/portraits/men/5.jpg')
    })

    it('should render correct name', () => {
      expect(
        thumbnailCards
          .find('[data-testid="thumbnail-card-name"]')
          .first()
          .text()
      ).toEqual('test-1 user-1')
    })

    it('should render location', () => {
      expect(
        thumbnailCards
          .find('[data-testid="thumbnail-card-avatar"]')
          .first()
          .prop('city')
      ).toEqual('tokyo')
    })

    it('should render contact icons', () => {
      expect(
        thumbnailCards
          .find('[data-testid="thumbnail-card-icons"]')
          .first()
          // eslint-disable-next-line testing-library/no-node-access
          .children().length
      ).toEqual(2)
    })
  })
})
