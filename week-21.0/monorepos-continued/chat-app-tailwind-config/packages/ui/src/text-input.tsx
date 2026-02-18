interface TextInputProps{
  placeholder: string,
  onChange: any
}

export function TextInput({
  placeholder, 
  onChange
}: TextInputProps){
  return(
    <input type="text" placeholder={placeholder} onChange={onChange} className="text-black bg-white rounded-xl p-2 border-2" />
  )
}