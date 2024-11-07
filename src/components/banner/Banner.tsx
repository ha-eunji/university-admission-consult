import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper.min.css";

import * as S from "components/banner/Banner.styles";

import { bannerList } from "components/banner/Banner.data";

export default function Banner() {
  return (
    <Swiper modules={[Autoplay]} autoplay loop>
      {bannerList.map((item, i) => (
        <SwiperSlide key={`${item}_${i}`}>
          <S.Container>
            <S.Img src={item} alt="img" />
            <S.Bullet>
              {i + 1} / {bannerList.length}
            </S.Bullet>
          </S.Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
