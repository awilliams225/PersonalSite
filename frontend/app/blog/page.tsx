import PostPreview from "../components/postpreview";
import { Matter } from "../types/posttypes";

export default async function Blog() {

    const res = await fetch('http://localhost:3000/api/test', {cache: "default"});
    console.log(res);
    let data: Matter[] = [];
    try {
        const text = await res.text();
        console.log('Response status:', text);
        data = text ? JSON.parse(text) : [];
    } catch (error) {
        console.error('JSON parse error:', error);
        data = [];
    }
    console.log(data);
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-wisppink">
                <div className="z-10 grid grid-cols-4 auto-rows-[300px] w-full max-w-5xl items-start justify-start font-mono text-sm gap-4">
                    { data.map((post, i) => <PostPreview key={post.toString()} post={post.data} large={i === 0} />) }
                </div>
            </main>
        </>
    )
}