import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
                <Image
                    className="self-center dark"
                    src="/Logo_Fix.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="list-inside text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] ">
                    <li className="mb-2 tracking-[-.01em] text-center">
                        Colégio Estadual Carlina Barbosa de Deus.{" "}
                    </li>
                    <li className="tracking-[-.01em] text-center">
                        Projeto de Extensão -
                    </li>
                    <a
                        className="block text-center gap-2 hover:underline hover:underline-offset-4 hover:decoration-[#FFF] "
                        href="https://www.unirios.edu.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        UniRios.
                    </a>
                </ol>

                <div className="self-center items-center flex gap-2">
                    <Link
                        className="hover:text-white rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap- hover:bg-[#383838] dark:hover:bg-[#EB373A] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="/pages/login/diretoria">Diretoria</Link>
                    <Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#003BA9] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="/pages/login/professor">Professor</Link>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.instagram.com/colegiocarlina/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/Instagram.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Instagram
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.bing.com/ck/a?!&&p=0538f1790797b2955a48a4e5d279446527748644717a1e86920583061443e9f5JmltdHM9MTc0MjUxNTIwMA&ptn=3&ver=2&hsh=4&fclid=27b5f247-9bc4-6a6a-3ed9-e7069a936b16&u=a1L21hcHM_Jm1lcGk9MTI3fn5Vbmtub3dufkFkZHJlc3NfTGluayZ0eT0xOCZxPUNvbGVnaW8lMjBFc3RhZHVhbCUyMGRlJTIwMSUyMGUlMjAyJTIwR3JhdXMlMjBDYXJsaW5hJTIwQiUyMGRlJTIwRGV1cyZzcz15cGlkLllONzk5M3gzMDY0NDc4Mzc5MTM4ODYwODc2JnBwb2lzPS05LjQwNTc4MjY5OTU4NDk2MV8tMzguMjE0NzEwMjM1NTk1N19Db2xlZ2lvJTIwRXN0YWR1YWwlMjBkZSUyMDElMjBlJTIwMiUyMEdyYXVzJTIwQ2FybGluYSUyMEIlMjBkZSUyMERldXNfWU43OTkzeDMwNjQ0NzgzNzkxMzg4NjA4NzZ-JmNwPS05LjQwNTc4M34tMzguMjE0NzEmdj0yJnNWPTEmRk9STT1NUFNSUEw&ntb=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Localização →
                </a>
            </footer>
        </div>
    );
}