import React from 'react'

const Curriculum = () => {
  return (
    <section class="mx-auto max-w-screen-xl bg-white py-12 text-black sm:py-16 lg:py-20">
  <div class="mx-auto px-6 sm:px-8 lg:px-12">
    <div class="row-gap-12 grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-col">
        <div class="">
          <h2 class="font-sans text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"><span class="leading-snug">Explore, Learn, and Thrive</span></h2>
          <p class="mt-6 text-lg text-gray-700">Welcome, students! This section is designed just for you—a hub of resources, tools, and information to enhance your academic journey and personal growth. Whether you're a high school student preparing for college, a college student navigating your courses, or someone eager to expand your knowledge, we've got you covered.</p>
        </div>

        <div class="group relative mt-8 w-full overflow-hidden rounded-xl">
          <div class="inset-0 bg-blue-700">
            <img class="max-w-full object-cover opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-80" src="/images/zog6ZPELnp3DnO9-Yohvy.png" alt="" />
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="/" title="" class="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-white px-1 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black focus:shadow-md sm:py-2 sm:px-5 sm:text-base" role="button">
              <svg class="mr-2 h-6 w-6 " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" class=""></path>
              </svg>
              Watch Intro
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 lg:pl-16">
        <div class="text-white  ">
          <div class="group relative mb-4 overflow-hidden rounded-md border bg-white py-10 px-8 text-black shadow-lg transition-all duration-200 ease-in-out">
            <h3 class="text-xs uppercase">INTRODUCTION</h3>
            <p class="mt-2 font-sans text-3xl font-bold">First Month</p>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi, at numquam minus maiores assumenda est laboriosam corrupti, modi voluptatum in. Adipisci quidem, fuga voluptates saepe exercitationem placeat! Id, rem.</p>
            <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gray-500 px-10 text-black opacity-0 transition group-hover:opacity-100">
              <h3 class="text-5xl select-none font-bold">Get Better!</h3>
            </div>
          </div>

          <div class="group relative mb-4 overflow-hidden rounded-md border bg-gray-500 py-10 px-8 shadow-lg transition-all duration-200 ease-in-out">
            <h3 class="text-xs uppercase">Advanced</h3>
            <p class="mt-2 font-sans text-3xl font-bold">Second Month</p>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic culpa debitis itaque rerum nisi, asperiores non quod repudiandae veritatis voluptate, reiciendis voluptatem dicta recusandae odio sapiente voluptatibus officiis eaque deleniti?</p>
            <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#003854] px-10 text-black opacity-0 transition group-hover:opacity-100">
              <h3 class="text-5xl select-none font-bold">Get Smarter!</h3>
            </div>
          </div>

          <div class="group relative mb-4 overflow-hidden hover:scale-110 rounded-md border bg-[#003854] py-10 px-8 shadow-lg transition-all duration-200 ease-in-out">
            <h3 class="text-xs uppercase">Advanced</h3>
            <p class="mt-2 font-sans text-3xl font-bold">Third Month</p>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ex. Sint, cum beatae suscipit consequatur officia quia id est commodi quo, enim, reprehenderit non a neque! Nihil nostrum molestias nesciunt!</p>
            <div class="group-hover:cursor-pointer absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#f89e20] px-10 text-white opacity-0 transition group-hover:opacity-100">
              <a href="/" class="text-5xl font-bold">Get Started!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Curriculum