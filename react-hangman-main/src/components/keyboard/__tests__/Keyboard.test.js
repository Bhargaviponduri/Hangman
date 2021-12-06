import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import Keyboard from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('Header', () => {
    let wrapper
    const data= {
        onKeyClick: jest.fn(), 
        onReset: jest.fn(), 
        disabledKeys: 'disabledkeys'
    }

    beforeEach(() => {
        wrapper = shallow(<Keyboard {...data}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})