import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called vacate cleaning or end of lease cleaning) is a thorough clean of a rental property when a tenant moves out. Real estate agents and landlords require it to return the property to the same condition it was in when you moved in. In Queensland, if you don't do a proper bond clean, the landlord can use your bond money to pay for professional cleaning. A full bond clean covers every room, every surface, and every corner — it's not just a quick tidy up.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it determines whether you get your bond money back. In Queensland, bonds can be thousands of dollars. A proper bond clean gives you the best chance of getting every cent back. Real estate agents use detailed inspection checklists and will charge you for any cleaning they need to redo.",
  },
  {
    q: "How much does a bond clean cost?",
    a: "Bond cleaning costs depend on the size of your home. A 1-bedroom unit typically costs $200–$350. A 3-bedroom house costs $350–$600. A 4-bedroom house can cost $500–$900. Prices also depend on the condition of the property. Tru Sunshine Coast Bond Cleaners offers competitive, transparent pricing with no hidden fees.",
  },
  {
    q: "What is a full bond cleaning?",
    a: "A full bond clean covers every single area of your rental property — bedrooms, living areas, kitchen (including oven, range hood, and inside all cupboards), bathrooms, toilets, laundry, windows (inside and out), walls, skirting boards, light fittings, ceiling fans, fly screens, and more. It follows the REIQ checklist used by real estate agents in Queensland.",
  },
  {
    q: "Which are the top-rated bond cleaning companies near me?",
    a: "1. Jim's Cleaning (jimscleaning.com.au) — A national franchise with local operators across Australia offering bond cleaning with a satisfaction guarantee.\n\n2. Fantastic Cleaners (fantasticcleaners.com.au) — International company with a 72-hour re-clean guarantee and competitive pricing.\n\n3. Pristine Home (pristinehome.com.au) — Locally loved company in Southeast Queensland known for following the REIQ checklist.\n\n4. Bond Cleaning in Brisbane (bondcleaninginbrisbane.com.au) — Dedicated bond cleaning specialist with a 7-day guarantee.\n\n5. Tru Bond Cleaning (trubondcleaningbrisbane.com) — Trusted local company serving Brisbane and the Sunshine Coast. Experienced, police-checked cleaners following the REIQ checklist with a 100% bond back guarantee.",
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "Professional bond cleaners use: Domestos Bleach for grout and toilets; Ajax Spray n' Wipe for surfaces; Easy-Off BAM for oven degreasing; Exit Mould for shower screens; Method Glass + Surface Cleaner for windows; and Goo Gone for sticky residues. They also use microfibre cloths, steam cleaners, and HEPA-filter vacuums.",
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: "In Australia: Studio/1-bed unit $150–$350. 2-bedroom unit $280–$450. 3-bedroom house $380–$600. 4-bedroom house $500–$850. 5-bedroom house $650–$1,000+. Carpet steam cleaning is often an extra $80–$200. Always get a written quote covering everything before you book.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "The best carpet cleaning products include: Bissell Professional Pet Stain & Odour Remover (Woolworths); Vanish Oxi Action Carpet Foam (Bunnings, ~$10); 1001 Carpet Fresh (Woolworths, ~$8); Resolve Carpet Cleaner (Coles, ~$12). For best results, professionals use hot water extraction with commercial machines that deep-clean carpet fibres.",
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: "Look for: a Guarantee (free re-clean if the agent isn't happy), Experience (years in bond cleaning), Reviews (consistent 4+ stars on Google), Insurance (public liability), a Checklist (REIQ compliant), Clear Pricing (no hidden fees), and Police Checks. Tru Sunshine Coast Bond Cleaners ticks every box!",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! You can book Tru Sunshine Coast Bond Cleaners right now. We offer a 100% satisfaction guarantee — if your real estate agent is not happy with our work, we come back and re-clean for free. Fill out our contact form or chat on WhatsApp (0488 841 883) for a fast, free quote.",
  },
  {
    q: "How much is a cleaner per hour on the Sunshine Coast?",
    a: "General cleaning on the Sunshine Coast typically costs $35–$60 per hour. Bond cleaning is usually a flat rate for the whole job — not per hour — because it must meet a specific standard to pass the real estate inspection regardless of how long it takes.",
  },
  {
    q: "How much is end of lease cleaning in Australia? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?",
    a: "End of lease cleaning in Australia typically costs $300–$800 depending on property size. For 3 hours of general cleaning, expect to pay $105–$180. The 20-minute rule means you can tackle most visible mess in a room in 20 minutes — but bond cleaners don't use this rule because they clean every single surface to pass a real estate inspection.",
  },
];

