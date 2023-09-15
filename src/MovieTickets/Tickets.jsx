import React from "react";
import style from "./styleMovie.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeAllSeat, removeSeat } from "../redux/action/busTicketAction";

export default function Tickets() {
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });
  const { totalPrice } = useSelector((state) => {
    return state.busTicket;
  });
  const dispatch = useDispatch();

  const handleRemove = (seatID) => {
    // dispatch({ type: "removeSeat", payload: seatID });
    dispatch(removeSeat(seatID));
  };
  const handleBooking = () => {
    alert(`Total Price: ${totalPrice}`);
    dispatch(removeAllSeat());
  };
  return (
    <div>
      <h3 className="fs-7 text-center text-white mt-5">
        Danh sách vé đang chọn
      </h3>
      <div className={style.squareBooked}></div>
      <div className={style.captionBooked}>Ghế đã đặt</div> <br />
      <div className={style.squareIsBook}></div>
      <div className={style.captionBooked}>Ghế đang chọn</div> <br />
      <div className={style.squareNotBook}></div>
      <div className={style.captionBooked}>Ghế chưa đặt</div>
      <table className="my-3 table-bordered border-light" width="80%">
        <thead className="text-center text-white">
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody className="fw-bold">
          {selectedSeats.map((item) => (
            <tr key={item.soGhe}>
              <td>{item.soGhe}</td>
              <td>{item.gia}</td>
              <td>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleRemove(item.soGhe)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        {selectedSeats.length > 0 && (
          <button
            className="btn btn-warning text-white"
            onClick={handleBooking}
          >
            Đặt vé
          </button>
        )}
      </div>
    </div>
  );
}
