import Header from "./(component)/header/header";
import TestimonialCard from "./(component)/testimonialCard/testimonialCard";
import TextCard from "./courses/(components)/textCard";
import Button from "./(component)/button/button";
import Seprator from "./(component)/seprator/seprator";

export default function Home() {
  return (
    <>
      <Header title="Get Ready" />

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard cardTitle="Undergraduate Programs" />
          <TextCard cardTitle="Graduate Programs" />
          <TextCard cardTitle="Adult Learning & Degree Completion" />
        </div>
    </section >

    {/* <!-- Campus Section Start--> */}

    <section className="campus">
        <Seprator title="TAKE OUR VIRTUAL TOUR"/>

        <div className="row">
            <div className="campus-col">
                <img src="img/Campus1.png" alt="" />
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus2.png" alt="" />
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus3.png" alt="" />
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Campus Section End --> */}

    {/* <!-- Facilities Section Start --> */}
    <section className="facilities">
    <Seprator title="Our Facilities"/>

        <div className="row">
            <div className="facilities-col">
                <img src="img/libary.png" alt="" />
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="img/playground.png" alt="" />
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="img/food.png" alt="" />
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>
    {/* <!-- Facilities Section End --> */}

    {/* <!-- Testimonials Section Start --> */}
    <section className="testimonials">
    <Seprator title="What Our Students Say?"/>

        <div className="row">
           <TestimonialCard/>
           <TestimonialCard/>
        </div>
    </section>
    {/* <!-- Testimonials Section End --> */}

    {/* <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button text="Contact Us"/>
    </section>
    {/* <!-- Call To Action Section End --> */}
    </>
  )
}
