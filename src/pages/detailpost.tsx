import * as React from "react";
import Navbar from "./navbar";
import Image from "next/image";

import ImageMobil from "../../public/assets/mobil.png";
import Contact from "./contact";

interface IDetailPostProps {}

const Items = [
  {
    gambar: ImageMobil,
    judul: "Mercedes Benz G-Class",
    lokasi: "Papua",
    harga: "Rp.5.000.000,00",
  },
];

const DetailPost: React.FunctionComponent<IDetailPostProps> = (props) => {
  return (
    <div className="container">
      <Navbar />

      <div className="contentDetailPost">
        <div className="contentKiri">
          <div className="containerItemDetail">
            {Items.map((item) => {
              return (
                <div className="containerMapItemDetail">
                  <Image src={ImageMobil} alt={"unknown"} />
                  <div className="textContainerMapItemDetail">
                    {" "}
                    {item.judul}{" "}
                  </div>
                  <div className="textContainerMapItemDetail">
                    { item.lokasi }
                  </div>
                  <h3 className="textContainerMapItemDetail"> {item.harga} </h3>
                </div>
              );
            })}
          </div>
          <div>
            <Contact />
          </div>
        </div>
        <div className="contentKanan">
          <p>Deskripsi</p>
          <hr />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default DetailPost;
