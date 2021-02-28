import React, { useState } from 'react'
import Proptypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [category, setCategory] = useState('Ingrese categoria')

    const handleChange = e => {

        setCategory(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (category.trim().length > 2) {
            setCategories(categories => [category, ...categories])
            setCategory('')
        }
    }
    const handleFocus = e => {
        e.target.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{category}</h2>
            <input
                type='text'
                value={category}
                onChange={handleChange}
                onFocus={handleFocus}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}

export default AddCategory