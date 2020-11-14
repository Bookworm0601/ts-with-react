import React, { useState, useEffect } from 'react'

const MouseTrack: React.FC = () => {
    const [poistion, setPosition] = useState({ x:0, y:0 })
    useEffect(() => {
        console.log('添加事件')
        // MouseEvent是TS内置的事件对象类型
        const mousePosition = (e: MouseEvent) => {
            console.log('inner')
            setPosition({ x:e.clientX, y: e.clientY})
        }
        document.addEventListener('click', mousePosition)
        // 1.react 会在执行当前effect的时候对上一次的effect进行清除
        return () => {
            console.log('清除事件')
            document.removeEventListener('click', mousePosition)
        }
        // useEffect的第二个数组为需要检测的值，当数组中有值时，该值改变才执行useEffect，否则只有加载和卸载时才执行
    }, [])
    console.log('渲染之前') // inner ->渲染之前->清除事件->添加事件
    return (
      <p>当前坐标X:{ poistion.x }Y: { poistion.y }</p>
    )
}

export default MouseTrack