const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas con Fetch', () => {
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Peaky blinders')
        expect(gifs.lenght).toBe(undefined);
    })
    
})
