import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="bg-teal-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Tru Sunshine Coast Bond Cleaners
        </h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-lg">
          Local bond cleaning specialists who care about getting your bond back.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tru Sunshine Coast Bond Cleaners is a locally owned and operated
              vacate cleaning company based on the Sunshine Coast, Queensland.
              We started because we saw too many good tenants lose their
              hard-earned bond money over cleaning issues that could easily have
              been fixed with the right team on the job.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team knows exactly what real estate agents look for during
              final bond inspections. We follow the REIQ exit condition
              checklist on every single job — the same checklist your property
              manager uses. That means nothing gets missed, and nothing gets
              charged back to you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're proud to be part of the Sunshine Coast community. We work
              with tenants, landlords, and property managers across Noosa,
              Maroochydore, Caloundra, Buderim, Coolum, and every suburb in
              between.
            </p>
          </div>
          <div>
            <img
              src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
              alt="Tru Sunshine Coast Bond Cleaners team at work"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌟",
              title: "Our Mission",
              desc: "To give every tenant on the Sunshine Coast the best possible chance of getting their full bond back. We clean like it's our own home.",
            },
            {
              icon: "💪",
              title: "Our Values",
              desc: "Honesty, hard work, and attention to detail. We show up on time, do the job properly, and stand behind our work with a guarantee.",
            },
            {
              icon: "🤝",
              title: "Our Promise",
              desc: "If your real estate agent finds anything we missed, we come back and fix it for free. No arguments, no excuses. That's the Tru guarantee.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-teal-50 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact us today for a free quote. We service all areas of the
            Sunshine Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-400"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-400"
            >
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
