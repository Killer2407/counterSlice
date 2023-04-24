import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, selectValue} from '../../slices/counterSlice'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const count = useSelector(selectValue)
  const dispatch = useDispatch();


  return (
    <div>
      <main>
        <h1>The Value of Counter: {count}</h1>
        <button onClick={()=> dispatch(increment())} className='w-full h-10 bg-green-400/50'>Increment</button>
        <button onClick={()=> dispatch(decrement())} className='w-full h-10 bg-red-400/50'>Decrement</button>
      </main>
    </div>
  )
}
