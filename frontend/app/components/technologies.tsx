import TechnologyItem from "./technologyitem";

export default function Technologies() {

    return (
        <>
            <div className='mt-10'>
                <ul className='flex flex-wrap justify-center gap-36 max-w-92'>
                    <TechnologyItem src='/dotnetlogo.png' alt='dotnetlogo' />
                    <TechnologyItem src='/reactlogo.png' alt='reactlogo' />
                    <TechnologyItem src='/vuelogo.png' alt='vuelogo' />
                    <TechnologyItem src='/angularlogo.png' alt='angularlogo' />
                    <TechnologyItem src='/typescriptlogo.png' alt='typescriptlogo' />
                    <TechnologyItem src='/pythonlogo.png' alt='pythonlogo' />
                    <TechnologyItem src='/tailwindlogo.png' alt='tailwindlogo' />
                    <TechnologyItem src='/markdownlogo.png' alt='markdownlogo' />
                </ul>
            </div>
        </>
    )
}