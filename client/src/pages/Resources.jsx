export default function Resources() {
  // Example resources list
  const resources = [
    {
      id: 1,
      title: "Understanding Civil Litigation",
      type: "Article",
      summary:
        "An overview of civil litigation processes and what clients can expect.",
      link: "/resources/civil-litigation",
    },
    {
      id: 2,
      title: "Estate Planning Guide",
      type: "PDF",
      summary: "Download our comprehensive estate planning guide (PDF).",
      link: "/resources/estate-planning-guide.pdf",
    },
    {
      id: 3,
      title: "Business Law Checklist",
      type: "Guide",
      summary:
        "Checklist for small business owners to ensure compliance with Ontario law.",
      link: "/resources/business-law-checklist",
    },
    {
      id: 4,
      title: "Legal Terminology Glossary",
      type: "Article",
      summary: "Common legal terms explained in plain English.",
      link: "/resources/legal-terminology",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Legal Resources</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Explore our collection of legal guides, articles, and resources to
          help you better understand the law and your rights.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {resources.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-semibold text-blue-900">{item.title}</h2>
              <span className="text-sm font-medium text-yellow-600">{item.type}</span>
            </div>
            <p className="text-gray-700 mb-4">{item.summary}</p>
            <a
              href={item.link}
              className="text-blue-900 font-medium hover:text-yellow-500 transition"
            >
              Access Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}