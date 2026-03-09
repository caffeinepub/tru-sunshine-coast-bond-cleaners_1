import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SUBURBS } from "../data/suburbs";

const whatWeClean = [
  { icon: "🛏️", label: "Bedrooms" },
  { icon: "🍳", label: "Kitchen & Oven" },
  { icon: "🚿", label: "Bathrooms" },
  { icon: "🧹", label: "Carpets" },
  { icon: "🪟", label: "Windows" },
  { icon: "🧱", label: "Walls & Skirting Boards" },
];

const pricing = [
  { size: "1 Bedroom", price: "$200–$350" },
  { size: "2 Bedrooms", price: "$280–$450" },
  { size: "3 Bedrooms", price: "$350–$600" },
  { size: "4 Bedrooms", price: "$500–$900" },
];

export default function SuburbPage() {
  const { slug } = useParams<{ slug: string }>();
  const suburb = SUBURBS.find((s) => s.slug === slug);

  useEffect(() => {
    if (!suburb) {
      document.title = "Suburb Not Found | Tru Sunshine Coast Bond Cleaners";
      return;
    }

    document.title = suburb.metaTitle;

    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = suburb.metaDescription;

    let ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = suburb.metaTitle;

    let ogDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = suburb.metaDescription;
  }, [suburb]);

  if (!suburb) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            Area Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find a page for that suburb.
          </p>
          <Link
            to="/"
            className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = suburb.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-100 border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <Link
            to="/#areas-we-serve"
            className="hover:text-teal-600 transition-colors"
          >
            Areas We Serve
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-gray-900 font-medium">{suburb.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/suburb-bond-cleaning-sunshine-coast.dim_1200x600.jpg"
          alt={`Bond cleaning service in ${suburb.name}, Sunshine Coast`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 to-teal-700/65" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            100% Bond Back Guarantee
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {suburb.h1}
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
            {suburb.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-ocid="suburb.whatsapp_button"
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="WhatsApp"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              data-ocid="suburb.quote_button"
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 50)}
                className="text-gray-700 text-base leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
          </article>

          {/* Local Facts */}
          <div className="mt-10 bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-teal-800 mb-4">
              Bond Cleaning Facts for {suburb.name}
            </h2>
            <ul className="space-y-3">
              {suburb.localFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-teal-900">
                  <span className="text-teal-500 font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            What We Clean in {suburb.name}
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Every bond clean covers the full property — nothing gets missed.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {whatWeClean.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            Bond Cleaning Prices in {suburb.name}
          </h2>
          <p className="text-teal-100 mb-8">
            Honest, transparent pricing with no hidden fees.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pricing.map((p) => (
              <div key={p.size} className="bg-teal-600 rounded-xl p-4">
                <div className="font-bold text-base">{p.size}</div>
                <div className="text-yellow-300 font-extrabold text-xl mt-1">
                  {p.price}
                </div>
              </div>
            ))}
          </div>
          <p className="text-teal-200 text-sm mb-6">
            Final price depends on property size and condition. Carpet steam
            cleaning is available as an add-on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-ocid="suburb.whatsapp_button"
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              WhatsApp: 0488 841 883
            </a>
            <Link
              data-ocid="suburb.contact_link"
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Get a Written Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Ready to Book Your {suburb.name} Bond Clean?
          </h2>
          <p className="text-gray-600 mb-8">
            We are local, reliable, and we back every job with a 100% bond back
            guarantee. Get in touch today for a fast, free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-ocid="suburb.whatsapp_button"
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="WhatsApp"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              data-ocid="suburb.quote_button"
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Book a Clean
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
