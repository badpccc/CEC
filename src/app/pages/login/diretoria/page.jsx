import Image from "next/image";
import Link from "next/link";

export default function diretoria() {
    return (
        <main>
            <div>
                <Image
                    src="/images.jpg"
                    alt="Logo"
                    width={180}
                    height={38}
                />
            </div>
            <div>
                <Image
                    src="/Logo_Fix.svg"
                    alt="Logo"
                    width={180}
                    height={38}
                />
                <h1>Professor</h1>
                <form action="">
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