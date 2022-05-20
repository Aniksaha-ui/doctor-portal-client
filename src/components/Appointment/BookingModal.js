import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatement, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  // console.log(name, slots);
  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const formateDate = format(date, "PP");
    console.log(slot, name, email, phone);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patient: email,
      patientName: username,
      phone: phone,
    };
    // console.log(booking);
    fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatement(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle w-50">
        <div className="modal-box relative">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="font-bold text-lg text-center">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-2 justify-items-center mt-2"
          >
            <input
              name="date"
              type="text"
              value={format(date, "PP")}
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered select-secondary  w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              disabled
              value={user.displayName}
              type="text"
              name="username"
              placeholder="Enter Your Name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              disabled
              value={user.email}
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter Your Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-primary input input-bordered input-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
