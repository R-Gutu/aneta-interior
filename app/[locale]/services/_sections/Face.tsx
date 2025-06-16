import Image from "next/image"
export default function Face() {
    return (
        <div className='pt-[80px] sm:pt-[100px] lg:pt-[120px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] px-4 sm:px-8 lg:px-20 py-6 sm:py-8 lg:py-10 min-h-screen lg:h-screen gap-6 sm:gap-8 lg:gap-10'>
            <div className='rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[100px] rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[100px] overflow-hidden bg-green-400 relative h-[250px] sm:h-[350px] lg:h-auto'>
                <Image
                    src={"/images/services-left.png"}
                    fill
                    className='object-cover'
                    alt='services left'
                />
            </div>
            <div className='grid grid-rows-[auto_1fr] lg:grid-rows-[1fr_1fr] gap-6 sm:gap-8'>
                <div className='flex flex-col gap-3 sm:gap-4 lg:gap-5'>
                    <p className='font-bricolage text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight'>
                        Descoperă serviciile noastre de design interior, adaptate nevoilor tale.
                    </p>
                    <p className='font-dancing-script text-xl sm:text-2xl lg:text-4xl'>
                        De la randări 3D până la implementare completă.
                    </p>
                </div>
                <div className='rounded-br-[40px] sm:rounded-br-[60px] lg:rounded-br-[100px] rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px] overflow-hidden bg-red-400 relative h-[200px] sm:h-[280px] lg:h-auto'>
                    <Image
                        src={"/images/services-bottom.png"}
                        fill
                        className='object-cover object-[center_90%]'
                        alt='services bottom'
                    />
                </div>
            </div>
        </div>
    )
}