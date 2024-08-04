import React, { useEffect } from 'react'
import { store } from '../redux/store'

const Email = () => {
    const storeApp=store.subscribe(()=>{
        console.log("STORE in EMAIL DISPARADO.....")
    }) ;
    useEffect(() => {
        
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Email
