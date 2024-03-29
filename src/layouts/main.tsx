
import { ReactNode } from "react"

import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"

interface Props {
    children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
    
    return (

        <main className="bg-primary w-screen h-screen flex flex-row">
            
            <Navbar />
            
            <section className="bg-primary w-full h-full flex flex-col p-8">
                <Header />
                { children }
            </section>

        </main>
    )
}
