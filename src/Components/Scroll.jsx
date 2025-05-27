import { useEffect } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';

function Scroll() {
  useEffect(() => {
    const header = document.getElementById('main-header');
    const banner = document.getElementById('banner');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
            header.classList.add('sticky');
            setTimeout(() => header.classList.add('sticky'), 50);
            } else {
            header.classList.remove('sticky');
            header.classList.remove('slide-in');
        }
        },
      {
        threshold: 0,
      }
    );

    if (banner) observer.observe(banner);

    return () => {
      if (banner) observer.unobserve(banner);
    };
  }, []);

  return (
    <>
    <Header />
    <Banner />
    </>
  );
}

export default Scroll;
