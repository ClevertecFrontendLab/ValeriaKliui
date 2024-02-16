import { useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
    const savedData = localStorage.getItem(key)
    const parsedData = savedData != null ? JSON.parse(savedData) : null
    const [value, setValue] = useState(parsedData)

    useEffect(() => {
        // console.log('value', value)
        if (value != null) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        // if (value == null && savedData) {
        //     localStorage.removeItem(key)
        // }
        // window.addEventListener('unload', function () {
        //     !shouldBeRemembered && localStorage.removeItem(key)
        // })


    }, [key, value])

    return [value, setValue]
}