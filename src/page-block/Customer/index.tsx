import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./Customer.module.css";
import CustomerCard from "../../components/CustomerCard";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.comments);
      });
  }, []);

  return (
    <section className={styles.customer}>
      <h2 className={styles.customer__title}>
        <span className="highlight">Customer</span> Say
      </h2>
      <div className={styles.test}>
        <div className={styles.reviews__area}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {data.map(
              (obj, index) =>
                index <= 6 && (
                  <SwiperSlide key={index}>
                    <CustomerCard
                      name={obj["user"]["username"]}
                      text={obj["body"]}
                      key={index}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Customer;
