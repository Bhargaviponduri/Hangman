import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import Guessword from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('guessedWord', () => {
    let wrapper
    const data = {
        rightGuesses: 'rightGuesses',
        guessword: 'guessword'
    }
    beforeEach(() => {
        wrapper = shallow(<Guessword {...data} />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})