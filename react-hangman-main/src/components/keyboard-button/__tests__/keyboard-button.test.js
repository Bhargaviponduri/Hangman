import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import KeyboardButton from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('Header', () => {
    let wrapper
    const data= {
        text: 'Content', 
        value: 'value', 
        disabled: 'true', 
        onClick: jest.fn(), 
    
    }

    beforeEach(() => {
        wrapper = shallow(<KeyboardButton {...data}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})