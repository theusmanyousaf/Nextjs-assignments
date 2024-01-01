import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <h1><Link href="/blogs">Blogs Page</Link></h1>
    </main>
  )
}
