import Image from "next/image";

export default function SectionFour() {
    return(
        <div className="flex flex-col text-center items-center pt-4 pb-10">
            <div className="py-4">
                <h3 className="text-2xl">Why This?</h3>
            </div>
            <div className="px-3 sm:max-w-[400px] space-y-2 text-gray-8 w-full lg:max-w-[600px]" >
                <p>Just bored I guess. I felt alone and wanted to connect with other people, kind of like find my tribe. Also I was interested in other peoples perspectives, like what is loneliness to them and what causes loneliness.</p>
                <p>Do they too, try to stay busy or distract themselves because they don't want to feel lonely. Am I running away from that feeling. Is loneliness a natural feeling, or is there something wrong with me.</p>
                <p>Fear and love push us into doing many different things. Is the fear of being lonely directing what we do and how we spend our time. Does it affect our peace of mind. Are we controled by it.</p>
                <p>On a side note I thought people would feel less alone, if they heard stories from other people who felt lonely, and to realize they are not the only one, and that many people from all walks of life are somtimes lonely.</p>
            </div>
            <div className="sm:max-w-[400px] lg:max-w-[600px] px-2 py-4">
                <Image alt="path" src="/sectionFourImage.jpg" height={400} width={700} />
            </div>
        </div>
    )
}