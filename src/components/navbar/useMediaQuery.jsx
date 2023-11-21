import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches)
        }

        const listener = () => {
            setMatches(media.matches)
        }
        media.addEventListener(listener);
        return () => media.removeEventListener(listener)
    }, [matches, query])

    return matches;
}

