import { Link } from "react-router-dom";

const services = [
  {
    id: "bond-cleaning",
    title: "Bond Cleaning / Vacate Cleaning",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional bond cleaning service Sunshine Coast - sparkling clean home",
    description: `Bond cleaning — also called vacate cleaning or end of lease cleaning — is the most important clean you'll ever do in a rental property. When you move out, your landlord or real estate agent inspects the property against a detailed checklist. If anything doesn't meet the required standard, they take money from your bond to pay for cleaning. That's why getting a proper bond clean is so important.

At Tru Sunshine Coast Bond Cleaners, we follow the REIQ (Real Estate Institute of Queensland) checklist for every single job. This is the same checklist your real estate agent uses during the final inspection. We cover every room in the house — bedrooms, living areas, dining rooms, hallways, and staircases.

Our kitchen clean is one of the most thorough on the Sunshine Coast. We degrease the oven inside and out, clean the range hood, wipe down all benchtops, clean inside every cupboard and drawer, and sanitise the sink, taps, and splashback. Kitchens are one of the most common reasons tenants lose part of their bond — and we make sure yours passes every time.

In the bathrooms, we remove limescale from taps, clean and shine the shower screens, scrub grout lines, sanitise the toilet, and wipe down vanities, mirrors, and exhaust fans. We also clean the laundry, including the tub, taps, and lint filter.

Throughout the whole property, we wipe down walls, clean skirting boards, dust and wipe light fittings, clean ceiling fans, and wipe all door frames and handles. We vacuum and mop all floors and clean window tracks and frames.

When we're done, we give you a detailed checklist showing everything we've cleaned. If your real estate agent finds anything we missed, we come back and re-clean that area for free. That's our 100% bond back guarantee — and we mean it.`,
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sunshine Coast - hot water extraction",
    description: `Carpets are one of the most inspected items during a final bond inspection. Even if your carpets look clean to the naked eye, real estate agents often require professional steam cleaning as part of the bond cleaning process — especially if you have pets. At Tru Sunshine Coast Bond Cleaners, our professional carpet steam cleaning service uses hot water extraction to remove deep-seated dirt, allergens, stains, and odours.

Hot water extraction is the most effective carpet cleaning method available. Our machines inject hot water mixed with a safe, biodegradable cleaning solution deep into the carpet fibres. This loosens dirt, bacteria, and allergens that regular vacuuming can't reach. The machine then extracts all the water along with the dirt, leaving your carpets clean, fresh, and only slightly damp. Carpets typically dry in 2–4 hours.

Under the RTRA Act in Queensland, tenants are required to return the property in the same condition it was in at the start of the tenancy. Most lease agreements specify that professional carpet cleaning is required at the end of tenancy. If you don't get the carpets professionally cleaned, the property manager can use your bond to pay for it.

Our carpet cleaning team is experienced with all types of carpet — loop pile, cut pile, wool blends, and synthetic fibres. We pre-treat any stains before the main cleaning process to give the best chance of complete removal. We also treat pet odours with a specialised enzyme-based deodoriser.

We carry our own professional-grade carpet cleaning equipment to every job. After cleaning, we provide a receipt you can show your real estate agent as proof of professional carpet cleaning.`,
  },
  {
    id: "end-of-lease",
    title: "End of Lease Cleaning",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "End of lease cleaning Sunshine Coast - thorough move-out clean",
    description: `Moving out of a rental is stressful. There are boxes to pack, utilities to disconnect, forwarding addresses to update — and then there's the final clean. End of lease cleaning is not just a regular house clean. It's a detailed, top-to-bottom scrub of every surface in the property, designed to meet the exact standard your real estate agent expects.

At Tru Sunshine Coast Bond Cleaners, we take all the stress out of moving day. Our experienced end of lease cleaning team arrives on time with all the equipment and products needed to get the job done right. We don't need anything from you — no vacuum, no mop, no cleaning products. We bring everything.

The difference between a regular clean and an end of lease clean comes down to detail. A regular clean keeps a home tidy week to week. An end of lease clean covers everything a landlord or property manager checks during a final inspection. That includes things most people forget — inside oven drawers, the top of the fridge, inside the dishwasher, the seals around doors and windows, exhaust fans, light fittings, and the inside of wardrobes.

We work through a 100-point checklist that mirrors the REIQ exit condition report. Our goal is simple: when the agent walks through after our clean, they can't find a single thing to complain about.

Contact Tru Sunshine Coast Bond Cleaners today for a free quote on your end of lease clean. We service all areas of the Sunshine Coast including Noosa, Caloundra, Maroochydore, Buderim, and beyond.`,
  },
  {
    id: "oven-cleaning",
    title: "Oven & Kitchen Deep Clean",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional oven and kitchen deep clean Sunshine Coast",
    description: `The kitchen is the hardest part of any bond clean — and the oven is the hardest part of the kitchen. Grease builds up over months and years, baking onto every surface inside the oven until it becomes incredibly difficult to remove. Real estate agents know this, and they check the oven very carefully during final inspections. A dirty oven is one of the most common reasons tenants lose part of their bond.

At Tru Sunshine Coast Bond Cleaners, our oven and kitchen deep clean service tackles even the most neglected kitchens. We use professional-grade degreasers that are far stronger than anything you can buy at the supermarket. We apply the degreaser to the oven interior, racks, grill pan, and oven door glass and let it soak before scrubbing and wiping clean. The result is an oven that looks almost brand new.

We also clean the range hood thoroughly — the filter, the fan, the exterior surfaces, and the underside. Every inch of the kitchen gets our full attention. We clean inside and outside all cupboards and drawers, degrease the stovetop, sanitise the benchtops and backsplash tiles, and clean the sink, taps, and drain.

Behind and under appliances is another area we check — most tenants forget the dust and grease that builds up behind the fridge or under the range. We move or clean around appliances wherever possible.

The kitchen is worth a lot of your bond. Don't leave it to chance — let Tru Sunshine Coast Bond Cleaners make it sparkle.`,
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning Sunshine Coast home - crystal clear results",
    description: `Clean windows make a huge difference to the look and feel of a property. They're also one of the things real estate agents check closely during final bond inspections. Streaky or dirty windows — especially the large glass sliding doors common in Queensland homes — are a quick fail on any inspection report.

At Tru Sunshine Coast Bond Cleaners, our window cleaning service covers every window and glass door in the property, inside and out. We use professional squeegee technique and streak-free cleaning solution to leave every pane crystal clear. No streaks, no smears, no water spots.

Window tracks and frames are just as important as the glass itself. Dirt, dust, dead insects, and grime build up in window tracks over time. We vacuum out all the debris and then wipe the tracks clean with a damp cloth. We also wipe all window frames, sills, and latches.

For homes with fly screens, we remove, wash, and replace each screen. Glass sliding doors and balcony doors get special attention — these large panels are the most visible glass in a home and need to be absolutely streak-free. We clean both sides of every glass door, including the tracks and door frames.

Our window cleaning team is fast, thorough, and uses only professional-grade equipment. We don't use newspaper or household glass cleaner — we use commercial squeegees and window cleaning solution that leaves glass sparkling. Add window cleaning to your bond clean package for a complete result.`,
  },
  {
    id: "bathroom-kitchen",
    title: "Bathroom & Toilet Cleaning",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Sparkling bathroom after professional bond clean Sunshine Coast",
    description: `Bathrooms are the number one reason tenants fail bond inspections. Limescale on taps, soap scum on shower screens, mould in grout lines, and watermarks on tiles are incredibly common — and incredibly obvious to a real estate agent who is looking for reasons to deduct from your bond.

At Tru Sunshine Coast Bond Cleaners, our bathroom cleaning service is thorough, detailed, and uses professional-grade products specifically designed to tackle the most stubborn bathroom problems. We don't just wipe down the surfaces — we get into every grout line, behind every tap, and under every rim.

Our shower cleaning process starts with an application of limescale remover and mould treatment. We let the products do their work, then scrub every tile, every grout line, and every surface. We remove soap scum from shower screens using a specialised glass cleaner and squeegee technique that leaves screens sparkling. We clean and polish the shower rose and all taps until they shine.

The toilet gets a complete treatment — we clean under the rim, inside the bowl, the seat top and underside, the lid, the cistern, the base, and the floor around it. We use a strong disinfectant to kill germs and leave the toilet hygienically clean.

Vanities, basins, and mirrors get a full wipe-down. We also clean the exhaust fan grill, which collects dust and is often missed in DIY cleans. Floors and walls are mopped and wiped, and we check the sealant around the bath, shower, and basin for any mould that needs treatment.`,
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-teal-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Bond Cleaning Services
        </h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-lg">
          Comprehensive bond cleaning on the Sunshine Coast. Every service
          follows the REIQ checklist so you get your full bond back —
          guaranteed.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {services.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full md:w-2/5">
              <img
                src={s.img}
                alt={s.alt}
                className="w-full rounded-2xl shadow-lg object-cover h-64 md:h-80"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                {s.title}
              </h2>
              {s.description.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-gray-700 leading-relaxed mb-3 text-sm"
                >
                  {para}
                </p>
              ))}
              <Link
                to="/contact"
                className="inline-block mt-4 bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors"
              >
                Book This Service
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="py-12 bg-yellow-400 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Get Your Free Quote Today
        </h2>
        <p className="text-gray-800 mb-6">
          Fast, free quotes for all bond cleaning services on the Sunshine
          Coast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-teal-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            WhatsApp: 0488 841 883
          </a>
        </div>
      </section>
    </div>
  );
}
