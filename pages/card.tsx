import React from 'react'

export default function card() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
	<img
		 className="object-cover w-full h-48"
		 src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
		 alt="Flower and sky"
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
	<img
		 className="object-cover w-full h-48"
		 src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
		 alt="Flower and sky"
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
	<img
		 className="object-cover w-full h-48"
		 src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
		 alt="Flower and sky"
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
