import Link from "next/link"

export const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row gap-6 justify-center w-full min-h-14 bg-blue-800 bg-gradient-to-b from-blue-800 from-70% to-slate-900">
                <Link href="/" className="hover:bg-blue-700 h-fit rounded p-2">Home</Link>   
                <Link href="#disc" className="hover:bg-blue-700 h-fit rounded p-2">Discography</Link>
                <Link href="#merch" className="hover:bg-blue-700 h-fit rounded p-2">Merch</Link>
                <Link href="#shows" className="hover:bg-blue-700 h-fit rounded p-2 ">Shows</Link>
            </div>
        </nav>
    )
}