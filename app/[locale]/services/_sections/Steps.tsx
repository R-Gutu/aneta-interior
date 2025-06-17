import StepRight from "../_components/StepRight";
import StepLeft from "../_components/StepLeft";

export default function Steps() {

    return (
        <div>
            <p className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bricolage font-bold px-4 sm:px-0">
                Etapele Proiectului
            </p>
            <p className="px-4 sm:px-[10%] md:px-[15%] lg:px-[20%] text-center text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Procesul de creare a unui design unic, trecând prin etapele cheie de la concept la implementarea completă, asigură calitate înaltă și atenție la detalii în fiecare etapă.
            </p>
            <StepRight
                title="Crearea Conceptului"
                content="Începem cu dezvoltarea unui concept unic, care va sublinia caracteristicile dvs. individuale și va evidenția proiectul dvs. în rândul altora."
                imagePath="/images/steps1.jpg"
                number="01"
            />
            <StepLeft
                title="Proiectarea Spațiului"
                content="Următorul pas este crearea unui plan 2D detaliat, care ilustrează funcționalitatea și fluxul optim al spațiului."
                imagePath="/images/steps2.jpg"
                number="02"
            />
            <StepRight
                title="Modelare 3D"
                content="În această etapă, aducem conceptul la viață printr-un randament 3D, astfel încât să puteți vedea toate detaliile și proporțiile viitorului dvs. spațiu."
                imagePath="/images/steps3.jpg"
                number="03"
            />
            <StepLeft
                title="Detaliile Execuției"
                content="Dezvoltăm cu atenție toate specificațiile tehnice pentru a ne asigura că fiecare element al proiectului dvs. este realizat cu cea mai mare precizie."
                imagePath="/images/steps4.jpg"
                number="04"
            />
            <StepRight
                title="Selecție materiale și mobilier"
                content="Selectăm materiale și finisaje care se potrivesc perfect conceptului și bugetului proiectului dvs., pentru a crea un spațiu armonios și elegant."
                imagePath="/images/steps5.jpg"
                number="05"
            />
        </div>
    )
}