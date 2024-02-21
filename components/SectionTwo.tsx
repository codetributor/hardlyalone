import Image from "next/image";

export default function SectionTwo() {
    return(
        <div className="px-2 py-5 flex flex-col items-center space-y-5">
            <div>
                <h3 className="text-2xl">My Mission</h3>
            </div>
            <div className="text-center max-w-[800px]">
                <p>to admit that sometimes I am alone and it is hard, but I realize there are others who might be alone too, like me. It is my mission to see them. So in a way I am not alone.</p>
            </div>
            <div>
                <Image src="/sectionTwoImage.jpg" height={600} width={600} alt="heart" />
            </div>
        </div>
    );
}