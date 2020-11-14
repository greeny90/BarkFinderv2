import { useEffect } from "react";

const useSlider = (slideImage, slideText, images) => {
  let slideCounter = 0;

  useEffect(() => startSlider());

  const startSlider = () => {
    slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
            ), url(${images[0].picLink})`;
    const html = "Name: " + images[0].name + "<br>" + "Breed: " + images[0].breed + "<br>" + "Gender: " + images[0].gender;
    slideText.current.innerHTML = html
  };

  const handleSlide = (slide) => {
    slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
          ), url(${images[slide - 1].picLink})`;
    const html = "Name: " + images[slide - 1].name + "<br>" + "Breed: " + images[slide - 1].breed + "<br>" + "Gender: " + images[slide - 1].gender;
    slideText.current.innerHTML = html;
    animateSlide(slideImage);
  };

  const animateSlide = () => {
    slideImage.current.classList.add("fadeIn");
    setTimeout(() => {
      slideImage.current.classList.remove("fadeIn");
    }, 700);
  };

  const goToPreviousSlide = () => {
    if (slideCounter === 0) {
      handleSlide(images.length);
      slideCounter = images.length;
    }

    handleSlide(slideCounter);
    slideCounter--;
  };

  const goToNextSlide = () => {
    if (slideCounter === images.length - 1) {
      startSlider();
      slideCounter = -1;
      animateSlide(slideImage);
    }

    slideImage.current.style.backgroundImage = `linear-gradient(
          to right,
          rgba(34, 34, 34, 0.4),
          rgba(68, 68, 68, 0.4)
          ),url(${images[slideCounter + 1].picLink})`;
    const html = "Name: " + images[slideCounter + 1].name + "<br>" + "Breed: " + images[slideCounter + 1].breed + "<br>" + "Gender: " + images[slideCounter + 1].gender;
    slideText.current.innerHTML = html;
    slideCounter++;
    animateSlide(slideImage);
  };

  return { goToPreviousSlide, goToNextSlide };
};

export default useSlider;
