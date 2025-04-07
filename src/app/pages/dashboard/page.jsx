import Image from "next/image";
import Link from 'next/link';

export default function dashboard() {
    return (
        <main className="font-[family-name:var(--font-geist-sans)] relative flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 bg-[#FFF]">
            <div className="absolute top-0 left-0 w-full h-20 bg-[#003BA9]">
            <div className="absolute top-0 left-0 w-full h-10 bg-[#EB373A]">
                <Link href="/"> 
                <button type="button" class="text-white bg-[#003BA9] hover:bg-[#003BA9] font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#003BA9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-[#003BA9]">Log-out</button>
                </Link>
            </div>

            </div>
        </main>

        
    );

}