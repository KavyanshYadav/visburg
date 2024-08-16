import Sidebar from "../components/Sidebar"


const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className="flex w-[100vw] h-[100vh]    ">
        <div className="bg-[#202020] flex-1">
            <Sidebar/>
        </div>
        <div className="bg-[#191919] flex-[5]">

            {children}
        </div>
        </div>
  )
}

export default layout