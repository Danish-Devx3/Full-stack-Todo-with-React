// 

import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountAtom } from './Store/Atoms/CountAtom'

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <CountRenderer/>
        <ButtonRenderer/>
        <CheckNum/>
      </RecoilRoot>
    </div>
  )
}

const CountRenderer = () =>{
  const count = useRecoilValue(CountAtom);
  return <div>
    {count}
  </div>
}

function ButtonRenderer(){
  const setCount = useSetRecoilState(CountAtom);
  function UpdateValue(){
    return setCount(c=>c+1)
  }
  return <button onClick={UpdateValue}>
    Update
  </button>
}

function CheckNum(){
  const count = useRecoilValue(CountAtom);
  console.log(count)
  
  return <div>
    {count%2==0?'Its even':'Its odd'}
  </div>
}

export default App
