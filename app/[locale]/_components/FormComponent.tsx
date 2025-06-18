import FormElement from "./FormElement"
export default function FormComponent() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white pt-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 font-bricolage">
          Proiect creativ?
        </h1>
        <p className="text-xl text-gray-600 font-bricolage">
          Să avem o discuție productivă.
        </p>
        <br /><br /><br />
        <FormElement />
      </div>
    </div>
  )
}