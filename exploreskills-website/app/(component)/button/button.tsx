import Link from "next/link";

export default function Button(props: {text: string}) {
        switch (props.text) {
            case "Contact Us":
                    return (<Link  href="/contact"><button className="hero_btn">{props.text}</button></Link>)
            case "Explore Now":
                return (<Link href="/courses"><button className="hero_btn btn">{props.text}</button></Link>)
            default:
                return (<button type="submit" className="hero_btn btn">{props.text}</button>)
        }
}