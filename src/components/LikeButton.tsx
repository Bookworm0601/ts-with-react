import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = ()=> {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    // 每次页面渲染以后都更新
    useEffect(() => {
        document.title = `点赞了${like}次`
    })
    return (
        <>
            <button onClick={() => { setLike(like + 1) } }>
                {like} 点赞
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? 'ON' : 'OFF'}
            </button>
        </>
    )
}

export default LikeButton