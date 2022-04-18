import React, {useEffect, useState} from 'react'
import ComponentFilho from './ComponenteFilho'

export default function ComponentePai(props) {
    const [filho, setFilho] = useState(0)
    const [olho, setOlho] = useState()

    useEffect(()=>{
        setTimeout(()=>{
            setFilho(1)
        }, 5000);

        if(filho > 0){
            setOlho("castanho")
        }
    })
    if(filho === 0){
        return <div>Não sou Pai</div>
    }
    return  <ComponentFilho olho={olho} />
}


