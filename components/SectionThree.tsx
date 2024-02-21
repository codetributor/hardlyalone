import Image from "next/image";

export default function SectionThree() {
    return(
        <div className="bg-slate-300 py-4 flex text-center items-center flex-col">
            <div className="py-2">
                <h3 className="text-2xl">The Story</h3>
            </div>
            <div className="px-3 sm:max-w-[400px] space-y-2 text-gray-8 w-full lg:max-w-[600px]">
                <p>The Devil is speaking...that was what I heard or what I thought I heard. It was not that internal voice where you kind to just speak to yourself. This was an external voice coming from outside me.</p>
                <p>It turns out I live with Schizophrenia. Just the word schizophrenia is scary and misunderstood, but either way for the next 11 years was filled with only struggles. I felt alone, watching all my friends move forward with their lives, having a spouse and kids.</p>
                <p>But one day I was talking with a friend and mentioned my inability to be alone, and he simply said me too, and he has a wife and kids. So then I realized it was more than a Schizophrenia thing, or a success thing, everyone has felt lonely at one point or another.</p>
            </div>
            <div className="sm:max-w-[400px] lg:max-w-[600px] px-2 py-4">
                <Image alt="path" src="/sectionThreeImage.jpg" height={400} width={700} />
            </div>
        </div>
    )
}