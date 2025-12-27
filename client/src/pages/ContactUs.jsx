import SubmitEmail from "../components/SubmitEmail"

export default function ContactUs() {
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
        <form onSubmit={SubmitEmail} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"            
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              type="text"
              placeholder="Your Message"
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
            <strong>Address:</strong> 2991 Dundas St W, Toronto, ON M6P 1Z4
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
          <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}