import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import useGifts from '../../hooks/useGifts'

describe('Tests for hook useGifts ', () => {
    
    
    test('debe de retornar state inicial ', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useGifts('One Piece'))
        const { data, loading} = result.current;

        await waitForNextUpdate({ timeout: 1500 })

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe de retornar un arr de gifs y loading false ', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useGifts('One Piece'))
        await waitForNextUpdate({ timeout: 1500 })
        const { data, loading} = result.current;

        expect(data.length).toBe(9)
        expect(loading).toBe(false)
    })
    
    
})
