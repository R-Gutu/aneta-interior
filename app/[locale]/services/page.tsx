'use client'
import Face from "./_sections/Face"
import OurServices from "./_sections/OurServices"
import Steps from "./_sections/Steps"
import Form from "../_components/FormComponent"
const page = () => {
  return (
    <div className="pt-[30px] md:pt-0">
      <Face />
      <OurServices />
      <Steps />
      <Form />
    </div>
  )
}

export default page