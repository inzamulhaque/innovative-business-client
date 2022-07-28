import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Store/reducer/counterSlicer'


const TestCompo = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <span>{count}</span>
    </div>
  )
}

export default TestCompo