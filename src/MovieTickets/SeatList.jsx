import React from "react";
import style from "./styleMovie.module.css";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });
  return (
    <div>
      {seats.map((hang, index) => {
        return (
          <div className="container" key={index}>
            {hang.hang && <h3 className={style.firstChar}>{hang.hang}</h3>}
            <div className="row">
              {hang.danhSachGhe.map((ghe) => {
                const isSelected = selectedSeats.find(
                  (item) => item.soGhe === ghe.soGhe
                );
                return (
                  <div key={ghe.soGhe} className="col-md-1 text-center">
                    <SeatItem
                      seat={ghe}
                      key={ghe.soGhe}
                      isButton={!!hang.hang}
                      isSelected={!!isSelected}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
