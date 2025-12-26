import { useState } from "react";

export default function News() {
  // Example news items, replace with API data if needed
  const [newsItems] = useState([
    {
      id: 1,
      title: "New Legislation Impacting Real Estate Law",
      date: "December 1, 2025",
      summary:
        "Learn about the latest changes to real estate regulations and how they may affect property transactions in Ontario.",
      link: "/news/real-estate-law-update",
    },
    {
      id: 2,
      title: "Solnik & Solnik Recognized as Top Litigation Firm",
      date: "November 20, 2025",
      summary:
        "We are proud to announce our firm has been recognized for excellence in civil litigation by the Ontario Law Review.",
      link: "/news/top-litigation-firm",
    },
    {
      id: 3,
      title: "Tips for Effective Estate Planning",
      date: "November 5, 2025",
      summary:
        "Our attorneys share best practices for ensuring your estate plan protects your family and assets.",
      link: "/news/estate-planning-tips",
    },
  ]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Latest News</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Stay up-to-date with the latest legal developments and firm announcements.
        </p>
      </div>

      {/* News Items */}
      <div className="grid md:grid-cols-2 gap-10">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{item.date}</p>
            <p className="text-gray-700 mb-4">{item.summary}</p>
            <a
              href={item.link}
              className="text-blue-900 font-medium hover:text-yellow-500 transition"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}