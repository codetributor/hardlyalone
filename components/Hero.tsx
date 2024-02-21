export default function Hero() {
    return(
        <main className="flex justify-center my-5 px-2">
            <div className="flex flex-col items-center space-y-2">
                <div>
                    <h3 className="font-bold text-2xl">ALL ONE COMMUNITY</h3>
                </div>
                <div className="text-gray-400 flex items-center space-x-1">
                    <p>loneliness project | worldwide</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                    </div>
                </div>
                <div className="text-center max-w-[500px]">
                    <p>Over 60% of adults in the United States report feeling lonely. Young adults between the ages of 18 and 22 are the loneliest age group. People who feel socially isolated are more likely to engage in unhealthy behaviors like smoking and drinking alcohol excessively.</p>
                </div>
            </div>
        </main>
    );
}