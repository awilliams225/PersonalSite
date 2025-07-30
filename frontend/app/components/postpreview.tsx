import Link from "next/link"

type Post = {
    title: string,
    abstract: string,
    author: string,
    slug: string,
    publishedOn: Date
}

interface Props {
    post: Post
}

export default function PostPreview(props: Props) {

    return (
        <>
            <Link href={'blog/' + props.post.slug} className="shadow-lg bg-cabaret flex flex-col gap-y-2 p-4 hover:bg-cupid transition-colors">
                <div>
                    <h1 className="text-2xl">{props.post.title}</h1>
                </div>
                <div>
                    <p className="text-sm">{props.post.abstract}</p>
                    <p className="text-xs">{props.post.author}</p>
                </div>
                <div>
                    <p className="text-xs">{props.post.publishedOn === null ? 'no date' : props.post.publishedOn.toDateString()}</p>
                </div>
            </Link>
        </>
    )
}