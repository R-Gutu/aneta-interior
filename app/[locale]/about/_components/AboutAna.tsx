import Image from 'next/image';

export default function AboutAna() {
  return (
    <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/about-ana.png"
                alt="Ana Jantovan-Șum"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black font-bricolage leading-tight">
              Despre Ana Jantovan-Șum
            </h2>
            
            <div className="space-y-4 text-[#383838] font-inter leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                Sunt Ana Jantovan Șum și sunt fondatoarea, și CEO-ul Aneta Interior - un studio născut din pasiunea pentru armonie, detalii și spații care spun povești.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                Pentru mine, designul interior nu înseamnă doar estetică, ci un mod de a aduce echilibru în viața oamenilor. Cred în puterea texturilor, a luminii naturale și a liniilor curate. Îmi place să creez interioare care respiră - spații în care să te regăsești, să te liniștești, să te simți tu.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                Stilul meu gravitează în jurul minimalismului cald, cu accente elegante, materiale naturale și proporții gândite cu grijă. Am o slăbiciune pentru contraste subtile, alburi neutre, lemn natur și marmură. Mă inspir din arhitectură, din locuri, din oameni - dar și din liniște.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                Pe Instagram și Facebook documentez parcursul fiecărui proiect: de la idei și planșe de moodboard, până la detaliile finale care dau viață unui spațiu.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg">
                În spatele fiecărui concept e multă muncă, dar mai ales ascultare. Pentru că designul adevărat începe cu întrebarea: Ce îți dorești cu adevărat să simți când ajungi acasă?
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-sm sm:text-base font-medium text-[#383838] mb-2 font-bricolage">
                  Experiență ani
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black font-bricolage">
                  10+
                </p>
              </div>
              
              <div>
                <p className="text-sm sm:text-base font-medium text-[#383838] mb-2 font-bricolage">
                  Proiecte realizate
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black font-bricolage">
                  450+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}