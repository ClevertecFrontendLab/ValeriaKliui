import { useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
    const savedData = localStorage.getItem(key)
    const parsedData = savedData != null ? JSON.parse(savedData) : null

    const [value, setValue] = useState(parsedData)

    useEffect(() => {
        if (value != null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value])

    return [value, setValue]
}