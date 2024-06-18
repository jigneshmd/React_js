import React from 'react'
import propTypes from 'prop-types';

const Props = (props) => {
    return (
        <>
            {props.name}
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nihil, minus quidem temporibus ex, recusandae dicta ducimus labore atque corporis laudantium laborum perspiciatis. Consequuntur vitae dolorum temporibus deserunt officiis vel!</h1>
        </>
    )
}

export default Props

Props.propTypes = {
    name: propTypes.string
}