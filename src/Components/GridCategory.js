import React from 'react'
import useGifts from '../hooks/useGifts'
import GridItem from './GridItem'
import PropTypes from 'prop-types'


const GridCategory = ({ category }) => {

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

GridCategory.propTypes = {
    category: PropTypes.string.isRequired
}

export default GridCategory