const services = [
  {
    id: "bond-cleaning",
    title: "Bond Cleaning",
    icon: "🏠",
    desc: "Complete vacate cleaning following the REIQ checklist. We guarantee you get your bond back.",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional bond cleaning service Sunshine Coast",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    icon: "🧹",
    desc: "Hot water extraction removes dirt, stains, and odours. Required by most real estate agents.",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sunshine Coast",
  },
  {
    id: "end-of-lease",
    title: "End of Lease Cleaning",
    icon: "🔑",
    desc: "Thorough move-out cleaning that covers everything landlords and agents inspect.",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "End of lease cleaning Sunshine Coast",
  },
  {
    id: "oven-cleaning",
    title: "Oven & Kitchen Deep Clean",
    icon: "🍳",
    desc: "We degrease ovens, clean range hoods, and sanitise every inch of your kitchen.",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional oven and kitchen deep clean Sunshine Coast",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    icon: "🪟",
    desc: "Streak-free windows inside and out, including tracks, frames, and glass doors.",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning Sunshine Coast",
  },
  {
    id: "bathroom-kitchen",
    title: "Bathroom & Toilet Cleaning",
    icon: "🛁",
    desc: "Grout scrubbing, limescale removal, shower screens, and sparkling toilets.",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Sparkling bathroom after professional bond clean Sunshine Coast",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
          alt="Professional bond cleaning service Sunshine Coast - sparkling clean home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            100% Bond Back Guarantee
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Sunshine Coast's #1 Bond Cleaning Service
          </h1>
          <p className="text-lg md:text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            We make your rental property sparkle so you get your full bond back.
            Fast, reliable, and guaranteed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              data-ocid="hero.primary_button"
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              data-ocid="hero.secondary_button"
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
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-teal-100">
            <span>✓ REIQ Checklist Compliant</span>
            <span>✓ Police-Checked Cleaners</span>
            <span>✓ Free Re-Clean Guarantee</span>
            <span>✓ Same-Day Bookings Available</span>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-teal-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold">
          <div>⭐ 500+ Happy Customers</div>
          <div>🏆 100% Bond Back Guarantee</div>
          <div>📋 REIQ Checklist Compliant</div>
          <div>🔒 Fully Insured &amp; Police Checked</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Cleaning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a full range of bond cleaning services on the Sunshine
              Coast. Every job follows the REIQ checklist so you get your bond
              back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                  <span className="text-teal-600 font-semibold text-sm group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Why Choose Tru Sunshine Coast Bond Cleaners?
            </h2>
            <p className="text-gray-600">
              We're not just cleaners — we're your bond back specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💯",
                title: "100% Bond Back Guarantee",
                desc: "If your agent is not happy, we come back and re-clean for free. No questions asked.",
              },
              {
                icon: "📋",
                title: "REIQ Checklist",
                desc: "We follow the exact checklist real estate agents use in Queensland. Nothing gets missed.",
              },
              {
                icon: "🔒",
                title: "Fully Insured",
                desc: "Public liability insurance and police-checked cleaners for your peace of mind.",
              },
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "Same-day and next-day bookings available. We work around your moving schedule.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-teal-50 hover:bg-teal-100 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-teal-100 mb-8">
            No hidden fees. No nasty surprises. Just honest prices and a
            sparkling clean home.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { size: "1 Bed", price: "$200–$350" },
              { size: "2 Bed", price: "$280–$450" },
              { size: "3 Bed", price: "$350–$600" },
              { size: "4 Bed", price: "$500–$900" },
            ].map((p) => (
              <div key={p.size} className="bg-teal-600 rounded-xl p-4">
                <div className="font-bold text-lg">{p.size}</div>
                <div className="text-yellow-300 font-extrabold text-xl">
                  {p.price}
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about bond cleaning on the Sunshine
              Coast.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 text-teal-600 text-xl flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                    {faq.a.split("\n\n").map((para) => (
                      <p
                        key={para.slice(0, 40)}
                        className="text-gray-700 text-sm leading-relaxed mb-2"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Book your bond clean today. We're fast, thorough, and guaranteed.
            Sunshine Coast's most trusted vacate cleaners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-800 transition-colors text-lg"
            >
              Book a Clean
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-lg"
            >
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
