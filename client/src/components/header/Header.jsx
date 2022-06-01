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
import { Fragment, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions({
      ...options,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="bg-blue-700 flex justify-center text-white relative">
      <div
        className={
          type === "list"
            ? "w-full max-w-5xl mt-5 mb-0 "
            : "w-full max-w-5xl my-5"
        }
      >
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
        {type !== "list" && (
          <Fragment>
            <h1>A lifetime of discounts ? It's Gemius.</h1>
            <p className="my-5">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
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
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-5 cursor-pointer">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray-400 "
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-400 "
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-12 z-20"
                  />
                )}
              </div>
              <div className="flex items-center gap-5 text-gray-400 ">
                <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
                <span
                  className="cursor-pointer"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {openOptions && (
                  <div className="absolute top-12 bg-white text-gray-500 rounded-md shadow-md z-20">
                    <div className="w-52 flex justify-between m-3">
                      <span>Adult</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className=" border-blue-400 border-2 px-3 py-1 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className=" border-blue-400 border-2 px-3 py-1 "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-52 flex justify-between m-3">
                      <span>Children</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className=" border-blue-400 border-2 px-3 py-1 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className=" border-blue-400 border-2 px-3 py-1 "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-52 flex justify-between m-3">
                      <span>Room</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="border border-blue-400 border-2 px-3 py-1 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="border border-blue-400 border-2 px-3 py-1 "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-5">
                <button
                  onClick={handleSearch}
                  className="text-black border p-1 border-blue-400 hover:scale-110 duration-100 transition-all rounded-xl bg-blue-400"
                >
                  Search
                </button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
