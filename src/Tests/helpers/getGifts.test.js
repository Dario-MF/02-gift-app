import { getGifts } from "../../helpers/getGifts"


describe('Test helper getGifts', () => {
    test('Comprobar que recibe datos pedidos 9', async() => {
        const gifs = await getGifts('Dragon Ball Z')

        expect(gifs.length).toBe(9)
    })
    test('Comprobar que recibe datos pedidos 0', async() => {
        const gifs = await getGifts('')

        expect(gifs.length).toBe(0)
    })
    
})
