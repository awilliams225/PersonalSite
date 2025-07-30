import Image from 'next/image'

interface Props {
    src: string,
    alt: string
}

export default function TechnologyItem(props: Props) {

    return (
        <>
            <li>
                <Image src={props.src} height='100' width='100' alt={props.alt} />
            </li>
        </>
    )
}