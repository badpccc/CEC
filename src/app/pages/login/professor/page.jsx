import Image from "next/image";
import Link from "next/link";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ["latin"]});
export default function professor() {
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
                <h1 className="font-bold text-2xl">Professor</h1>
                <form className="flex flex-col justify-center items-center" action="">
                    <input
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="E-mail: Example@gmail.com" type="text" name="" id=""/>
                    <input
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="Senha" type="text" name="" id=""/>
                    <Link href="/pages/dashboard">
                        <button className="">Login</button>
                    </Link>
                    <Link href="/pages/Registro/professor"> 
                        <button>Registre-se</button>
                    </Link>
                </form>
                <Link href="/pages/login/RecuperacaoSenha">Esqueceu a senha?</Link>
            </div>
        </main>
    );
}