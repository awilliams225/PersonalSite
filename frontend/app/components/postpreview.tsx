import Link from "next/link"
import { Post } from "../types/posttypes"

interface Props {
    post: Post,
    large?: boolean
}

export default function PostPreview(props: Props) {

    return (
        <>
            <Link href={'blog/' + props.post.slug} 
                className={`rounded-md shadow-lg bg-cabaret flex flex-col gap-y-2 p-4 hover:bg-cupid transition-colors ${props.large ? 'col-span-2 row-span-2 h-full' : 'col-span-1 row-span-1 h-full'}`}>
                <div>
                    <h1 className="text-xl font-semibold">{props.post.title}</h1>
                    <p className="text-base">{props.post.abstract}</p>
                    <p className="text-xs text-gray-700">By: {props.post.author}</p>
                    <p className="text-xs text-gray-500">{props.post.publishedOn === null ? 'no date' : props.post.publishedOn.toDateString()}</p>
                </div>
            </Link>
        </>
    )
}