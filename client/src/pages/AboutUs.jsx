import manny_solnik from '../assets/team_members/manny_solnik.jpg'

export default function AboutUs() {
  const team = [
    {
      name: "Manny Solnik",
      title: "Founding Partner",
      bio: `Manny S. Solnik was born in Toronto and graduated from York University in 1988. He graduated from Law School at the University of Alberta in 1991. He was called
      to the Ontario Bar in 1993. Manny is a lawyer, notary and Senior Partner of Solnik and Solnik Professional Corporation. Manny’s practice focuses primarily in the areas
      of Litigation including Serious Personal Injury, Wrongful Death, Medical Malpractice Litigation, Employment Law, Wrongful Dismissal, Human Rights and Civil Litigation.
      He also acts as General and Special Counsel to various large and small private and public companies as it relates to General corporate matters including corporate
      structuring, capital markets, debt and equity  financing, mergers and acquisitions and special legal projects. Manny is Past Chairman and a current member of the Board
      of Directors of the Junction Business Improvement Area in Toronto and is a member of the Law Society of Upper Canada, The Ontario Bar Association, The Canadian Bar
      Association, the Advocates Society, the American Association of Justice, the Ontario Trial Lawyers Association and the Toronto Lawyers Association. Manny has appeared
      before the Ontario Court of Appeal and at all levels of Ontario Trial Courts. Manny has appeared at hearings in front of various boards and tribunals.`,
      image: {manny_solnik},
    },
    {
      name: "Sidney Solnik (Retired)",
      title: "Partner",
      bio: `Sidney Solnik was born in Toronto and graduated as a pharmacist in 1957. He became a lawyer and Notary and graduated from Osgoode Hall Law School in 1961.
      He is the founder and a senior partner of Solnik and Solnik Professional Corporation which has been serving the West Toronto Community for about 50 years.
      Mr. Solnik’s practice focuses on the areas of Real Estate, Wills and Estates including Estate Planning and Tax planning, complex commercial transactions and commercial
      litigation and appearance before various tribunals. Mr. Solnik is Past Chair of the Junction Business Improvement Area in Toronto, a member of the Toronto lawyers
      association, Ontario Bar Association and Canadian Bar Association. Mr. Solnik has appeared in many levels of Courts in Ontario.`,
      image: "/images/jane-solnik.jpg",
    }
  ]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At Solnik & Solnik Professional Corporation, our team is dedicated to
          delivering trusted legal counsel with integrity, experience, and care.
        </p>
      </div>

      {/* Team Members */}
      <div className="space-y-16">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col md:flex-row gap-10 items-start"
          >
            {/* Photo */}
            <div className="w-full md:w-1/4 flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full max-w-[220px] rounded-md shadow object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-3/4">
              <h2 className="text-2xl font-semibold text-blue-900">
                {member.name}
              </h2>

              <p className="mt-1 text-sm font-medium text-yellow-600">
                {member.title}
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
