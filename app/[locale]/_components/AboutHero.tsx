import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="pt-16 md:pt-20 lg:pt-30 flex flex-col gap-3 md:gap-5">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50 gap-6 lg:gap-0">
            <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-bree-serif leading-tight'>
                ANETA<br />
                <span className="">INTERIOR</span>
            </h1>
            <p className='text-sm sm:text-base font-inter text-[#383838] max-w-full lg:max-w-xl leading-relaxed lg:leading-tight'>
                Echipa noastra cu multi ani de experienta in domeniul designului interior a implementat cu succes proiecte pentru clienti din diverse domenii. Ne mândrim cu creativitatea noastră, capacitatea de a găsi soluții inovatoare și atenția la detalii.<br/><br/>
                Fiecare proiect este o colaborare strânsă între client și echipa noastră, asigurând că viziunea dumneavoastră unică și personalizată este realizată.
            </p>
        </div>

        {/* Image Section */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
            <Image 
                src="/images/about-hero.png" 
                alt="About Hero" 
                width={1200} 
                height={600} 
                className='w-full h-auto object-cover mt-6 md:mt-8 lg:mt-10 rounded-lg sm:rounded-xl' 
            />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <p className='text-sm sm:text-base font-inter text-[#383838] max-w-full md:max-w-xl leading-relaxed md:leading-tight order-2 md:order-1'>
                Stil modern cu tonuri calde și accente naturale. Un spațiu luminos, echilibrat și confortabil, ideal pentru relaxare zilnică.
            </p>
            <div className="flex items-center font-inter text-sm sm:text-base lg:text-lg font-medium shadow-md text-[#454545] z-20 justify-center bg-white rounded-[16px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-300 w-full sm:w-auto md:w-auto whitespace-nowrap order-1 md:order-2">
                <p>Proiectele noastre</p>
                <Image 
                    src='/svgs/right-arrow.svg' 
                    alt='arrow' 
                    width={14} 
                    height={14} 
                    className='ml-2 inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5' 
                />
            </div>
        </div>
    </div>
  );
}