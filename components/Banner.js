import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
            src="https://links.papareact.com/0fm"
            fill
            className="object-cover"
            alt="banner"
        />
        <div className="flex flex-col items-center absolute top-1/2 w-full text-center gap-3">
            <p className="text-sm sm:text-lg">Not sure where you go? Perfect.</p>
            <button type="button" className="text-purple-500 bg-white px-10 py-4 shadow-md font-bold rounded-full transition-all hover:shadow-xl active:scale-90"> I&apos;m flexible</button>
        </div>
    </div>
  )
}

export default Banner