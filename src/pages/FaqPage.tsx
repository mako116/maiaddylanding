import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItem";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";

const ALL_FAQS = [
  {
    q: "What is a loccode?",
    a: `A loccode is a short, unique code assigned to every street in Nigeria, giving it a single, stable reference. Notable standalone places, like the National Assembly Complex or the National Theatre, get their own loccode too. It replaces long written directions (like "opposite the blue gate, third street after the roundabout") with something as simple as LA8A 1FU.`,
  },
  {
    q: "How is a loccode different from a regular street address?",
    a: "A loccode works even when a street has no formal name or numbering at all. Traditional addresses depend on named streets, numbered buildings, and postal infrastructure that many parts of Nigeria don't have; a loccode is generated directly from the street itself, so every street, formal or informal, can have one, with individual addresses registered underneath it.",
  },
  {
    q: "Who created the loccode system?",
    a: "Loccodes were created and are maintained by Maiaddy, a Nigerian location-identity infrastructure company. Maiaddy documents and shares the specification publicly to support broad adoption across logistics, finance, government, and technology platforms.",
  },
  {
    q: "How do I get a loccode for my home or business?",
    a: "You can find your street's loccode through the Maiaddy app, available on the Google Play Store. Open the app, confirm your location, and it shows you the loccode for your street, so you can register your specific address under it and share the combined reference.",
  },
  {
    q: "Is Maiaddy the same as what3words or Google Plus Codes?",
    a: "Maiaddy's loccode serves a similar purpose, giving any place a shareable, unique reference, but it's purpose-built for Nigeria's addressing environment, including informal settlements and rapidly changing urban areas. It's designed for local context first, with human-usable codes rather than arbitrary word combinations or long alphanumeric strings.",
  },
  {
    q: "Can businesses integrate loccodes into their own systems?",
    a: "Yes. Maiaddy offers a free API so logistics companies, e-commerce platforms, banks, and other businesses can add a loccode field to their address forms. A customer enters their street's loccode, selects their specific address from the addresses listed on that street, and the form auto-fills with a verified, standardized address.",
  },
  {
    q: "How does a loccode help with delivery in Nigeria?",
    a: "A loccode identifies a customer's street, and their specific address is registered underneath it, giving a delivery rider a verified, unambiguous point to navigate to, instead of relying on phone calls and landmark descriptions. Businesses that integrate loccodes into checkout or dispatch typically see fewer failed and delayed deliveries.",
  },
  {
    q: "Can loccodes be used for KYC or address verification?",
    a: "Yes. Because each street's loccode is unique and stable over time, a customer can enter it, select their exact address from the addresses listed on that street, and have it auto-fill, giving financial institutions and other regulated businesses a consistent, auditable way to verify and record a customer's location for KYC and compliance purposes.",
  },
  {
    q: "Does a loccode change over time?",
    a: "No. Loccodes are designed to be stable and persist over time, so the same street keeps the same code even as the surrounding area develops or changes.",
  },
  {
    q: "Is the loccode system only for Nigeria?",
    a: "Maiaddy currently focuses on Nigeria, where the gap between physical addressing and digital systems is especially significant due to rapid urbanization. The underlying model is designed to extend to other emerging markets with similar addressing challenges.",
  },
  {
    q: "Is Maiaddy free to use?",
    a: "Yes. The Maiaddy app is free for individuals to find and share their loccode, and the API businesses use to verify and standardize addresses is also free to integrate.",
  },
  {
    q: "Does Maiaddy sell or share my location data?",
    a: "No. Maiaddy states publicly that it does not sell personal location data or build surveillance tools; it builds reference infrastructure intended to help people and organizations coordinate location, not track individuals.",
  },
  {
    q: "How do I read or share a loccode?",
    a: "A loccode looks like a short alphanumeric string (for example, LA8A 1FU) that you can say out loud, text, or type into a form, no coordinates or app-specific link required to understand what it refers to.",
  },
  {
    q: "What happens if two addresses are on the same street — do they get confused?",
    a: "No. Addresses on the same street share that street's loccode by design; when someone enters it, every address registered on that street appears in a dropdown, and they simply select the specific one they mean.",
  },
  {
    q: "Can government agencies or urban planners use loccodes?",
    a: "Yes. Maiaddy works with government agencies and urban planning bodies to apply loccodes in contexts like emergency response, infrastructure planning, and formalizing addressing in informal settlements.",
  },
];

export default function FaqPage() {
  usePageMeta({
    title: "Frequently Asked Questions | Maiaddy Loccode",
    description:
      "Everything about loccodes: how street-level location identity works, API integration, privacy policies, and addressing for Nigeria.",
    canonical: "https://maiaddy.com/faq.html",
    ogTitle: "Frequently Asked Questions | Maiaddy Loccode",
    ogDescription:
      "Everything about loccodes: how street-level location identity works, API integration, privacy policies, and addressing for Nigeria.",
    ogUrl: "https://maiaddy.com/faq.html",
  });

  return (
    <PageTransition>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / FAQ
            </p>
            <p className="eyebrow">Frequently asked</p>
            <h1>Everything about loccodes.</h1>
            <p className="lead" style={{ maxWidth: "60ch" }}>
              Straight answers about what a loccode is, how the free API verifies
              addresses, and how the system holds up at scale.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="faq-list">
              {ALL_FAQS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
