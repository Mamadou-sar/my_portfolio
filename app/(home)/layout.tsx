import React from 'react'
import Hero from "@/components/Hero";

export default function Layout({children}: {children: React.ReactNode}  ) {
    return (
        <div>
            <Hero/>
            {children}
        </div>
    )
}
