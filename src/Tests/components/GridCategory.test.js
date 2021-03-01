import { shallow } from 'enzyme'
import React from 'react'
import '@testing-library/jest-dom'
import GridCategory from '../../Components/GridCategory'
import useGifts from '../../hooks/useGifts'
jest.mock('../../hooks/useGifts')

describe('Test for component <GridCategory />', () => {

    const category = 'One piece'
   
    test('snapshot for <GridCategory />', () => {
        useGifts.mockReturnValue({
                data:[],
                loading: true
            }
        )
        const wrapper = shallow(<GridCategory category={ category }/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('evaluar que useGifts devuelve la data correctamente', () => {
        const gifs = [{
            id: '1234',
            title: 'titulo gift',
            url: 'https://image/gif.jpg'
        }]
        
        useGifts.mockReturnValue({
                data:gifs,
                loading: false
            }
        )
        const wrapper = shallow(<GridCategory category={ category }/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('.grid-cards').length).toBe(gifs.length)
    })
    
    
})
