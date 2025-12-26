export default function Services() {
  // Example list of services
  const services = [
    {
      id: 1,
      title: "Civil Litigation",
      description:
        "Representing clients in civil disputes including contracts, property, and personal injury matters.",
    },
    {
      id: 2,
      title: "Family Law",
      description:
        "Assisting with divorce, child custody, support agreements, and other family law matters.",
    },
    {
      id: 3,
      title: "Estate Planning",
      description:
        "Creating wills, trusts, and estate plans to protect your assets and ensure your wishes are followed.",
    },
    {
      id: 4,
      title: "Corporate Law",
      description:
        "Providing guidance on business formation, compliance, contracts, and corporate governance.",
    },
    {
      id: 5,
      title: "Real Estate Law",
      description:
        "Handling property transactions, disputes, and legal documentation for residential and commercial properties.",
    },
    {
      id: 6,
      title: "Legal Consultation",
      description:
        "Offering expert legal advice for individuals and businesses to navigate complex legal issues.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Solnik & Solnik Professional Corporation offers a full range of legal services to
          meet the needs of our clients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 rounded-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}