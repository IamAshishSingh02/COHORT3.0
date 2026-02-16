interface TextInputProps{
  placeholder: string,
  onChange: any
}

export function TextInput({
  placeholder, 
  onChange
}: TextInputProps){
  return(
    <input type="text" placeholder={placeholder} onChange={onChange} />
  )
}