
export default function Seprator(props: {title: string}) {
  return (
    <>
    <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>{props.title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </>
  )
}
