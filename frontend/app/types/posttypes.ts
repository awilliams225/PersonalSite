type Post = {
    title: string,
    abstract: string,
    tags: string[],
    author: string,
    slug: string,
    publishedOn: Date
}

type Matter = {
    content: string,
    data: Post
}

export type {
    Post,
    Matter
};