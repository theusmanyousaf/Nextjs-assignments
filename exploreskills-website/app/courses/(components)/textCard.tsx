

export default function TextCard(props: { cardTitle: string }) {
    return (
        <div className="course-col">
            <h3>{props.cardTitle}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
        </div>
    )
}
