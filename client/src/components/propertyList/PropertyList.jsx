export default function PropertyList() {
  return (
    <div className="w-full max-w-5xl flex justify-between gap-5">
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="w-full h-36 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
        />
        <div>
          <h1>Hotels</h1>
          <h1 className="text-sm text-gray-500">233</h1>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="w-full h-36 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
        />
        <div>
          <h1>Apartments</h1>
          <h1 className="text-sm text-gray-500">233</h1>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="w-full h-36 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
        />
        <div>
          <h1>Resorts</h1>
          <h1 className="text-sm text-gray-500">233</h1>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="w-full h-36 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
        />
        <div>
          <h1>Villas</h1>
          <h1 className="text-sm text-gray-500">233</h1>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_country_house/6ffa05069b50124c993f00c998f1dfc66999c93f.jpg"
          alt=""
          className="w-full h-36 object-cover hover:scale-105 duration-200 hover:cursor-pointer"
        />
        <div>
          <h1>Cabins</h1>
          <h1 className="text-sm text-gray-500">233</h1>
        </div>
      </div>
    </div>
  );
}
