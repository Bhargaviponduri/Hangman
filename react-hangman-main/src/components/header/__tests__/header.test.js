import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import Header from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('Header', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Header />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})