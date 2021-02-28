import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts'

const useGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifts(category)
            .then(gifs => {

                setTimeout(() => {
                    setState({
                        data: gifs,
                        loading: false
                    })
                }, 3000);

            })

    }, [category])

    return state

}

export default useGifts
