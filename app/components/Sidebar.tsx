"use client"
import { useAuth } from "@/context/AuthContex"
import { FaceIcon } from "@radix-ui/react-icons"
import { Avatar, Button } from "@radix-ui/themes"

interface SideButtonType {
    text:string | null| undefined,
    icon:React.ReactElement| string 
}

const SideButton:React.FC<SideButtonType> = ({text="none",icon,...props}) =>{
    return(
        <Button {...props}  className="bg-transparent  w-full hover:bg-black transition-all justify-start "  color="indigo">{icon}{text}</Button>
    )
}

const Sidebar = () => {
    const {user} = useAuth()
    console.log(user?.displayName)
  return (
    <div className="flex p-3 pt-1 pb-0 flex-col h-full">
    <SideButton text={user?.displayName} icon={<Avatar size="1" src={user?.photoURL || ""} fallback={""}></Avatar>} />
    <div className="flex-1 text-[#9b9b9b]">
        <SideButton text="search" icon="d" />
        <SideButton text="search" icon="d" />
        <SideButton text="search" icon="d" />
        <SideButton text="search" icon="d" />
    </div>
    <div className="mt-auto mb-8 text-blue-300">
       
        <SideButton text="Setting" icon={<FaceIcon/>} />
        <SideButton text="About" icon="d" />
    </div>
</div>

  )
}

export default Sidebar