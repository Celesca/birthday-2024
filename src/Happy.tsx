import { useEffect } from 'react'
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";
import './Happy.css'

const Happy = () => {

    useEffect(() => {
        document.title = 'Happy Birthday Kaew!'
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <>
        <div className="App ">
            <h1 className="flex justify-center h-full items-center font-bold text-6xl">Kaew!</h1>

            
        </div>
        <div className="container-full px-72  flex flex-col">
            <img data-aos="fade-up" data-aos-duration="700" src="1.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="2.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="3.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="4.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="5.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="6.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="7.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="8.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="9.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="10.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="11.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="12.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="13.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="14.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="15.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="16.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="17.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="18.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="19.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="20.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="21.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="22.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="23.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="24.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="25.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="26.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="27.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="28.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="29.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="zoom-in" data-aos-duration="1000" src="30.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="31.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="32.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="33.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="34.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-up" data-aos-duration="1000" src="35.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-up" data-aos-duration="1000" src="36.jfif" alt="Happy Birthday" className="kaew-image self-end" />
            <img data-aos="fade-left" data-aos-duration="1000" src="37.jfif" alt="Happy Birthday" className="kaew-image self-start" />
            <img data-aos="fade-right" data-aos-duration="1000" src="38.jfif" alt="Happy Birthday" className="kaew-image self-center mt-12" />

        </div>
    </>
  )
}

export default Happy