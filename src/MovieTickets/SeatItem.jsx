import React from "react";
import cn from "classnames";
import style from "./styleMovie.module.css";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/action/busTicketAction";
import { SELECT_SEAT } from "../redux/constant/busTicketContant";

export default function SeatItem({ isButton, seat, isSelected }) {
  const dispatch = useDispatch();

  const seatClasses = cn({
    [style.ghe]: true,
    [style.gheDuocChon]: seat.daDat,
    [style.gheDangChon]: isSelected,
  });

  const handleSelect = () => {
    // dispatch({
    //   type: "selectSeat",
    //   payload: { ...seat, isSelected: !isSelected },
    // });
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  return (
    <div>
      {isButton ? (
        <button
          className={cn(seatClasses)}
          disabled={seat.daDat}
          onClick={handleSelect}
        >
          {seat.soGhe}
        </button>
      ) : (
        <p className={style.rowNumber}>{seat.soGhe}</p>
      )}
    </div>
  );
}
