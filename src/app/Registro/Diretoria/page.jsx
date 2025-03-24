import Image from "next/image";
import Link from "next/link";

export default function professor() {
    return (
        <main className="flex flex-row w-screen h-screen">
            <div className="w-screen h-screen">
                <Image
                    src="/Logo_Fix.svg"
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
                <h1>Professor</h1>
                <form className="flex flex-col justify-center items-center" action="">
                    <input type="text" name="" id=""/>
                    <input type="text" name="" id=""/>
                    <button>Login</button>
                    <button>Registre-se</button>
                </form>
                <Link href="/RecuperacaoSenha">Esqueceu a senha?</Link>
            </div>
        </main>
    );
}