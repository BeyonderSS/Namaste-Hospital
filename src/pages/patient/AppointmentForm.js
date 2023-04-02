import { useRouter } from "next/router";
import { useState } from "react";
import Room from "../room/[id]";

const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const joinRoom = () => {
    // Use the `router` object to navigate to the selected room.
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="items-center justify-center flex pt-14">
      <form
        className="bg-white w-[1000px] rounded-lg shadow-md p-8"
        onSubmit={joinRoom}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
          Book an Appointment
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formValues.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formValues.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={formValues.phone}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formValues.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Time<span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formValues.time}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Reason for Appointment<span className="text-red-500">*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="3"
              required
              value={formValues.reason}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
            ></textarea>
          </div>
        </div>
        <div className="text-center mt-8">
          {/* Join an existing room section */}
          <div className="flex items-center mb-4">
            {/* Room name input field */}

            <input
              onChange={(e) => setRoomName(e.target.value)}
              value={roomName}
              placeholder="Enter room name"
              className="form-input flex-1 mr-2 py-2 px-3 block w-full rounded-md border-gray-300 shadow-sm transition-duration-150 focus:outline-none focus:border-blue-300"
              required
            />
            <div></div>
            {/* Join room button */}
            <button
              type="submit"
              className={`${
                roomName
                  ? "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white"
                  : "bg-gray-400 cursor-not-allowed"
              } rounded-lg px-4 py-2 transition-colors duration-200`}
              disabled={!roomName}
              onClick={joinRoom}
            >
              Join Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
