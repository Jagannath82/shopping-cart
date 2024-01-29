import React, { useContext, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import Gallery from './Gallery'
import SplashContext, { GlobalContext } from './SplashContext'

export default function SplashImage() {
    
    return (
        <div class="text-center">
            <SplashContext>
                <ThemeToggle />
                <SearchForm/>
                <Gallery/>
            </SplashContext>
        </div>
    )
}
