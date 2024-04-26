export function Hero() {
  return (
    <div className="offwhite pt-20">
      <div className="imgbg custombr w-96 lg:w-2/5 h-60 lg:h-72 mb-6 shadow-lg p-1 mx-auto">
        <img
          src="/images/event.jpg"
          alt="event image"
          className="w-full h-full"
        />
      </div>
      <h1 className="lg:text-4xl text-3xl font-smbld text-center ">
        RSVP, Create & Manage Your Events
      </h1>
      <p className="lg:text-2xl text-xl font-lt text-center mb-4">
        All in One Place!
      </p>

      <div className="flex justify-center mb-2">
        <button className="customgreen text-white w-80 h-12 hover:bg-white hover:text-green-950 shadow hover:shadow-lg rounded-xl text-xl font-reg">
          How It Works
        </button>
      </div>

      <div className="w-80 h-16 flex mx-auto relative">
        <button className="uppercase customgreen text-white w-48 h-10 border border-green-900 rounded-full font-smbld">
          create event
        </button>
        <button className="uppercase w-40 h-10 border border-green-900 border-l-transparent rounded-full font-smbld pl-8 absolute right-2">
          rsvp
        </button>
      </div>

      {/* vertical line */}
      <div className="vline border-l border-l-green-950 w-1 h-32 mx-auto -mt-6"></div>
    </div>
  );
}
