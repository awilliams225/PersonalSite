import Link from 'next/link'

export default function ProjectList() {

    return (
        <>
            <ul>
                <h1 className='text-lg'><b>Recent Projects:</b></h1>
                <li className='pb-1'><Link className="hover:text-gray-800" href='/'>Home</Link></li>
            </ul>
        </>
    )
}