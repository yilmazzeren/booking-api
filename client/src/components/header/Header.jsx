import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faLocationDot,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
export default function Header() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="bg-blue-700 flex justify-center text-white relative">
      <div className="w-full max-w-5xl my-5">
        <div className="flex gap-10 mb-10">
          <div className="flex items-center gap-3 border-2 p-2 rounded-2xl">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1>A lifetime of discounts ? It's Gemius.</h1>
        <p className="my-5">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <button className="hover:scale-110 duration-100 transition-all border rounded-xl py-1 px-2 font-medium mb-7 bg-blue-400">
          Sign in / Register
        </button>
        <div className="h-8 bg-white border-2 flex items-center border-orange-400 justify-around py-6 rounded-md absolute bottom-[-24px] w-full max-w-5xl">
          <div className="flex items-center gap-5">
            <FontAwesomeIcon icon={faBed} className="text-gray-400" />
            <input
              type="text"
              placeholder="Where are you going"
              className="border-none outline-0 text-gray-400"
            />
          </div>
          <div className="flex items-center gap-5 cursor-pointer">
            <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400 " />
            <span className="text-gray-400 ">date to date</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
          <div className="flex items-center gap-5 text-gray-400 ">
            <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
            <span>2 adults 2 childre 1 room</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-black border p-1 border-blue-400 hover:scale-110 duration-100 transition-all rounded-xl bg-blue-400">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
