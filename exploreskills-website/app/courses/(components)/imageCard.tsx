import Image from "next/image"

export default function ImageCard(props: {source: string ,imgCardTitle: string}) {
    return (
        <div className="facilities-col">
            <Image src={props.source} width={1000} height={250} alt="" />
            <h3>{props.imgCardTitle}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    )
}
