import React from 'react'

const Error = ({err}) => {
    return (
        <div className='container text-center mt-4'>
            <h3 className='border p-3 rounded text-danger'>{err}</h3>
        </div>
    )
}

export default Error
