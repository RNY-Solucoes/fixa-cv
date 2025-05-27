import fachada1 from "../../assets/fachadas/fachada1.png";
import fachada2 from "../../assets/fachadas/fachada2.png";
import fachada3 from "../../assets/fachadas/fachada6.png";
import fachada4 from "../../assets/fachadas/fachada7.png";
import fachada5 from "../../assets/fachadas/fachada8.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Carrousel() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 2, spacing: 5 },
  });
  return (
    <div className="flex w-full items-center justify-center gap-5">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={fachada1} alt="" className="rounded-2xl" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={fachada2} alt="" className="rounded-2xl" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src={fachada3} alt="" className="h-full rounded-2xl" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src={fachada4} alt="" className="h-full rounded-2xl" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={fachada5} alt="" className="h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
