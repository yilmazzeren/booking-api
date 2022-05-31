import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(true);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className="flex-1 bg-orange-400 p-2 rounded-lg sticky top-2 h-max">
            <h1 className="text-xl text-gray-600 mb-2">Search</h1>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs">Destination</label>
              <input
                className="h-7 border-none p-1"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-xs">Check-in Date</label>
              <span
                className="h-7 p-1 bg-white flex items-center cursor-pointer"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="text-xs">
              <label>Options</label>
              <div className="p-2">
                <div className="flex justify-between mb-2 text-gray-400 text-xs">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-12 outline-none rounded p-1"
                  />
                </div>
                <div className="flex justify-between mb-2 text-gray-400 text-xs">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-12 outline-none rounded p-1"
                  />
                </div>
                <div className="flex justify-between mb-2 text-gray-400 text-xs">
                  <span>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12 outline-none rounded p-1"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2 text-gray-400 text-xs">
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-12 outline-none rounded p-1"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2 text-gray-400 text-xs">
                  <span>Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12 outline-none rounded p-1"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="p-2 bg-blue-400  text-white border-none w-full font-medium cursor-pointer">
              Search
            </button>
          </div>
          <div style={{ flex: "3" }}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
