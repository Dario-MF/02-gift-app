import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({ url, title }) => {

    return (
        <div className={'card card_item'}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GridItem
