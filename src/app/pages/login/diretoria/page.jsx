import Image from "next/image";
import Link from "next/link";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ["latin"]});
export default function diretoria() {
    return (
        <main className={`flex flex-row w-screen h-screen ${roboto.className}`}>
            <div className="w-screen h-screen">
                <Image
                    className="w-full h-auto"
                    src="/images.jpg"
                    alt="Logo"
                    width={180}
                    height={38}
                />
            </div>
            <div className="flex flex-col w-screen h-screen justify-center items-center">
                <Image
                    src="/Logo_Fix.svg"
                    alt="Logo"
                    width={180}
                    height={38}
                />
                <h1 className="font-bold text-2xl">DIRETORIA</h1>
                <form className="flex flex-col justify-center items-center" action="">
                    <input
                        className="text-center text-white block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="E-mail:" type="text" name="" id=""/>
                    <input
                        className="text-center text-white block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="Senha" type="password" name="" id=""/>
                    <Link href="/pages/dashboard">
                        <button className="mt-2 hover:text-white rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap- hover:bg-[#383838] dark:hover:bg-[#EB373A] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">Login</button>
                    </Link>
                    <Link href="/pages/Registro/diretoria"> 
                        <button className="mt-2 hover:text-white rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap- hover:bg-[#383838] dark:hover:bg-[#EB373A] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">Registre-se</button>
                    </Link>
                </form>
                    <Link href="/pages/login/RecuperacaoSenha">
                        <button className="mt-2 hover:text-white rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap- hover:bg-[#383838] dark:hover:bg-[#EB373A] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">Esqueceu a senha?</button>
                    </Link>
            </div>
        </main>
    );
}