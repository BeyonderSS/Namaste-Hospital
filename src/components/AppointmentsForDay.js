import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function AppointmentsForDay() {
  const [appointments, setAppointments] = useState([]);
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  // Dummy data for testing purposes
  const dummyData = [
    {
      id: 1,
      time: { start: "9:00 AM", end: "10:00 AM" },
      patientName: "John Doe",
    },
    {
      id: 2,
      time: { start: "10:30 AM", end: "11:30 AM" },
      patientName: "Jane Smith",
    },
    {
      id: 3,
      time: { start: "12:00 PM", end: "1:00 PM" },
      patientName: "Bob Johnson",
    },
    {
      id: 4,
      time: { start: "2:00 PM", end: "3:00 PM" },
      patientName: "Alice Lee",
    },
  ];

  useEffect(() => {
    // Fetch data here
    setAppointments(dummyData);
  }, []);

  const joinRoom = () => {
    // Use the `router` object to navigate to the selected room.
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`);
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
        Appointments for Today
      </h1>

      {appointments.map((appointment) => (
        <li key={appointment.id} className="py-4 flex space-x-3">
          <ClockIcon className="h-7 w-7 text-gray-600 flex-shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-gray-800">
              {appointment.patientName}
            </p>
            <p className="text-sm text-gray-500">{`${appointment.time.start} - ${appointment.time.end}`}</p>
          </div>
          <button
            onClick={joinRoom}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white rounded-lg px-4 py-2 mb-4 mr-2 transition-colors duration-200"
          >
            Host a Meeting
          </button>
        </li>
      ))}
    </div>
  );
}
