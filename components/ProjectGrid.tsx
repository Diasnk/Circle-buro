import React from 'react';

export default function ProjectGrid() {
  return (
    <section className="px-4 md:px-8 py-12 mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="md:col-span-2 h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
            <div className='h-min '>
                <h2 className="text-2xl uppercase font-bold mb-4 text-gray-800 font-gothic60">Steppe Coffee</h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-800">
                Steppe Coffee – городской кофейный проект с сильным комьюнити-потенциалом и фокусом на живое общение. В рамках первого этапа мы пересобрали визуальный язык бренда, усилили характер и атмосферу Steppe Coffee, 
    а также заложили единую логику для дальнейшего развития контента и коммуникаций. Это позволило бренду выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
                </p>
            </div>
        </div>

           <img src="/saiga-poster.png" alt="Saiga Poster" className="w-full h-auto rounded-xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className='flex flex-col items-center'>
            <h2 className='text-5xl p-6 font-light'>до</h2>
            <div className="bg-[#FFFDE7] p-6 rounded-2xl">
                <img src="/image-before.png" alt="Before Branding" className="w-full h-auto" />
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='text-5xl p-6 font-light'>после</h2>
         <div className="bg-white p-6 rounded-2xl">
            <img src="/image-after.png" alt="After Branding" className="w-full h-auto" />
         </div>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <div className='overflow-hidden rounded-3xl flex justify-center items-center bg-[#FFFDE7] mx-4'>
            <img src="/menu.png" alt="Steppe Coffee Menu" className="h-160 scale-125 w-5/6 object-cover rounded-3xl" />
        </div>
        <div className='flex flex-col gap-4'>
            <div className='h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30'>
                <div className='h-min'>
                    <p className="text-sm md:text-base leading-relaxed text-gray-800">
                    После завершения этого этапа клиент перешел на пакет Cycle – формат ежемесячного сопровождения, в рамках которого мы продолжаем развивать проект, усиливать комьюнити и последовательно масштабировать коммуникацию на базе обновленного визуального и смыслового фундамента.
                    </p>
                </div>
            </div>
            <div className='h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30'>
                <div className='h-min'>
                    <p className="text-sm md:text-base leading-relaxed text-gray-800">
                    Мы взяли на себя работу с контентом, визуальной подачей, печатными материалами и офлайн-активностями, а также участвовали в оформлении интерьера кофейни, чтобы пространство и коммуникация работали как единое целое.
                    </p>
                </div>
            </div>
            <div className='rounded-2xl '>
                <img src="/menu-detail.png" alt="Menu Detail" className=" rounded-2xl" />
            </div>
        </div>
      </div>
    </section>
  );
}