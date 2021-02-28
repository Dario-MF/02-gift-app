import React from 'react'
import useGifts from '../hooks/useGifts'
import GridItem from './GridItem'

const GridCategory = ({ category }) => {

    //const [gifts, setGifts] = useState([])

    const { data: gifts, loading } = useGifts(category)



    return (
        <div>
            <h2>{category}</h2>
            {loading && <p>Cargando...</p>}
            <div className={'grid-cards'}>
                {
                    gifts.map(gift => (
                        <GridItem
                            key={gift.id}
                            {...gift}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GridCategory
