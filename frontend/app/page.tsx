import Image from "next/image"
import Technologies from "./components/technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-wisppink">
      <div className="z-10 max-w-5xl items-center justify-between text-sm lg:flex flex-col">
        <div className="w-full justify-around flex-row flex my-20">
          <h1 className="text-4xl font-extrabold leading-normal">
            Hello,
            <br />
            I&apos;m Ashton Williams
            <br />
            A Web-Developer
          </h1>
          <Image className="rounded-full" src="/sexyguy_cropped.png" height="500" width="500" alt="Picture of me :)" />
        </div>
        <div className="w-full justify-around flex-row flex my-80">
          <Image className="rounded-full mr-20" src="/eyebrow_cropped.png" height="500" width="500" alt="Picture of me :)" />
          <div className="m-10">
            <h1 className="text-4xl font-extrabold leading-normal">
              Who am I?
            </h1>
            <p className="text-lg tracking-normal leading-relaxed">
              I&apos;m a self-driven and creative web-developer who can create beautiful front-ends and optimal back-ends in order to bring your ideas to light. I work with many different in-the-now technologies, from flexible frameworks to crisp content management systems.
              I also practice many hobbies. Language, guitar, climbing, game collecting - it&apos;s all my passion.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl">Technologies</h1>
          <Technologies />
        </div>
      </div>
    </main>
  );
}
