import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'

const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['One punch', 'One piece', 'Dragon Ball'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr></hr>
            <AddCategory />
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
