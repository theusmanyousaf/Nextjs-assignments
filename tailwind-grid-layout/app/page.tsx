import Grid from "./(components)/Grid/Grid";

export default function Home() {
  return (
    <main>
      <div className="flex mt-6 justify-center items-center"><h1 className="text-2xl font-extrabold">Tailwind Grid Layout</h1></div>
      <div className="flex mt-6 p-4 items-center justify-center">
      <Grid/>
      </div>
    </main>
  )
}
