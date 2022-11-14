import Image from 'next/image';
import pic from '../../public/image/img1.jpg'
import Link from 'next/link';

export default function Card({title,slug,image,description}:any) {
  return (
    <>
	<div>	
	<div className="flex flex-col xl:flex-row border border-neutral-200 shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
 {!image? 
		
	<Image src={pic} alt=''  
	className="object-cover w-full xl:w-48 h-52 hover:scale-105  transition-all duration-200 ease-in-out"
          height={250}
          width={200}
          priority
          quality={100}
        />
 :
 <Image src={`https://shezan.pythonanywhere.com/media/${image}`} alt=''  
 className="object-cover w-full xl:w-48 h-52 hover:scale-105  transition-all duration-200 ease-in-out"
          height={250}
          width={200}
          priority
          quality={100}
        />}
	<div className="relative p-4 bg-neutral-50">
	  <h3 className="text-base  font-bold text-gray-700">
		{title}
	  </h3>
	  <span className="px-1 py-1 bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 rounded-full text-xs font-semibold text-yellow-600">
	  economy
  </span>
	  <p className="mt-4 text-sm text-gray-600">
		{description}
	  </p>
	  <time className="text-gray-600 text-xs" dateTime="2021-11-06T08:29:56+00:00">
			November 6, 2021
		  </time>
		  <div>
		  <a href="#" className="inline-block mt-6 text-sm text-neutral-500 hover:text-neutral-400">
		Read More
	  </a>
		  </div>
	</div>
  </div>
</div>
	



{/* {data.posts.map((post:any)=>(
	<div key={post.id}>
  <div className="flex flex-col xl:flex-row border border-neutral-200 shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
 {!post.image? 
		
	<Image src={pic} alt=''  
	className="object-cover w-full xl:w-48 h-52 hover:scale-105  transition-all duration-200 ease-in-out"
          height={250}
          width={200}
          priority
          quality={100}
        />
 :
 <Image src={`https://shezan.pythonanywhere.com/media/${post.image}`} alt=''  
 className="object-cover w-full xl:w-48 h-52 hover:scale-105  transition-all duration-200 ease-in-out"
          height={250}
          width={200}
          priority
          quality={100}
        />}
	<div className="relative p-4 bg-neutral-50">
	  <h3 className="text-base  font-bold text-gray-700">
		{post.title.slice(0,10)}
	  </h3>
	  <span className="px-1 py-1 bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 rounded-full text-xs font-semibold text-yellow-600">
	  economy
  </span>
	  <p className="mt-4 text-sm text-gray-600">
		{post.description.slice(0, 30)}
	  </p>
	  <time className="text-gray-600 text-xs" dateTime="2021-11-06T08:29:56+00:00">
			November 6, 2021
		  </time>
		  <div>
		  <a href="#" className="inline-block mt-6 text-sm text-neutral-500 hover:text-neutral-400">
		Read More
	  </a>
		  </div>
	</div>
  </div>
</div>
	))} */}
	{/* </div> */}
     
    </>
  )
}




























