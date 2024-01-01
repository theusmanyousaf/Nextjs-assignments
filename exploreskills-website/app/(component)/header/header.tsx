import Navbar from "../navbar/navbar"

export default function Header(props: { title: string }) {
    if (props.title === "Get Ready") {
        return (
            <section className="header">
                <Navbar />
                <div className="text_box">
                    <h2>GET READY</h2>
                    <p id="headtext">TO DISCOVER CAMPUS</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                        <br /> esse blanditiis in quae perspiciatis quo.
                    </p>
                </div>
            </section>
        )
    } else {
        return (
            <section className="Sub-header">
                <Navbar />
                <h1>{props.title}</h1>
            </section>
        )
    }
}