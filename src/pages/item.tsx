import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import axios from "axios";

//local inmage
import ImageMobil from "../../public/assets/mobil.png";

//local component
import ItemMobil from "../cards/productCards/ItemMobil";
import Link from "next/link";
import { Product } from "../types";

interface IItemProps {

}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    axios
      .get("http://188.166.238.35:8001/products")
      .then((res) => {
        setProducts(res.data.data);
        setIsPending(false)
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(products)

  const Items = [
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Tangerang",
      harga: "Rp.5.000.000,00",
    },
  ];
  return (
    <div className="container_Item_Mobil">
      {/* <div className="containerItemUtamaItemMobil">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Items.map((item) => {
            return (
              <SwiperSlide>
                <ItemMobil
                  gambar={item.gambar}
                  judul={item.judul}
                  lokasi={item.lokasi}
                  harga={item.harga}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
      { isPending && <div>Loading....</div> }
    { products && <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.length == 0 ? (<div></div>) : (products.map((product, index) => {
          return (
            <SwiperSlide>
            <Link key={index} href="/detailpost" className="containerListMobil">
              <div className="containerIMobil">
                <div className="containerImageIMobil">
                  <Image src={product.image} alt="Unknown" width={10} height={10} />
                </div>
                <div className="subJudulIMobil"> {product.name} </div>
                <div className="lokasiIMobil"> {product.brand} </div>
                <div className="hargaIMobil"> {product.price} </div>
              </div>
            </Link>
            </SwiperSlide>
          );
        }))}
      </Swiper>
    </div>}
    </div>
  );
};

export default Item;
