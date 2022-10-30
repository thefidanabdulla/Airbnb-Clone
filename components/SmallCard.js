import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl transition transfrorm duration-200   ease-out cursor-pointer hover:bg-gray-100 hover:scale-105 ">
      <div>
        <Image
            src={img}
            alt="card capture"
            className="relative object-cover rounded-lg"
            width={64}
            height={64}        
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard