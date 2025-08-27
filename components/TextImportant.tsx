import React from 'react'

export default function TextImportant({text}: { text: string }) {
    return (
        <span className='text-primary-300'>{text}</span>
    )
}
