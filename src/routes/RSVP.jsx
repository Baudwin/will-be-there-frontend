import {useState} from "react";

export function RSVP() {
  const [plusOne, setPlusOne] = useState(false);

  return (
    <div className="pt-12 px-5 md:px-16 bg-cover w-screen h-screen offwhite">
      <div className="wrapper">
        <h1 className="text-center lg:text-3xl text-2xl font-bold pb-2">
          RSVP
        </h1>
        <div className="space-y-4">
          {/* Guest info  */}
          <div className="flex flex-col -space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Guest name <span className="text-green-800 text-xl">*</span>
            </label>
            <input
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="text"
              name="guest"
              id="guest"
              required
              autoComplete="true"
            />
          </div>

          <div className="flex flex-col -space-y-1">
            <label className=" font-lt text-gray-500" htmlFor="email">
              Email Address <span className="text-green-800 text-xl">*</span>
            </label>
            <input
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="email"
              name="email"
              id="email"
              required
              autoComplete="true"
            />
          </div>

          {/* Attendance status  */}
          <div className="-space-y-1">
            <p className="font-lt text-gray-400 capitalize text-sm">
              Kindly confirm your Attendance{" "}
              <span className="text-green-900 text-xl">*</span>
            </p>
            <div className="flex items-center gap-5">
              <span className=" font-medi">Attending?</span>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  className="w-4 h-4"
                  name="attending"
                  id="yes"
                />
                <span className=" font-bold text-green-950 ">YES</span>
              </div>

              <div className="flex gap-1.5">
                <input
                  type="radio"
                  className="w-4 h-4"
                  name="attending"
                  id="no"
                />
                <span className=" text-green-950 opacity-50">NO</span>
              </div>
            </div>
          </div>

          {/* additional items  */}

          <div className="space-y-3">
            <p className=" font-lt text-gray-500 capitalize">
              Kindly tick any item you are coming with
            </p>
            <div className="flex items-center gap-5">
              <div className="flex gap-1.5">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name="item"
                  id="food"
                />
                <span className="capitalize">food</span>
              </div>

              <div className="flex gap-1.5">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name="item"
                  id="drinks"
                />
                <span className=" capitalize">drinks</span>
              </div>

              <div className="flex gap-1.5">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name="item"
                  id="games"
                />
                <span className=" capitalize ">games</span>
              </div>
            </div>
          </div>

          {/* plus one  */}

          <div className="space-y-2">
            <div className="flex gap-5">
              <h1 className="font-lt text-gray-500 capitalize">
                Coming with a plus one?{" "}
                <span className="text-green-900 text-xl">*</span>
              </h1>
              <div className="flex gap-1.5">
                <input
                  onClick={() => setPlusOne(true)}
                  type="radio"
                  className="w-4 h-4"
                  name="plus-one"
                  id="plus-one-yes"
                  required
                />
                <span className=" ">Yes</span>
              </div>

              <div className="flex gap-1.5">
                <input
                  onClick={() => setPlusOne(false)}
                  type="radio"
                  className="w-4 h-4"
                  name="plus-one"
                  id="plus-one-no"
                />
                <span className=" ">No</span>
              </div>
            </div>

            <div className={`space-y-3 ${plusOne ? null : "hidden"}`}>
              <p className="capitalize text-sm font-lt">
                If yes input plus one guest name
                <span className=" lowercase">(s)</span>
              </p>
              <div className="flex gap-2">
                <label htmlFor="1">1</label>
                <input
                  className="border-b-2 bg-inherit border-gray-400 focus:outline-none lg:w-1/2 w-full font-lt text-gray-400"
                  placeholder=""
                  type="text"
                  name="1"
                  id="1"
                />
              </div>

              <div className="flex gap-2">
                <label htmlFor="2">2</label>
                <input
                  className="border-b-2 bg-inherit border-gray-400 focus:outline-none lg:w-1/2 w-full text-gray-400"
                  placeholder=""
                  type="text"
                  name="2"
                  id="2"
                />
              </div>

              <div className="flex gap-2">
                <label htmlFor="3">3</label>
                <input
                  className="border-b-2 bg-inherit border-gray-400 focus:outline-none lg:w-1/2 w-full text-gray-400"
                  placeholder=""
                  type="text"
                  name="3"
                  id="3"
                />
              </div>
            </div>
          </div>

          {/* congratulatory message */}
          <div className="flex flex-col space-y-2">
            <label className="capitalize text-gray-500 font-lt" htmlFor="msg">
              Congratulatory message for the organizer
            </label>
            <textarea
              className="border-2 p-2 bg-inherit border-gray-200 w-full h-12 focus:outline-none"
              name="msg"
              id="msg"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          {/* submit button  */}
          <div className="flex justify-center pt-3">
            <button className="bg-green-900 hover:bg-white border hover:border-none hover:text-green-900 text-white uppercase px-20 py-2 font-bold shadow-lg rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
