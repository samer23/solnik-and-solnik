export default function CivilLitigation() {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-8 space-y-6">
      {/* Back to Services */}
      <a
        href="/services"
        className="inline-block text-yellow-600 hover:text-yellow-200 transition mb-4"
      >
        ← Go back to Services
      </a>

      {/* Page content */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
        Civil Litigation
      </h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        Solnik and Solnik PC handles matters involving a lawsuit resulting from a dispute
        between private parties (individuals or corporations). Cases falling under the Civil
        Litigation area of the Law are usually concerning matters such as breach of contract,
        debt collection, malpractice or injury. If you have any questions or concerns involving
        a Civil Litigation case please call Solnik and Solnik PC at 416-767-7506.
      </p>
    </div>
  );
}
