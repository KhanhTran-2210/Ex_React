import React from "react";
import data from "./data.json";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import styled from "./styleMovie.module.css";

export default function MovieTickets() {
  const backgroundImage = {
    backgroundImage: `url(./img/bgmovie.jpg)`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  };
  return (
    <div className="cotainer" style={backgroundImage}>
      <h1 className={styled.title}>Đặt vé xem phim</h1>
      <div className="row">
        <div className="col-md-8">
          <div className={styled.screen}>
            <h2 className="text-center">Màn hình</h2>
          </div>

          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
