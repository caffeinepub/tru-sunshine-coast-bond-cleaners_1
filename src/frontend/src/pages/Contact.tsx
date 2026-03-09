import { type FormEvent, useState } from "react";
import { ServiceType } from "../backend";
import { useActor } from "../hooks/useActor";

const services = [
  { value: ServiceType.bondCleaning, label: "Bond Cleaning / Vacate Cleaning" },
  { value: ServiceType.carpetCleaning, label: "Carpet Steam Cleaning" },
  { value: ServiceType.windowCleaning, label: "Window Cleaning" },
  { value: ServiceType.pestControl, label: "End of Lease Cleaning" },
];

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState<ServiceType>(ServiceType.bondCleaning);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const getRecipient = () =>
    atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceLabel =
      services.find((s) => s.value === service)?.label ?? service;
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AAddress: ${address}%0AService: ${serviceLabel}%0AMessage: ${message}`;
    const subject = `Bond Cleaning Enquiry - ${serviceLabel}`;
    const mailto = `mailto:${getRecipient()}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    try {
      await actor?.submitContactForm(
        name,
        phone,
        email,
        address,
        service,
        message,
      );
    } catch {
      // silently fail backend submission
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <section className="bg-teal-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get a Free Quote
        </h1>
        <p className="text-teal-100 max-w-xl mx-auto text-lg">
          Fill in the form below and we'll get back to you fast. Or chat with us
          on WhatsApp for an instant response.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          {submitted && (
            <div
              data-ocid="contact.form.success_state"
              className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 text-green-800 font-semibold"
            >
              ✓ Your email client has opened. Send the email to complete your
              enquiry!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="field-name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Your Name *
              </label>
              <input
                id="field-name"
                data-ocid="contact.form.input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label
                htmlFor="field-email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                id="field-email"
                data-ocid="contact.form.email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="jane@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="field-phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                id="field-phone"
                data-ocid="contact.form.phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="04xx xxx xxx"
              />
            </div>
            <div>
              <label
                htmlFor="field-address"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Property Address *
              </label>
              <input
                id="field-address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="123 Example St, Maroochydore QLD 4558"
              />
            </div>
            <div>
              <label
                htmlFor="field-service"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Service Required *
              </label>
              <select
                id="field-service"
                data-ocid="contact.form.select"
                value={service}
                onChange={(e) => setService(e.target.value as ServiceType)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="field-message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="field-message"
                data-ocid="contact.form.textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Tell us about the property (bedrooms, condition, move-out date)..."
              />
            </div>
            <button
              data-ocid="contact.form.submit_button"
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-colors text-lg"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Contact Details
          </h2>
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                💬 WhatsApp (Fastest Response)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Chat with us on WhatsApp for a fast, free quote. We usually
                reply within minutes.
              </p>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp: 0488 841 883
              </a>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">📍 Service Area</h3>
              <p className="text-gray-600 text-sm">
                We service all areas of the Sunshine Coast including:
              </p>
              <ul className="text-gray-600 text-sm mt-2 grid grid-cols-2 gap-1">
                {[
                  "Noosa",
                  "Tewantin",
                  "Cooroy",
                  "Maroochydore",
                  "Mooloolaba",
                  "Buderim",
                  "Caloundra",
                  "Kawana",
                  "Nambour",
                  "Coolum",
                  "Peregian",
                  "Palmview",
                ].map((a) => (
                  <li key={a} className="flex items-center gap-1">
                    <span className="text-teal-500">✓</span> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">⏰ Availability</h3>
              <p className="text-gray-600 text-sm">
                Monday to Sunday, 7am – 7pm. Same-day and next-day bookings
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
