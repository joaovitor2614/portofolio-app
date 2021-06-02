import React, { useEffect, useState } from 'react'


const useResponsive = (setExtended) => {
    const [isMobile, setMobile] = useState(false)
    useEffect(() => {
        const setResponsive = () => {
            // show items or not according to screen size
            if (window.innerWidth > 900) {
                setExtended(true)
                setMobile(false)
            } else {
                setMobile(true)
            }
   

        } 
        setResponsive(setExtended);
         // keep track of window width
         window.addEventListener('resize', () => setResponsive(setExtended))
        return () => setResponsive
    }, [setExtended])
    return { isMobile }
}

export default useResponsive