export default function Resources() {
  const resourceCategories = [
    {
      category: "Government of Ontario",
      resources: [
        { title: "Government of Ontario", link: "https://www.ontario.ca/", type: "Website" },
        { title: "Employment", link: "https://www.ontario.ca/page/employment", type: "Website" },
        { title: "Ministry of Labour – Employment Standards", link: "https://www.ontario.ca/page/employment-standards", type: "Website" },
        { title: "Ministry of Labour – Occupational Health and Safety", link: "https://www.ontario.ca/page/occupational-health-and-safety", type: "Website" },
        { title: "Office of the Employer Advisor", link: "https://www.ontario.ca/page/office-employer-advisor", type: "Website" },
        { title: "Ontario Labour Relations Board", link: "https://www.olrb.gov.on.ca/", type: "Website" },
        { title: "Information and Privacy Commissioner / Ontario", link: "https://www.ipc.on.ca/", type: "Website" },
        { title: "Employment Insurance", link: "https://www.canada.ca/en/services/benefits/ei.html", type: "Website" },
        { title: "HRDC website", link: "https://www.canada.ca/en/employment-social-development.html", type: "Website" },
      ],
    },
    {
      category: "Legal Resources",
      resources: [
        { title: "Guide to the Ontario Courts", link: "https://www.ontariocourts.ca/", type: "Website" },
        { title: "Canada Judges Home Page", link: "https://www.fja-cmf.gc.ca/", type: "Website" },
        { title: "Access to Justice Net", link: "https://www.accessjustice.ca/", type: "Website" },
        { title: "Findlaw", link: "https://www.findlaw.com/", type: "Website" },
        { title: "Human Rights Commissions", link: "#", type: "Website" },
        { title: "Ontario Human Rights Commission", link: "https://www.ohrc.on.ca/", type: "Website" },
        { title: "Canadian Human Rights Commission", link: "https://www.chrc-ccdp.gc.ca/", type: "Website" },
      ],
    },
    {
      category: "Ontario Legislation",
      resources: [
        { title: "Employment Standards Act, 2000", link: "https://www.ontario.ca/laws/statute/00e41", type: "Act" },
        { title: "Human Rights Code", link: "https://www.ontario.ca/laws/statute/90h19", type: "Act" },
        { title: "Labour Relations Act, 1995", link: "https://www.ontario.ca/laws/statute/95l01", type: "Act" },
        { title: "Occupational Health and Safety Act", link: "https://www.ontario.ca/laws/statute/90o01", type: "Act" },
        { title: "Pay Equity Act", link: "https://www.ontario.ca/laws/statute/95p11", type: "Act" },
        { title: "Pension Benefits Act", link: "https://www.ontario.ca/laws/statute/90p08", type: "Act" },
        { title: "Workplace Safety and Insurance Act", link: "https://www.ontario.ca/laws/statute/97w16", type: "Act" },
      ],
    },
    {
      category: "Legal Dictionaries & Organizations",
      resources: [
        { title: "Law.com Dictionary", link: "http://dictionary.law.com", type: "Website" },
        { title: "Reference.com Legal Dictionary", link: "http://dictionary.reference.com/legal", type: "Website" },
        { title: "The Advocates Society", link: "http://www.advocates.ca/", type: "Website" },
        { title: "The Ontario Trial Lawyers Association", link: "http://www.otla.com", type: "Website" },
      ],
    },
    {
      category: "Medical / Injury Support",
      resources: [
        { title: "Canadian Spinal Research Organization", link: "https://www.canadian-spinal-research.org/", type: "Website" },
        { title: "Brain Injury Association USA", link: "https://www.biausa.org/", type: "Website" },
        { title: "International Brain Injury Association", link: "https://www.internationalbrain.org/", type: "Website" },
        { title: "Active Living Alliance", link: "https://www.ala.ca/", type: "Website" },
        { title: "CHIRS: Community Head Injury Rehabilitation Services", link: "https://chirs.org/", type: "Website" },
      ],
    },
    {
      category: "Municipal / Local Resources",
      resources: [
        { title: "City of Toronto", link: "https://www.toronto.ca/", type: "Website" },
        { title: "TTC", link: "https://www.ttc.ca/", type: "Website" },
        { title: "Toronto Health and Hospital Links", link: "https://www.toronto.ca/community-people/health-wellness/", type: "Website" },
        { title: "Toronto.com", link: "https://www.toronto.com/", type: "Website" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Legal Resources</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Explore our collection of legal guides, articles, and resources to help you better understand the law and your rights.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="space-y-12">
        {resourceCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.resources.map((item, idy) => (
                <div
                  key={idy}
                  className="border border-gray-200 rounded-md p-4 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-blue-900">{item.title}</h3>
                    <span className="text-sm font-medium text-yellow-600">{item.type}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-medium hover:text-yellow-500 transition"
                  >
                    Access Resource →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
