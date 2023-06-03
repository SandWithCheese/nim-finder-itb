import Link from "next/link"

export default function Navbar() {
    return (
    <div className="flex justify-end items-center py-8">
        <Link className="mr-auto text-2xl sm:text-4xl" href="/">Riemann NIM Finder ITB</Link>
        <nav>
            <ul className="flex text-xl">
                <li><Link href="/about">About</Link></li>
                <li className="ml-3 sm:ml-8"><Link href="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </div>
    )
}