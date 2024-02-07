import React, { useEffect } from 'react'

type Props = {
   
}

function aisehi(){
    let str = ''
    for (let index = 0; index < 10000000; index++) {
        str+=index;
        
    }
}

 function Child({}: Props) {
    aisehi()

    useEffect(()=>{
        console.log("Compoennt load")
    },[])
  return (
    <div>Child  -</div>
  )
}

export default React.memo(Child)