export default function MailList() {
  return (
    <div className="w-full mt-12 bg-blue-700 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div>
        <input
          className="w-72 h-7 p-2 border-none mr-2 roun"
          type="text"
          placeholder="Your Email"
        />
        <button className="h-12 px-2 bg-blue-200 text-white font-medium border-none rounded-md cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
