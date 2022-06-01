import useFetch from "../../hooks/useFetch";

export default function FeaturedProperties() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      {loading
        ? "Loading"
        : data.map((item) => (
            <div key={item._id} className="flex-1 gap-2 flex flex-col">
              <img
                src={item.photos[0]}
                alt=""
                className="w-full h-60 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
              />
              <span className="text-gray-400 font-bold">{item.name}</span>
              <span className="font-light">{item.city}</span>
              <span className="font-medium">{item.cheapestPrice}</span>
              {item.rating && (
                <div>
                  <button className="bg-blue-400 text-white border-none p-1 mr-2 font-bold">
                    {item.rating}
                  </button>
                  <span className="text-sm">Excellent</span>
                </div>
              )}
            </div>
          ))}
    </div>
  );
}
