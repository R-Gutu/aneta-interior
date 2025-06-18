import Form from '../_components/FormComponent'
import AboutHero from './_components/AboutHero'
import AboutAna from './_components/AboutAna'
import InteriorShowcase from './_components/InteriorShowcase'
const page = () => {
  return (
    <div className="">
      <AboutHero />
      <AboutAna />
      <InteriorShowcase />
      <Form />
    </div>
  )
}

export default page