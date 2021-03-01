import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GiftExpertApp from '../../GiftExpertApp'


describe('Test for <GiftExpertApp />', () => {
    
    test('snapshot for <GiftExpertApp />', () => {
        const wrapper = shallow(<GiftExpertApp  defaultCategories={['One Piece']}/>)

        expect(wrapper).toMatchSnapshot()
    })
    test('evaluar que se impriman las categorias', () => {
        const categories = ['one Punch', 'Dragon Ball']
        const wrapper = shallow(<GiftExpertApp defaultCategories={ categories } />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GridCategory').length).toBe(categories.length)

    })
    
    
})
