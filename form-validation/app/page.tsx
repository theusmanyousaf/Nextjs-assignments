import dynamic from "next/dynamic";
import Form from "./(components)/Form/Form";

const DynamicComponent = dynamic(()=> import("./(components)/Tooltip/Tooltip"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1>Main Page of Application</h1>
      <Form/>
      <DynamicComponent/>
    </main>
  )
}
