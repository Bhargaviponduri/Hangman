import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow} from 'enzyme'
import Result from '../index'

Enzyme.configure({ adapter: new Adapter() })
describe('Result', () => {
    let wrapper
    const data= {
        result: 'result', 
        guessword: 'guessord' 
    
    }

    beforeEach(() => {
        wrapper = shallow(<Result {...data}/>)
    })
    it('should render', () => {
        wrapper.setProps({result: "GAME_RESULT.WON"})
        expect(wrapper).toBeTruthy()
    })

    it('should render', () => {
        wrapper.setProps({result: "GAME_RESULT.LOST"})
        expect(wrapper).toBeTruthy()
    })
})

