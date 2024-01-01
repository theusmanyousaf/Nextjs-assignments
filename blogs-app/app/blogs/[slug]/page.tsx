import Image from "next/image"


const blogsData = [{
    slug: "blog-1",
    title: "blog 1",
    image: 'blog-1.png',
    description: "This a blog 1 description."
},
{
    slug: "blog-2",
    title: "blog 2",
    image: 'blog-2.png',
    description: "This a blog 2 description."
},
{
    slug: "blog-3",
    title: "blog 3",
    image: 'blog-3.png',
    description: "This a blog 3 description."
}]

export default function Blogs({params}: {params : {slug: string}}) {
    const showData = blogsData.filter((item)=>{ return item.slug === params.slug})
  return (
    <div>
        <h1>{showData[0]?.title}</h1>
        <Image src={`/${showData[0]?.image}`} alt="blog 3 image" width={1000} height={500}></Image>
        <p>{showData[0]?.description}</p>
    </div>
  )
}
