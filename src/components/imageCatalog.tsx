import React from 'react'

export  function ImageCatalog(data) {
    
  return (
    <>
    <section>
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                    alt=""
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-red-300 hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent hover:border-red-300"
                    >
                      <img
                        src="https://i.postimg.cc/6qcPhTQg/R-18.png"
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}
