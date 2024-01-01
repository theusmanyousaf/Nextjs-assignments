export default function Input(props: {type: string, text: string}) {
    return (
        <input type={props.type} placeholder={props.text} required />
    )
}