import React from 'react'

function Error({ msg }) {
    return (
        <div className="flex flex-row items-start pt-1 gap-2 text-red-500">
            <span><i className="fa-solid fa-circle-info"></i></span>
            <span className='text-left font-medium text-sm'>{msg}</span>
        </div>
    )
}

export default Error