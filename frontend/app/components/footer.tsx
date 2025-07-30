import ProjectList from "./projectlist";
import Socials from "./socials";

export default function Footer() {


    return (
        <>
            <div className="border-t-2 border-black bg-cabaret">
                <div className="py-20 ml-20 flex justify-start gap-x-20">
                    <Socials />
                    <ProjectList />
                </div>
            </div>
        </>
    )
}