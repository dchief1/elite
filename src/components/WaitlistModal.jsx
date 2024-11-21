import React, { useState } from "react";

const WaitlistModal = ({ onClose }) => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data with correct parameter names
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    try {
      // Send the data to the API using fetch
      const response = await fetch("http://localhost:8080/api/v1/waitlists/add", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(formData), // Send form data as a JSON string
      });

      // Handle the response
      if (response.ok) {
        // Successfully added to waitlist
        console.log("Waitlist successfully added:", formData);
        // Optionally, close the modal or clear the form
        setFirstName("");
        setLastName("");
        setEmail("");
        onClose(); // Close the modal after successful submission
      } else {
        // Handle error if the response is not ok
        console.error("Failed to add to waitlist:", response.statusText);
      }
    } catch (error) {
      // Catch network or other errors
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4 text-[#000000]">Join The Waitlist</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="border border-gray-300 text-gray-700 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="border border-gray-300 text-gray-700 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 text-gray-700 rounded-lg w-full px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-purple-500 text-white rounded-lg w-full py-3 mt-4 hover:bg-purple-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;
