import { shallow } from 'enzyme';
import React from 'react'
import AddCategory from '../../Components/AddCategory';

describe('Test for <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(()=> {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('test snapShot', () => {
       
        expect(wrapper).toMatchSnapshot()
    })

    test('test for capture imput.value', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change',{target:{ value: value }})

    })

    test('No debe de llamar a setCategories si el imput no pasa la condicion', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })
    

    
    
})
