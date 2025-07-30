import PostPreview from "../components/postpreview";

type Matter = {
    content: string,
    data: Post
}

type Post = {
    title: string,
    abstract: string,
    author: string,
    slug: string,
    publishedOn: Date
}

export default async function Blog() {

    const res = await fetch('http://localhost:3000/api/test', {cache: "default"});
    console.log(res);
    const data: Matter[] = JSON.parse(await res.text());
    console.log(data);
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-wisppink">
                <div className="z-10 grid grid-cols-4 w-full max-w-5xl items-start justify-start font-mono text-sm">
                    { data.map((post) => <PostPreview key={post.toString()} post={post.data} />) }    
                </div>
            </main>
        </>
    )
}