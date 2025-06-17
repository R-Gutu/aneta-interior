import Accordion from "../_components/Accordion"

export default function OurSerivces() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8">
                <p className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bricolage font-bold px-4 sm:px-0">
                    Serviciile Noastre
                </p>
                <p className="px-4 sm:px-[10%] md:px-[15%] lg:px-[20%] text-center text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    Oferim pachete personalizate de design interior, de la randări 3D și concepte creative, până la implementarea completă. Alege ce ți se potrivește și descoperă toate detaliile printr-un simplu click.
                </p>
                <Accordion
                    title="Design 3D – Vizualizare & Concept"
                    content={`1.	 Releveu și plan mobilare – pe baza măsurătorilor reale sau ale planului existent
2.	 Tablou de concept – propunere vizuală cu stil, culori, texturi
3.	 Randări 3D fotorealiste – 2–4 imagini pe cameră, pentru o viziune clară asupra spațiului
4.	 Listă orientativă de mobilier și accesorii – cu dimensiuni și sugestii de achiziție
Ideal pentru clienții care au echipă proprie de execuție, dar vor o direcție estetică clară.
`}
                    imagePath="/images/faq1.png"
                    link="/services/web-design"
                />
                <Accordion
                    title="Design Avansat – Proiect Complet de Amenajare"
                    content={`1.	 Releveu și plan mobilare – pe baza măsurătorilor reale sau ale planului existent
2.	 Tablou de concept – propunere vizuală cu stil, culori, texturi
3.	 Randări 3D fotorealiste – 2–4 imagini pe cameră, pentru o viziune clară asupra spațiului
4.	 Listă orientativă de mobilier și accesorii – cu dimensiuni și sugestii de achiziție
Ideal pentru clienții care au echipă proprie de execuție, dar vor o direcție estetică clară.
`}
                    imagePath="/images/faq1.png"
                    link="/services/web-design"
                />
                <Accordion
                    title=" Design All-Inclusive – Proiect + Implementare"
                    content={`1.	 Releveu și plan mobilare – pe baza măsurătorilor reale sau ale planului existent
2.	 Tablou de concept – propunere vizuală cu stil, culori, texturi
3.	 Randări 3D fotorealiste – 2–4 imagini pe cameră, pentru o viziune clară asupra spațiului
4.	 Listă orientativă de mobilier și accesorii – cu dimensiuni și sugestii de achiziție
Ideal pentru clienții care au echipă proprie de execuție, dar vor o direcție estetică clară.
`}
                    imagePath="/images/faq1.png"
                    link="/services/web-design"
                />
            </div>
        </div>
    )
}