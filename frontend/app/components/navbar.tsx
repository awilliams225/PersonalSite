import Link from 'next/link'

export default function Navbar() {


    return (
        <>
            <div className='h-20 w-full sticky top-0 z-50 bg-cornflowerlilac'>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex items-center h-full'>
                        <div className='flex justify-between items-baseline w-full'>
                            <Link href='/'>
                                <h1 className='text-2xl font-bold mb-0 leading-none'>Home</h1>
                            </Link>
                            <ul className='flex gap-x-6 text-lg font-semibold leading-none'>
                                <li>
                                    <Link className='leading-none' href='/contact'>Contact</Link>
                                </li>
                                <li>
                                    <Link className='leading-none' href='/portfolio'>Portfolio</Link>
                                </li>
                                <li>
                                    <Link className='leading-none' href='/blog'>Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}