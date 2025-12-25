import group_photo from '../assets/group_photo.webp'

export default function Home() {
    return (
    <div className="bg-white text-gray-800">
        {/* Top Section: Meet the Team */}
        <section className="bg-blue-900 py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Meet the Team</h2>
                <img
                src={group_photo}
                alt="Our Team"
                className="w-full sm:w-4/5 md:w-4/5 lg:w-3/4 xl:w-3/4 h-auto rounded-lg shadow-lg object-cover mx-auto mb-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <p className="text-white text-base sm:text-lg leading-relaxed">
                    Solnik and Solnik Professional Corporation, based in Toronto’s West End, has served the community for over 55 years. The firm represents families and businesses of all sizes across the Greater Toronto Area. Known for its respected and caring practice, Solnik and Solnik handles areas including Personal Injury, Medical Malpractice, Employment Law, Real Estate, Estate Planning, Powers of Attorney, Corporate, Securities, and Commercial Law, with local and international associates to support clients’ legal needs.
                </p>
            </div>
        </section>

        {/* Help Section */}
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Need Help Section */}
            <div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                Seeking Legal Help? We're here for you!
                </h3>
                <p className="text-gray-700 mb-6">
                Our experienced legal team can assist you with matters including corporate law, family law, real estate, and more.
                If you need guidance, don’t hesitate to contact us.
                </p>
            </div>

            {/* Right: Contact Us Section */}
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-white mb-4">
                Reach out today to schedule a consultation with one of our professionals.
                </p>
                <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </section>

        {/* Legal Specializations Section */}
        <section className="bg-blue-900 p-8 sharp-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Our Legal Specializations
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">CIVIL LITIGATION</span>
                <span>We represent individuals and businesses in civil litigation, including disputes such as breach of contract.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">COMMERCIAL LITIGATION</span>
                <span>We handle commercial litigation matters, including partnership disputes, employer–employee conflicts, and injunctions against former employees.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">CORPORATE</span>
                <span>We represent clients from small businesses to large corporations, offering services from basic incorporations to complex reorganizations and mergers and acquisitions.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">DEBT COLLECTION</span>
                <span>We represent individuals and corporations seeking to collect debts arising from promissory notes, mortgages, and other loan transactions.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">EMPLOYMENT LAW</span>
                <span>We represent both employers and employees, providing advice on wrongful dismissal, termination issues, and severance packages.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">GENERAL COUNSEL</span>
                <span>We represent small and mid-sized businesses that need ongoing legal support without a full-time in-house lawyer, providing general assistance across a wide range of matters.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">MEDICAL MALPRACTICE</span>
                <span>We handle serious medical malpractice cases and advise clients to contact the firm promptly for proper assistance.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">POWER OF ATTORNEY</span>
                <span>A Power of Attorney is a document that allows you to appoint someone to act on your behalf during your lifetime.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">PRODUCT LIABILITY</span>
                <span>If you or a loved one has been injured by a defective product, contact Solnik and Solnik for a free initial consultation and advice on your legal rights.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">REAL ESTATE</span>
                <span>We have over 50 years of experience advising buyers and sellers on residential and commercial real estate transactions.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">PERSONAL INJURY</span>
                <span>We have been assisting people who have been injured and whose loved ones have been killed, and/or who are experiencing difficulties with their insurance companies.</span>
            </div>
            </li>

            <li className="flex flex-row items-start gap-3 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg">
            <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
            <div className="flex-1">
                <span className="font-bold block">WILLS & ESTATES</span>
                <span>We have over 55 years of experience in estate planning and handling wills and estate matters.</span>
            </div>
            </li>
        </ul>
        </section>
      
        {/* Google Maps Section */}
        <section className="bg-green-50 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold text-blue-900 mb-8">
                Our Location
            </h3>
            <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <iframe
                title="Legal Firm Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.17352218857!2d-79.47168082431547!3d43.6653608711016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34206a46434b%3A0xf504593875f1eb24!2s2991%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M6P%201Z4!5e0!3m2!1sen!2sca!4v1766535687194!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                ></iframe>
            </div>
            </div>
        </section>
    </div>
  );
}