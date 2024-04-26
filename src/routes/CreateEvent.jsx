import {useState} from "react";

export function CreateEvent() {
  const [img, setImg] = useState("");
  const [eventInfo, setItemInfo] = useState({
    eventName: "",
    date: "",
    time: "",
    description: "",
    location: "",
  });

  const formData = new FormData();
  formData.append("img", img);
  formData.append("eventName", eventInfo.itemName);
  formData.append("date", eventInfo.date);
  formData.append("time", eventInfo.time);
  formData.append("description", eventInfo.description);
  formData.append("location", eventInfo.location);

  return (
    <div className="pt-12 px-5 md:px-16 bg-cover w-screen h-screen offwhite">
      <div className="wrapper">
        <h1 className="text-center lg:text-3xl text-2xl font-bold pb-6">
          Create Your Event
        </h1>
        <div className="space-y-6">
          {/* Event info  */}
          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Event name
            </label>
            <input
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="text"
              name="guest"
              id="guest"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-1">
              <label className=" font-lt text-gray-500" htmlFor="date">
                Date <span className="text-green-800 text-xl">*</span>
              </label>
              <input
                className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full text-xl text-gray-300"
                placeholder=""
                type="date"
                name="date"
                id="date"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className=" font-lt text-gray-500" htmlFor="time">
                Time <span className="text-green-800 text-xl ">*</span>
              </label>
              <input
                className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full text-xl text-gray-300"
                placeholder=""
                type="time"
                name="time"
                id="time"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Description
            </label>
            <textarea
              className="border-2 p-2 bg-inherit border-gray-400 w-full h-16 focus:outline-none"
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-lt text-gray-500" htmlFor="guest">
              Location
            </label>
            <input
              className="border-b-2 border-gray-400 bg-inherit focus:outline-none w-full"
              placeholder=""
              type="location"
              name="location"
              id="location"
              required
            />
          </div>

          <div className="flex gap-6">
            <span className="font-lt text-gray-500 self-center">
              Event Image
            </span>

            <button className="hover:text-green-950 hover:bg-white text-sm text-gray-500 uppercase px-10 py-2 border border-gray-500 rounded">
              upload
            </button>
          </div>

          {/* submit button  */}
          <div className="flex justify-center pt-3">
            <button className="bg-green-900 hover:text-green-900 hover:bg-white text-white uppercase px-20 py-2 font-bold shadow-lg rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
