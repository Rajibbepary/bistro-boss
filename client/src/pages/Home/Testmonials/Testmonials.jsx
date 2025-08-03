import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Add this line
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitel from '../../../components/SectionTitel/SectionTitel';

const Testmonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <SectionTitel subHeading={'What Our Clients Say'} heading={'Testmonials'} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-5xl mt-6 mb-6" />
              <p className="py-4">{review.details}</p>
              <h1 className="text-2xl text-orange-400">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testmonials;
