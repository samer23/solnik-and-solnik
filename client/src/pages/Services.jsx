import DisplayService from "../components/DisplayService";
import { Link } from "react-router-dom"

export default function Services() {
  // Example list of services
  const services = [
    {
      id: 1,
      title: "Civil Litigation",
      description:
        "Representing clients in civil disputes including contracts, property, and personal injury matters.",
      longDescription:
        "Solnik and Solnik PC handles matters involving a lawsuit resulting from a dispute between private parties (individuals or corporations). Cases falling under the Civil Litigation area of the Law are usually concerning matters such as breach of contract, debt collection, malpractice or injury. If you have any questions or concerns involving a Civil Litigation case please call Solnik and Solnik PC at 416-767-7506."
    },
    {
      id: 2,
      title: "Commercial Litigation",
      description:
        "We handle commercial litigation matters, including partnership disputes, employer–employee conflicts, and injunctions against former employees.",
      longDescription:
        "Solnik and Solnik PC handles Commercial Litigation matters such as partnership disputes, disputes between employer and former employees, injunctions relating to restraining a former employee from breaching an Employment Agreement and various other commercial disputes relating to both private and public companies and the enforcement of individual and corporate rights."
    },
    {
      id: 3,
      title: "Corporate",
      description:
        "Providing guidance on business formation, compliance, contracts, and corporate governance.",
      longDescription:
        "Solnik and Solnik PC acts for clients ranging from small businesses to large corporate clients. We offer a wide range of services from simple incorporations to complex re-organizations, mergers and acquisitions involving both private and public companies. If you are thinking of incorporating your business or taking your business public, our lawyers will guide you through the process in an efficient and professional way so that you understand the process and are confident that our firm will provide support during all phases of the growth. Our firm incorporates non-profit and charitable organizations and will assist in that regard."
    },
    {
      id: 4,
      title: "Debt Collection",
      description:
        "We represent individuals and corporations seeking to collect debts arising from promissory notes, mortgages, and other loan transactions.",
      longDescription:
        "Solnik and Solnik PC acts for both individuals and Corporations who are owed money either by way of a promissory note, mortgage or other loan type transaction and require counsel to assist in collection on their behalf. We will also assist in the enforcement of Judgments by various means including conducting judgement debtor examinations, enforcing executions including foreclosure and power of sale under a mortgage and other matters relating to same."
    },
    {
      id: 5,
      title: "Employment Law",
      description:
        "We represent both employers and employees, providing advice on wrongful dismissal, termination issues, and severance packages.",
      longDescription:
        ""
    },
    {
      id: 6,
      slug: "general-counsel",
      title: "General Counsel",
      description:
        ".",
    },
    {
      id: 7,
      slug: "general-malpractice",
      title: "General Malpractice",
      description:
        ".",
    },
    {
      id: 8,
      slug: "power-of-attorney",
      title: "Power of Attorney",
      description:
        ".",
    },
    {
      id: 9,
      slug: "product-liability",
      title: "Product Liability",
      description:
        ".",
    },
    {
      id: 10,
      slug: "real-estate",
      title: "Real Estate",
      description:
        ".",
    },
    {
      id: 11,
      slug: "personal-injury",
      title: "Personal Injury",
      description:
        ".",
    },
    {
      id: 12,
      slug: "wills-and-estates",
      title: "Wills & Estates",
      description:
        ".",
    }
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
        <p className="mt-1 text-yellow-600 max-w-3xl mx-auto">
          Click any of the sections below to learn more about how we can support you.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Link to={`/display-service/${service.id}`} className="border border-gray-200 rounded-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}