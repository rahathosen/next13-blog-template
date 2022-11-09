import Image from 'next/image';
import blogpic from '../public/image/img1.jpg'
export default function card() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
	<Image
		 className="object-cover w-full h-48"
		 src={blogpic}
		 alt="Flower and sky"
         priority
         placeholder="blur"
         quality={100}
		 />

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		Title text
	  </h3>
    <div>
    <span className="px-2 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-full text-xs font-semibold text-yellow-600">
	Tech
  </span>
    </div>
	  <p className="mt-4 text-base md:text-lg text-gray-600">
		Some text some text
	  </p>
	</div>
  </div>

  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
	<Image
		 className="object-cover w-full h-48"
		 src={blogpic}
		 alt="Flower and sky"
         priority
         placeholder="blur"
         quality={100}
		 />

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		Title text
	  </h3>
      <div>
    <span className="px-2 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-full text-xs font-semibold text-yellow-600">
	Tech
  </span>
    </div>
	  <p className="mt-4 text-base md:text-lg text-gray-600">
		Some text some text
	  </p>
	</div>
  </div>

  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
	<Image
		 className="object-cover w-full h-48"
		 src={blogpic}
		 alt="Flower and sky"
         priority
         placeholder="blur"
         quality={100}
		 />

	<div className="relative p-4">
	  <h3 className="text-base md:text-xl font-medium text-gray-800">
		Title text
	  </h3>
      <div>
    <span className="px-2 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-full text-xs font-semibold text-yellow-600">
	Tech
  </span>
    </div>
	  <p className="mt-4 text-base md:text-lg text-gray-600">
		Some text some text
	  </p>
	</div>
  </div>
</div>
    </div>
  )
}
