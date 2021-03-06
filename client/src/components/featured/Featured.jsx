import { Fragment } from "react";
import useFetch from "../../hooks/useFetch";

export default function Featured() {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="w-full max-w-5xl flex justify-between gap-5 z-0">
      {loading ? (
        "Loading please wait"
      ) : (
        <Fragment>
          <div className=" relative text-white rounded-xl overflow-hidden h-64">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="w-full object-cover hover:scale-105 duration-200 hover:cursor-pointer"
            />
            <div className="absolute bottom-5 left-5">
              <h1>Berlin</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className=" relative text-white rounded-xl overflow-hidden h-64">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="w-full object-cover hover:scale-105 duration-200 hover:cursor-pointer"
            />
            <div className="absolute bottom-5 left-5">
              <h1>Madrid</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className=" relative text-white rounded-xl overflow-hidden h-64">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="w-full object-cover hover:scale-105 duration-200 hover:cursor-pointer"
            />
            <div className="absolute bottom-5 left-5">
              <h1>London</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
