import { Fullscreen } from 'lucide-react';
import Image from 'next/image';

export default function Statistics() {
    return (
        <div>
            <div>
                <img src="/table.png" alt="Table" className="w-full h-auto rounded-2xl" />
            </div>

            <section className="w-full pt-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                        <Image
                        src="/stat1.png"
                        alt="Steppe Coffee Tote Bag"
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                        <Image
                        src="/stat2.png" 
                        alt="Sign"
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-10 px-4 md:px-0 py-12 grid grid-cols-1 md:grid-cols-3">
                <div className='col-span-1 md:col-span-2'>
                    <div className=" h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
                        <div className='h-min '>
                            <p className="text-sm md:text-base leading-relaxed text-gray-800">
                            Steppe Coffee – городской кофейный проект с сильным комьюнити-потенциалом и фокусом на живое общение. В рамках первого этапа мы пересобрали визуальный язык бренда, усилили характер и атмосферу Steppe Coffee, 
                а также заложили единую логику для дальнейшего развития контента и коммуникаций. Это позволило бренду выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
                            </p>
                        </div>
                    </div>
                    <div className="h-fit">
                    <div className='min-w-full'>
                        <img src="/prosmotr.png" alt="Statistic 3" className="w-full rounded-xl object-cover" />
                    </div>
                </div>
                </div>
                <div className='col-span-1'>
                    {/* fix sizing to fit */}
                    <img src="/phone1.png" alt="Statistic 4" className=" rounded-xl h-full p-12 object-cover" />
                </div>
            </section>


            <section>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-10'>
                    <div className=" col-span-1 h-fit self-center px-4 py-10 border border-white rounded-2xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
                        <div className='h-min '>
                            <h1 className='text-5xl font-light py-4'>в октябре</h1>
                            <p className="text-sm md:text-base leading-relaxed text-gray-800">
                            Steppe Coffee – городской кофейный проект с сильным комьюнити-потенциалом и фокусом на живое общение. В рамках первого этапа мы пересобрали визуальный язык бренда, усилили характер и атмосферу Steppe Coffee, 
                а также заложили единую логику для дальнейшего развития контента и коммуникаций. Это позволило бренду выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <img src="/vw.png" alt="Statistics Bottom" className="w-full h-auto rounded-2xl mt-10" />
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mx-10">

                    <img src="/file-007.png" alt="Poster" className="w-full h-auto rounded-xl" />


                    <div className="md:col-span-2 h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
                        <div className='h-min '>
                            <p className="text-sm md:text-base leading-relaxed text-gray-800">
                                Отдельным направлением стала работа с комьюнити. Мы не просто анонсировали мероприятия, а выстраивали вокруг Steppe Coffee точки притяжения. За период сотрудничества были восстановлены связи с уже существующими сообществами и привлечены новые – SpacED, Language Mixer, Bookclub Almaty. В кофейне прошёл арт-мастер-класс, который усилил офлайн-трафик и стал контентной опорой для социальных сетей. Такой формат позволил бренду выйти за рамки «кофейни» и закрепиться как городское пространство для встреч и идей.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 mx-10">

                    <div className="md:col-span-2 h-fit self-center p-4 border border-white rounded-xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
                        <div className='h-min '>
                            <p className="text-sm md:text-base leading-relaxed text-gray-800">
                                Дополнительно мы занимались дизайном печатных материалов и оформлением интерьера, чтобы визуальный язык бренда был последовательно представлен и в цифровой среде, и в физическом пространстве. Это усилило узнаваемость и связало коммуникацию в соцсетях с реальным опытом гостей.
                            </p>
                        </div>
                    </div>

                    <img src="/file-008.png" alt="Poster" className="w-full h-auto rounded-xl" />


                </div>
            </section>


            <section>

            </section>



            <section>
                <div className='flex justify-center md:mx-50 mx-20 mb-10'>
                    <div className="h-fit flex self-center px-4 py-8 border border-white rounded-2xl backdrop-blur-md shadow-2xl shadow-[#C0C7F7] bg-white/30">
                        <div className='h-min flex justify-center flex-col items-center'>
                            <h1 className='text-5xl font-light pb-4'>итоги</h1>
                            <p className="text-sm md:text-base text-center leading-relaxed text-gray-800">
                           Итог работы с Steppe Coffee: Социальные сети стали отражением жизни кофейни, офлайн-мероприятия начали работать как инструмент привлечения и удержания аудитории, а бренд получил понятную и устойчивую коммуникационную модель, которую можно масштабировать дальше.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}