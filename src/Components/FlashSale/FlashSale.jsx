import React, { use } from "react";
import AllContext from "../../Providers/AllContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules"; // 1. Added Navigation
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // 2. Added Navigation CSS

const FlashSale = () => {
  const { productsPromise } = use(AllContext);

  const products = use(productsPromise);
  const flashSaleProducts = products.filter((product) => product.flashSale);
  console.log(flashSaleProducts);

  return (
    <div className="space-y-5">
      <section className="flex items-center gap-5">
        <div className="w-3 h-10 rounded-full bg-primary"></div>
        <p className="text-primary font-medium">Today's</p>
      </section>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium">Flash Sales</h2>
        <div className="flex gap-2">
          <button className="trending-prev btn btn-circle btn-xs lg:btn-sm btn-outline">
            ❮{/* slider navigation */}
          </button>
          <button className="trending-next btn btn-circle btn-xs lg:btn-sm btn-outline">
            ❯
          </button>
        </div>
      </div>
      {/* slider section of flash sale products */}
      <section>
        <Swiper
          modules={[FreeMode, Navigation]} // 4. Included Navigation module
          spaceBetween={16}
          freeMode
          className="py-4"
          navigation={{
            // 5. Linked to custom classes
            nextEl: ".trending-next",
            prevEl: ".trending-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 5, spaceBetween: 15 },
            1024: { slidesPerView: 7, spaceBetween: 20 },
          }}
        >
          {flashSaleProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                to={`category/${product.id}`}
                className="card rounded-xl overflow-hidden"
              >
                <figure className="relative h-25 w-25 md:h-35 md:w-35 lg:h-45 lg:w-55 border-2 rounded-2xl border-gray-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <h3 className="text-sm lg:text-lg font-medium mt-2 px-2 truncate">
                  {product.name}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default FlashSale;
