

export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=j7Xha4PEZxpqubMv0nouiHmLGxMJWcp7`
    const response = await fetch(url)
    const { data } = await response.json()

    const items = data.map(i => (
        {
            id: i.id,
            title: i.title,
            url: i.images?.downsized_medium.url
        }
    ))
    return items
}