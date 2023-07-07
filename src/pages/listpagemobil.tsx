import * as React from "react";
import Image from "next/image";
import { useState } from "react";

import ImageMobil from "../../public/assets/mobil.png";
import ItemMobil from "../cards/productCards/ItemMobil";
import hmlogo from "../../public/assets/LogoHome.png";
import usrlogo from "../../public/assets/User.png";
import Navbar from "./navbar";

interface IListPageMobilProps {}

const ListPageMobil: React.FunctionComponent<IListPageMobilProps> = (props) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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
      lokasi: "Jakarta",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Jakarta",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Surabaya",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Surabaya",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Papua",
      harga: "Rp.5.000.000,00",
    },
    {
      gambar: ImageMobil,
      judul: "Mercedes Benz G-Class",
      lokasi: "Semarang",
      harga: "Rp.5.000.000,00",
    },
  ];

  const filteredItems = Items.filter((item) => {
    if (query === "") {
      return true; // Include all items when query is empty
    } else {
      return item.lokasi.toLowerCase() === query.toLowerCase();
    }
  });

  return (
    <div className="container">
      <Navbar />
      <div className="contentListPageMobil">
        <div className="filter">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul className="list">
            {filteredItems.map((item) => (
              <li
                className="listItem"
                key={item.lokasi}
                onClick={() => setQuery(item.lokasi)}
              >
                {item.lokasi}
              </li>
            ))}
          </ul>
        </div>

        <div className="container-item">
          {filteredItems.map((item) => (
            <ItemMobil
              key={item.lokasi}
              gambar={item.gambar}
              judul={item.judul}
              lokasi={item.lokasi}
              harga={item.harga}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPageMobil;
