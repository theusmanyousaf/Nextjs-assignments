import NamesUI from "./(components)/NamesUI/namesUI";


export default function Home() {
  return (
    <main>
      <div className="flex mt-6 justify-center hover:text-white items-center font-extrabold text-4xl"><h1 className="header"></h1></div>
      <div className="flex mt-6 p-4 items-center justify-center">
      <NamesUI/>
      </div>
    </main>
  )
}
