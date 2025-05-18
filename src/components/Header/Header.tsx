import React from "react"

export const Header = () => {
    return (
        <header className="bg-roboto-900 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/assest/images/logoAzulia01.png" alt="Azulia logo" className="h-10" />
                    <span className="text-2x1 font-bold">AZULIA</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#hero" className="hover:text-roboto-300 transition">Início</a>
                    <a href="#secao" className="hover:text-roboto-300 transition">Seções</a>
                    <a href="#form" className="hover:text-roboto-300 transition">Formulário</a>
                    <a href="#blog" className="hover:text-roboto-300 transition">Blog</a>
                </nav>
                <button className="md:hidden">Clique aqui</button>
            </div>
        </header>
    )
}