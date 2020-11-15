import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = ()=> {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    //1.普通同步数据的使用
    const likeRef = useRef(0)
    //2.模拟钩子函数
    const isUpdate = useRef(false)
    //3.接收成为dom的ref从而来操作dom
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(ThemeContext)
    const style = {
        background: theme.background,
        color: theme.color
    }
    // 每次页面渲染以后都更新
    useEffect(() => {
        document.title = `点赞了${like}次`
    })
    useEffect(() => {
        // 模拟钩子函数
        if(isUpdate.current) {
            // console.log('update!!!')
        }else {
            console.log('初次加载')
            isUpdate.current = true
        }
    })
    // 当组件加载完后，聚焦focus
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })
    function handleClick() {
        window.setTimeout(() => {
            alert(`第${likeRef.current}次点击`)
        }, 2000)
    }
    return (
        <>
           <input type="text" ref={domRef} />
           {/* likeRef值不会随着值得改变去触发dom的重新渲染 */}
            <button style={style} onClick={() => { setLike(like + 1); likeRef.current ++ } }>
                {like} 点赞
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? 'ON' : 'OFF'}
            </button>
            <button onClick={()=> {handleClick()}}>打开alert</button>
        </>
    )
}

export default LikeButton