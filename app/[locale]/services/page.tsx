'use client'
import Face from "./_sections/Face"
import OurServices from "./_sections/OurServices"
import Steps from "./_sections/Steps"
import Form from "../_components/Form"
const page = () => {
  return (
    <div>
      <Face />
      <OurServices />
      <Steps />
      <Form />
    </div>
  )
}

export default page