import { useState, useEffect } from 'react'
import axios from 'axios'

const useUrlLoading = (mockUrl: string, deps: any[] = []) => {
    const [urlObj, setUrlObj] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(mockUrl).then(result => {
            setUrlObj(result.data)
            setLoading(false)
        })
    }, deps)
    return [urlObj, loading]
}
export default useUrlLoading