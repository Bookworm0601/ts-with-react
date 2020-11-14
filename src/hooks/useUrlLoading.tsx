import { useState, useEffect } from 'react'
import axios from 'axios'

const useUrlLoading = (mockUrl: string, deps: any[] = []) => {
    const [urlObj, setUrlObj] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    console.log(mockUrl)
    useEffect(() => {
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
            setUrlObj(result.data)
            setLoading(false)
        })
    }, deps)
    return [urlObj, loading]
}
export default useUrlLoading