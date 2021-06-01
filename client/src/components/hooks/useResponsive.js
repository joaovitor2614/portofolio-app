import React, { useEffect } from 'react'


const useResponsive = (setExtended) => {
    useEffect(() => {
        const setResponsive = () => {
            // show items or not according to screen size
            return window.innerWidth < 900 ? setExtended(false)
            : setExtended (true)
           
        }
        setResponsive(setExtended);
         // keep track of window width
         window.addEventListener('resize', () => setResponsive(setExtended))
        return () => getResponsive
    }, [setExtended])
}

export default useResponsive