import { Link, useParams } from "react-router-dom";

const serviceData: Record<
  string,
  { title: string; metaDesc: string; img: string; alt: string; content: string }
> = {
  "bond-cleaning": {
    title: "Bond Cleaning Sunshine Coast | 100% Bond Back Guarantee",
    metaDesc:
      "Professional bond cleaning on the Sunshine Coast. REIQ checklist compliant, 100% bond back guarantee. Call Tru Sunshine Coast Bond Cleaners today.",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional bond cleaning service Sunshine Coast",
    content:
      "Complete vacate cleaning following the REIQ checklist. We guarantee your bond back or we re-clean for free.",
  },
  "carpet-cleaning": {
    title: "Carpet Steam Cleaning Sunshine Coast | Hot Water Extraction",
    metaDesc:
      "Professional carpet steam cleaning on the Sunshine Coast. Hot water extraction removes stains, odours, and allergens. Book today.",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sunshine Coast",
    content:
      "Hot water extraction carpet cleaning that removes deep stains and odours. Required by most real estate agents.",
  },
  "end-of-lease": {
    title: "End of Lease Cleaning Sunshine Coast | Move Out Cleaning",
    metaDesc:
      "Professional end of lease cleaning on the Sunshine Coast. Thorough move-out clean that passes every real estate inspection.",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "End of lease cleaning Sunshine Coast",
    content:
      "Thorough move-out cleaning covering every area landlords and agents inspect.",
  },
  "oven-cleaning": {
    title: "Oven & Kitchen Deep Cleaning Sunshine Coast",
    metaDesc:
      "Professional oven and kitchen deep cleaning on the Sunshine Coast. We degrease ovens, range hoods, and every inch of your kitchen.",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional oven and kitchen deep clean Sunshine Coast",
    content:
      "Professional degreasing and deep cleaning of ovens, range hoods, and kitchens.",
  },
  "window-cleaning": {
    title: "Window Cleaning Sunshine Coast | Streak-Free Results",
    metaDesc:
      "Professional window cleaning on the Sunshine Coast. Inside and outside, tracks, frames, and fly screens. Streak-free guaranteed.",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning Sunshine Coast",
    content:
      "Streak-free window cleaning inside and out, including tracks, frames, and fly screens.",
  },
  "bathroom-kitchen": {
    title: "Bathroom Cleaning Sunshine Coast | Bond Clean Specialists",
    metaDesc:
      "Professional bathroom and toilet cleaning on the Sunshine Coast. Limescale removal, grout scrubbing, shower screens. Bond clean experts.",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Professional bathroom cleaning Sunshine Coast",
    content:
      "Thorough bathroom cleaning including grout, shower screens, limescale removal, and sparkling toilets.",
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Service Not Found
        </h1>
        <Link to="/services" className="text-teal-600 hover:underline">
          View all services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={service.img}
          alt={service.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/70 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center px-4">
            {service.title.split("|")[0].trim()}
          </h1>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {service.content}
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700"
          >
            Book Now
          </Link>
          <Link
            to="/services"
            className="border border-teal-600 text-teal-600 font-bold px-6 py-3 rounded-xl hover:bg-teal-50"
          >
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
