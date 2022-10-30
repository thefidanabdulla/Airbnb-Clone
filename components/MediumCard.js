import Image from "next/image";

const MediumCard = ({img, title}) => {
  return (
    <div className="flex-shrink-0 cursor-pointer hover:scale-105 transform transition duration-300  ease-out">
      <div className="relative">
        <Image 
          src={img}
          width={320}
          height={320}
          alt="live anywhere capture"
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard