import React, { useContext } from 'react'
import { GlobalContext } from './SplashContext';

export default function ThemeToggle() {

  const { isDark, toggleTheme } = useContext(GlobalContext);

  return (
    
    <section className='toggle-container'>
        {isDark ?
            (<button className='btn btn-primary' onClick={toggleTheme}>Toggle Theme</button>) 
        : 
            (<button className='btn btn-success' onClick={toggleTheme}>Toggle Theme</button>)
        }
    </section>
)
}
