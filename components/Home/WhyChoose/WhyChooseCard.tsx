import Image from "next/image"

type Props = {
    src: string,
    title: string,
    label: string,
}

const WhyChooseCard = ({src, title, label} : Props) => {
  return (
      <div>
          <Image src={src} alt={title} width={80} height={80} className="object-contain mx-auto" />
          
          <h1 className="text-center my-5 font-semibold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-600 text-center font-medium mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, obcaecati? Lorem, ipsum.</p>

          <p className="text-center font-semibold text-blue-900 hover:text-blue-950 cursor-pointer hover:underline text-base w-fit mx-auto transition-all duration-200">{label} {" "}
              
              &#8594;
          </p>

      </div>
  );
}

export default WhyChooseCard;



/*
 <div className="flex flex-col items-center justify-center gap-6 rounded bg-blue-50 p-5 w-full">
   <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
     <Image src={src} alt={src} width={60} height={60} />

     <div className="w-full">
       <p className="w-full">{title}</p>
     </div>
   </div>
   <Link href="/">{label}</Link>
</div>;
 */