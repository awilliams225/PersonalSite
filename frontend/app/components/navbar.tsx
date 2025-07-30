import Link from 'next/link'

export default function Navbar() {


    return (
        <>
            <div className='h-20 w-full sticky top-0 z-50 bg-cornflowerlilac border-dcfl'>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex justify-between items-center h-full'>
                        <Link href='/'><h1 className='text-2xl font-bold'>Home</h1></Link>
                        <ul className='flex gap-x-6'>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link href='/portfolio'>Portfolio</Link>
                            </li>
                            <li>
                                <Link href='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}