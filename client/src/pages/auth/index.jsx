import { Victory } from "@/assets/victory.svg"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Background } from "@/assets/login2.png"

const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async () => {
        
    }
    const handleSignup = async () => {
        
    }

    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vh] lg:w-[70] xl:w-[60vw] round-3xl grid xl:grid-cols-2">
                <div className="flex flex-col gap-10 items-center justify-center"> 
                    <div className="flex items-centere justify-center flex-col">
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                            <img src={Victory} alt="victory-image" className="h-[100px]" />
                        </div>
                        <p className="font-medium text-center">Fill in the details to get started with best Chat App</p>
                    </div>
                    <div className="flex items-center justify-centr w-full">
                        <Tabs className="w-3/4">
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger value="login" 
                                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple500 p-3 transition-all duration-300"
                                >
                                    LogIn
                                </TabsTrigger>
                                <TabsTrigger value="signup" 
                                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple500 p-3 transition-all duration-300"
                                >
                                    SignUp
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                                <Input 
                                 placeholder="Email" 
                                 type="email" 
                                 className="rounded-full p-6" 
                                 value={email} 
                                 onChange={e=>setEmail(e.target.value)} 
                                />
                                <Input 
                                 placeholder="Password" 
                                 type="password" 
                                 className="rounded-full p-6" 
                                 value={password} 
                                 onChange={e=>setPassword(e.target.value)} 
                                />
                                <Button className="rounded-full p-6" onClick={handleLogin}>
                                    LogIn
                                </Button>
                            </TabsContent>
                            <TabsContent className="flex flex-col gap-5" value="login">
                                <Input 
                                 placeholder="Email" 
                                 type="email" 
                                 className="rounded-full p-6" 
                                 value={email} 
                                 onChange={e=>setEmail(e.target.value)} 
                                />
                                <Input 
                                 placeholder="Password" 
                                 type="password" 
                                 className="rounded-full p-6" 
                                 value={password} 
                                 onChange={e=>setPassword(e.target.value)} 
                                />
                                <Input 
                                 placeholder="Confirm Password" 
                                 type="Password" 
                                 className="rounded-full p-6" 
                                 value={confirmPassword} 
                                 onChange={e=>setConfirmPassword(e.target.value)} 
                                />
                                <Button className="rounded-full p-6" onClick={handleSignup}>
                                    SignUp
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img src={Background} alt="background-image-login" className="hidden xl:flex justify-center items-center" />
                </div>
            </div>
        </div>
    )
}

export default Auth