import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import Stage from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('Header', () => {
    let wrapper
    const data= {
        step: 'Content', 
    
    }

    beforeEach(() => {
        wrapper = shallow(<Stage {...data}/>)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
})