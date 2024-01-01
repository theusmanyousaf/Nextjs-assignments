import Header from "../(component)/header/header";
import Image from "next/image";
import TextCard from "./(components)/textCard";
import ImageCard from "./(components)/imageCard";

export default function Courses() {
    return (
      <>
      <Header title="Our Courses"/>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard cardTitle="Undergraduate Programs"/>
          <TextCard cardTitle="Graduate Programs"/>
          <TextCard cardTitle="Adult Learning & Degree Completion"/>
        </div>
    </section>

    {/* <!-- course end --> */}

    {/* <!-- best course start --> */}

    <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard source="/img/course1.png" imgCardTitle="Web Development"/>
          <ImageCard source="/img/course2.png" imgCardTitle="Artificial Intelligence"/>
          <ImageCard source="/img/course3.png" imgCardTitle="Data Science"/>
        </div>
    </section>

    {/* <!-- best courses end --> */}
      </>
    )
}