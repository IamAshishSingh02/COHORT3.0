import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}){
  return(
    <div>
      <div className="border-b p-2">Header</div>
      <div>{children}</div>
      <div className="border-t p-2">Footer</div>
    </div>
  )
}