import Link from "next/link"
import Image from "next/image"


export default function BlogPage() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Blogs Page</h1>
            <Link href='/blogs/blog-1'><div className="card">
                <Image className="img" src='/blog-1.png' width={500} height={300} alt="dog image"></Image>
                <div className="container">
                    <h2><b>Blog 1</b></h2>
                    <p>A Blog about bolg-1</p>
                </div>
            </div></Link>
            <Link href='/blogs/blog-2'><div className="card">
                <Image className="img" src='/blog-2.png' width={500} height={300} alt="dog image"></Image>
                <div className="container">
                    <h2><b>Blog 2</b></h2>
                    <p>A Blog about bolg-2</p>
                </div>
            </div></Link>
            <Link href='/blogs/blog-3'><div className="card">
                <Image className="img" src='/blog-3.png' width={500} height={300} alt="dog image"></Image>
                <div className="container">
                    <h2><b>Blog 3</b></h2>
                    <p>A Blog about bolg-3</p>
                </div>
            </div></Link>
        </div>
    )
}
