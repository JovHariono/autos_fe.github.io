import * as React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

import hmlogo from "../../public/assets/LogoHome.png";
import usrlogo from "../../public/assets/User.png";
import Navbar from "./navbar";

type FormValues = {
  gambarprodukdepan: File;
  gambarprodukbelakang: File;
  gambarprodukkiri: File;
  gambarprodukkanan: File;
  gambarprodukstnk: File;
  linkgdvalidasi: string;
};

interface IValidasiProdukProps {}

const ValidasiProduk: React.FunctionComponent<IValidasiProdukProps> = (
  props
) => {
  const formValidation = useForm<FormValues>();
  const { register, handleSubmit, formState } = formValidation;
  const { errors } = formState;
  const [gambarprodukdepan, setGambarProdukDepan] = useState<File | null>(null);
  const [gambarprodukbelakang, setGambarProdukBelakang] = useState<File | null>(
    null
  );
  const [gambarprodukkiri, setGambarProdukKiri] = useState<File | null>(null);
  const [gambarprodukkanan, setGambarProdukKanan] = useState<File | null>(null);
  const [gambarprodukstnk, setGambarProdukStnk] = useState<File | null>(null);
  const [linkgdrive, setLinkGdrive] = useState("");

  const onSubmit = (data: FormValues) => {
    console.log("Form Shubmitted", data);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="containerForm">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="judulForm">Form validasi barang</div>
          <div className="formPostGambarProduk">
            <label htmlFor="gambarprodukdepan">Tampak Depan</label>
            <input
              type="file"
              id="gambarprodukdepan"
              {...register("gambarprodukdepan", {
                required: {
                  value: true,
                  message: "Gambar Produk Depan is required",
                },
              })}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setGambarProdukDepan(e.target.files[0]);
                }
              }}
            />
            <p className="error"> {errors.gambarprodukdepan?.message} </p>
          </div>

          <div className="formPostGambarProduk">
            <label htmlFor="gambarprodukbelakang">Tampak Belakang</label>
            <input
              type="file"
              id="gambarprodukbelakang"
              {...register("gambarprodukbelakang", {
                required: {
                  value: true,
                  message: "Gambar Produk Belakang is required",
                },
              })}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setGambarProdukBelakang(e.target.files[0]);
                }
              }}
            />
            <p className="error"> {errors.gambarprodukbelakang?.message} </p>
          </div>

          <div className="formPostGambarProduk">
            <label htmlFor="gambarprodukkiri">Tampak Kiri</label>
            <input
              type="file"
              id="gambarprodukkiri"
              {...register("gambarprodukkiri", {
                required: {
                  value: true,
                  message: "Gambar Produk Kiri is required",
                },
              })}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setGambarProdukKiri(e.target.files[0]);
                }
              }}
            />
            <p className="error"> {errors.gambarprodukkiri?.message} </p>
          </div>

          <div className="formPostGambarProduk">
            <label htmlFor="gambarprodukkanan">Tampak Kanan</label>
            <input
              type="file"
              id="gambarprodukkanan"
              {...register("gambarprodukkanan", {
                required: {
                  value: true,
                  message: "Gambar Produk Kanan is required",
                },
              })}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setGambarProdukKanan(e.target.files[0]);
                }
              }}
            />
            <p className="error"> {errors.gambarprodukkanan?.message} </p>
          </div>

          <div className="formPostGambarProduk">
            <label htmlFor="gambarprodukstnk">Foto STNK</label>
            <input
              type="file"
              id="gambarprodukstnk"
              {...register("gambarprodukstnk", {
                required: {
                  value: true,
                  message: "Gambar Produk Stnk is required",
                },
              })}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setGambarProdukStnk(e.target.files[0]);
                }
              }}
            />
            <p className="error"> {errors.gambarprodukstnk?.message} </p>
          </div>

          <div className="containerInput">
            <label htmlFor="linkgdvalidasi">Link Gdrive</label>
            <input
              type="text"
              id="linkgdvalidasi"
              {...register("linkgdvalidasi", {
                required: {
                  value: true,
                  message: "Link Gdrive is required",
                },
              })}
              value={linkgdrive}
              onChange={(e) => {
                setLinkGdrive(e.target.value);
              }}
            />
            <p className="error"> {errors.linkgdvalidasi?.message} </p>
          </div>

          <button>Submit Validation</button>
        </form>
      </div>
    </div>
  );
};

export default ValidasiProduk;
