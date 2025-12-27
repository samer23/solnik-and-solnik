import { useParams } from "react-router-dom"

// Import the SubmitEmail component
import SubmitEmail from './SubmitEmail.jsx'

// Import all the service pages
import CivilLitigation from "./services/civilLitigation"
import CommercialLitigation from "./services/CommercialLitigation"

export default function DisplayService() {
    const { id } = useParams()

    // Map to connect IDs to the service pages
    const serviceMap = {
        1: CivilLitigation,
        2: CommercialLitigation,
    }

    const ServiceComponent = serviceMap[id]

    if (!ServiceComponent) {
        return (
            <div className="p-4">
                {/* Back to Services */}
                <a href="/services" className="text-yellow-600 hover:text-yellow-200 transition mb-6 inline-block">
                    ← Go back to Services
                </a>
                <p className="mt-4 text-red-600">Service not found</p>
            </div>
        )
    }

    return (
        <div className="p-4 space-y-10">
            {/* Service content */}
            <ServiceComponent />

            {/* Contact Form Section */}
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Contact Us About This Service
            </h2>

            <form onSubmit={SubmitEmail} className="space-y-5">
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={5}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition"
                >
                    Send Message
                </button>
            </form>
            </div>
        </div>
    )
}