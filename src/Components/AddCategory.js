import React, { useState } from 'react'

const AddCategory = () => {
    const [category, setCategory] = useState('Ingrese categoria')

    const handleChange = e => {

        setCategory(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{category}</h2>
            <input
                type='text'
                value={category}
                onChange={handleChange}
            />
        </form>
    )
}

export default AddCategory