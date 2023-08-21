import Link from "next/link"

export default function SectionComponent() {
    return (
        <div className="flex min-h-[500px] max-w-screen items-center justify-between md:p-8 pt-8 container flex-col gap-16">
            <h1 className="text-3xl md:text-3xl font-extrabold text-slate-700">SKILLS</h1>

            <div className="flex gap-4 items-center justify-center flex-wrap text-white w-full">
                <div className="bg-red-400 w-full sm:w-[200px] h-[200px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    HTML
                </div>
                <div className="bg-green-600 w-full sm:w-[200px] h-[200px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    CSS
                </div>
                <div className="bg-yellow-600 w-full sm:w-[200px] h-[200px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    JAVASCRIPT
                </div>
                <div className="bg-blue-600 w-full sm:w-[200px] h-[200px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    REACT
                </div>
            </div>

            <h1 className="text-3xl md:text-3xl font-extrabold text-slate-700">SOCIAL</h1>
            <div className="flex gap-4 items-center justify-center flex-wrap text-white w-full">
                <div className="bg-red-400 w-full sm:w-[150px] h-[150px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    Instagram
                </div>
                <div className="bg-green-600 w-full sm:w-[150px] h-[150px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    Twitter
                </div>
                <div className="bg-blue-600 w-full sm:w-[150px] h-[150px] shadow-md hover:shadow-lg rounded-md items-center flex justify-center font-extrabold text-[2ch] hover:scale-90 ease-in-out transition">
                    <Link href="https://facebook.com">Facebook</Link>
                </div>
            </div>
        </div>
    )
}
