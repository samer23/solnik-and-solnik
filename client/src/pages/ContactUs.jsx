import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., send to email or backend)
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Have questions or need legal advice? Contact our office using the form
          below, or reach out directly using our contact information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>

        {/* Office Information */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-blue-900">Our Office</h2>
          <p>
            <strong>Address:</strong> 123 Legal St, Suite 400, Toronto, ON, M5J 2N1
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+4167677506" className="text-blue-900 hover:text-yellow-500">
              (416) 767-7506
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@solnikandsolnik.com" className="text-blue-900 hover:text-yellow-500">
              info@solnikandsolnik.com
            </a>
          </p>

          <h3 className="text-xl font-semibold text-blue-900">Office Hours</h3>
          <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
          <p>Saturday: By Appointment</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}