import { useRef } from "react"

export const Otp = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()

  return(
    <div className="flex justify-center">
      <SubOtpBox ref = {ref1} onDone = {() => {ref2.current.focus()}} />
      <SubOtpBox ref = {ref2} onDone = {() => {ref3.current.focus()}} />
      <SubOtpBox ref = {ref3} onDone = {() => {ref4.current.focus()}} />
      <SubOtpBox ref = {ref4} onDone = {() => {ref5.current.focus()}} />
      <SubOtpBox ref = {ref5} onDone = {() => {ref6.current.focus()}} />
      <SubOtpBox ref = {ref6} />
    </div>
  )
}

const SubOtpBox = ({ref, onDone}) => {
  return(
    <div>
      <input ref = {ref} onChange={(e) => {onDone()}} type="text" className="m-1 w-[42px] h-[50px] rounded-xl bg-blue-500 outline-none text-center text-white" />
    </div>
  )
}