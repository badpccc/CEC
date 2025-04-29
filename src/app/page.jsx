import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-screen h-screen flex flex-row items-center justify-evenly">


            <div>
                <Image src="/Logo_Fix.svg" width={250} height={250}/>
                <p>! Texto Explicativo !</p>
            </div>

            <div className="flex flex-col items-center">
                <form className="flex flex-col items-center">
                    <h1 className="self-center text-xl font-bold">Login</h1>
                    <div className="flex flex-col">
                    
                        <label className="py-1">
                            E-mail
                        </label>
                        <input className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="name@mail.com" />
                        <p id="helper-text-explanation" className="mt-2 text-xs text-gray-500 dark:text-gray-400">Nós nunca vamos compartilhar suas informações. Leia nossa <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Política de Privacidade</a>.</p>
                        <label className="py-1">
                            Senha
                        </label>
                        <input className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="*******" />
                        <p className="flex items-start mt-2 text-xs text-slate-400">Use ao menos 8 caracteres, um maiúsculo, um minúsculo e um número.</p>
                    </div>


                    <div>
                        <button className="bg-sky-500 hover:bg-sky-700 rounded-full text-white font-semibold py-2 px-4 mx-1 my-2">Login</button>
                        <button className="bg-sky-500 hover:bg-sky-700 rounded-full text-white font-semibold py-2 px-4 mx-1 my-2">Registrar</button>
                    </div>

                </form>
                
                <div>
                    <Link className="hover:underline decoration-sky-500" href="#">Esqueci a Senha</Link>
                </div>
            </div>

        </main> 
    );
}