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
                <div className="z-10 w-full max-w-5xl items-center font-mono lg:flex flex-col bg-cabaret">
                    <div className="w-full justify-around flex-row flex my-10">
                        <h1 className="text-4xl leading-normal text-center">
                            { data.frontmatter.title }
                        </h1>
                    </div>
                </div>
                <div className="z-10 w-full max-w-5xl items-start font-mono lg:flex flex-col bg-cabaret px-4">
                    <div>
                        <p className="leading-loose text-sm text-left mb-10 ml-8">
                            { data.content}
                        </p>
                    </div>
                </div>
            </main >
        </>
    )

}