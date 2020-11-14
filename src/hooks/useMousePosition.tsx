import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({x:0, y:0})
    useEffect( () => {
       console.log('开始渲染')
       const mousePostion = (e: MouseEvent) => {
          setPosition({ x:e.clientX, y: e.clientY})
       }
       document.addEventListener('mousemove', mousePostion)
       return () => {
           document.removeEventListener('mousemove', mousePostion)
           console.log('卸载完毕')
       } 
    }, [])
    console.log('渲染前')
    return position
}

export default useMousePosition