import React from 'react'
import { shallow } from "enzyme"
import GridItem from "../../Components/GridItem"

describe('tests for <GridItem />', () => {
    const title = 'titulo'
    const url = 'https//:localhost/image.jpg'
    const wrapped = shallow(<GridItem title={title} url={url} />)

    test('snapshot <GridItem />', () => {


        expect(wrapped).toMatchSnapshot()
    })

    test('comprobar render de p', () => {
        const p = wrapped.find('p')

        expect(p.text().trim()).toBe(title)
    })

    test('comprobar que img recibe props correctamente', () => {
        const img = wrapped.find('img')

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('comprobar className de div', () => {
        const divClassName = wrapped.find('div').prop('className')

        expect(divClassName.includes('card_item')).toBe(true)

    })




})
