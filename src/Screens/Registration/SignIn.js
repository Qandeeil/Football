import React, { useEffect } from 'react'
import SectionLeft from '../../Components/Registration/SignIn/SectionLeft/SectionLeft'
import Form from '../../Components/Registration/SignIn/SectionRight/Form'
import '../../Styles/Registration/SignIn/SignIn.scss'
import useLocalStorage from 'use-local-storage'

const SignIn = () => {
  const [dataAccount, setDataAccount] = useLocalStorage('DataAccount')
  useEffect(() => {
    if(dataAccount) {
      window.location = '/'
    }
  }, [dataAccount])

  return (
    <div className='signIn'>
      <SectionLeft />
      <Form />
    </div>
  )
}

export default SignIn