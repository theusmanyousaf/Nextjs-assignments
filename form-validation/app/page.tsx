import dynamic from "next/dynamic";
import Form from "./(components)/Form/Form";

const DynamicComponent = dynamic(()=> import("./(components)/Tooltip/Tooltip"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mt-4"><h1 className="font-bold text-2xl border-4 border-solid text-gray-700 border-blue-500 rounded-md p-2 hover:bg-gray-700 hover:border-sky-500 hover:text-white hover:border-solid">Form Validation Using YUP</h1></div>
      <Form/>
      <DynamicComponent/> {/* This is an experimental/accidental component which adds Tooltip UI */}
    </main>
  )
}
