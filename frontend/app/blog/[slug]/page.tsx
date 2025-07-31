import * as fs from 'fs';
import * as path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import './articlestyle.css';

export default async function Article({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    const content = fs.readFileSync(path.join(process.cwd(), '/app/blog/posts/', slug + '.mdx'), 'utf-8');
    const data = await compileMDX<{ title: string }>({
        source: content,
        options: {
            parseFrontmatter: true
        }
    })
    console.log(data.content);

    return (
        <>
            <main className="flex min-h-screen flex-col items-center py-12 bg-wisppink">
                <h1 className="rounded-md text-4xl leading-normal text-center bg-cabaret font-bold mb-10 p-4">
                    {data.frontmatter.title}
                </h1>
                <div className="z-10 rounded-md min-h-screen w-full max-w-3xl items-start lg:flex flex-col bg-cabaret p-10">
                    <p className="leading-loose text-lg text-left mb-10">
                        {data.content}
                    </p>
                </div>
            </main>
        </>
    )

}