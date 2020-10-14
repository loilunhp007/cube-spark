import React from 'react'
import { Fragment } from 'react';

function Text({title, description, published}) {
    return (
        <Fragment>
            <h3>
                {title}{published ? `(${published})`:''}
            </h3>
            <p>
                {description ? description : <i>No Description</i>}
            </p>
        </Fragment>
    )
}

export default Text;
