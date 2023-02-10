import React from 'react'
import { Link } from 'react-router-dom'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
// import '../../img'

export const Home = () => {

  return (
    <div className='flex items-center flex-col'>
      <section className="w-full bg-cover bg-center py-[40%] lg:py-[20%] bg-[url('https://firebasestorage.googleapis.com/v0/b/coderreact-7b81f.appspot.com/o/foto4.webp?alt=media&token=c88fe0a9-4529-4ede-bf17-13899d209a5c')]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 ">Unete a Yeezy World</h1>
          <Link to='/market' href="#" className="bg-primary text-black py-4 px-12 rounded-full hover:bg-indigo-600 font-black">Visitar Tienda</Link>
        </div>
      </section>

      <section className='bg-primary h-[50px] lg:h-[100px] w-full'>
        <p className='text-black font-black uppercase text-5xl lg:text-8xl text-ellipsis overflow-hidden'>Warning!!!_Warning!!!_Warning!!!_Warning!!!_Warning!!!_Warning</p>
      </section>

      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-coverbg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')">
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-black text-5xl uppercase">
                    Tu camino empieza con un par de YEEZY
                  </h1>
                </div>
              </div>
            </div>
          </div>
          
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px ">
            <svg className="absolute bottom-0 overflow-hidden bg-pink-500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center mt-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-3xl">
                  <img src="https://firebasestorage.googleapis.com/v0/b/coderreact-7b81f.appspot.com/o/foto5.webp?alt=media&token=3cf14b26-ec40-428f-a58e-415f8ded2dca" alt="" className='rounded-xl'/>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center mt-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-3xl">
                  <img src="https://firebasestorage.googleapis.com/v0/b/coderreact-7b81f.appspot.com/o/foto3.webp?alt=media&token=d26835da-6d4a-45d7-8a6e-d6fda81dbe04" alt="" className='rounded-xl'/>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center mt-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <img src="https://firebasestorage.googleapis.com/v0/b/coderreact-7b81f.appspot.com/o/foto1.webp?alt=media&token=5ea21874-e234-49d9-af75-7da215b36966" alt="" className='rounded-xl'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

    </div>
  )
}
