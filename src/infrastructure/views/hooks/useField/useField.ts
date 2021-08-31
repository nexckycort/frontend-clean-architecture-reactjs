import { useState } from 'react'

const useField = ({ type }: any) => {
  const [value, setValue] = useState('')

  const onInput = setValue

  return {
    type,
    value,
    onInput
  }
}

export default useField
