import { Link } from "react-router-dom";

export default function SearchItem({ item }) {
  return (
    <div className="border-2 p-2 rounded-md flex justify-between gap-5 mb-5">
      <img src={item.photos[0]} alt="" className="w-52 h-52 object-cover" />
      <div style={{ flex: "2" }} className="flex flex-col gap-2 ">
        <h1 className="text-xl text-blue-300">{item.name}</h1>
        <span className="text-xs">{item.distance}m from center</span>
        <span className="text-xs bg-green-400 text-white w-max p-1 rounded">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">{item.desc}</span>
        <span className="text-xs text-green-400 font-bold">
          Free cancellation
        </span>
        <span className="text-xs text-green-400">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {item.rating && (
          <div className="flex justify-between">
            <span className="font-medium">Excellent</span>
            <button className="bg-blue-400 text-white p-1 font-bold border-none">
              {item.rating}
            </button>
          </div>
        )}

        <div className="text-right flex flex-col gap-1">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xs text-gray-400">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="bg-blue-300 text-white font-bold py-2 px-1 border-none cursor-pointer rounded">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
