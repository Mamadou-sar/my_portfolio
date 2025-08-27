import React from 'react'

export default function Button({text}: { text: string }) {
    return (
        <button className='btn btn-xl bg-linear-to-bl border-secondary/50 from-accent to-secondary text-primary rounded-md w-fit text-xl'>
            {text}
        </button>
    )
}
