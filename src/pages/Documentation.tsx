import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageMeta from "../hooks/usePageMeta";
import { getAppStoreUrl } from "../utils/appRedirect";
import {
  Database,
  Search,
  Zap,
  Copy,
  ShoppingCart,
  Banknote,
  Truck,
  HardHat,
  AlertTriangle,
} from "lucide-react";

export interface Metadata {
  title?: string;
  description?: string;
  alternates?: { canonical?: string };
  openGraph?: { title?: string; description?: string; url?: string };
  twitter?: { title?: string; description?: string };
}

export const metadata: Metadata = {
  title: "BASE API",
  description:
    "Basic Address Search Engine. Enable address lookup by loccode in your applications.",
  alternates: { canonical: "/documentation/baseapi" },
  openGraph: {
    title: "BASE API Documentation — Maiaddy Developers",
    description:
      "Basic Address Search Engine. Enable address lookup by loccode in your applications.",
    url: "https://maiaddy.com/documentation/baseapi",
  },
  twitter: {
    title: "BASE API Documentation — Maiaddy Developers",
    description:
      "Basic Address Search Engine. Enable address lookup by loccode in your applications.",
  },
};

type QuickstartTab = "curl" | "js" | "python" | "java";

const SIDEBAR_SECTIONS = [
  {
    title: "Getting Started",
    links: [
      { href: "#overview", label: "Overview" },
      { href: "#authentication", label: "Authentication" },
      { href: "#quickstart", label: "Quickstart" },
    ],
  },
  {
    title: "Core Endpoints",
    links: [
      { href: "#search", label: "Search Addresses" },
      { href: "#resolve", label: "Street search" },
      { href: "#validate", label: "Validate Address" },
      { href: "#suggest", label: "Autocomplete" },
    ],
  },
  {
    title: "Integration",
    links: [
      { href: "#webhook", label: "Webhooks" },
      { href: "#sdk", label: "SDK Implementation" },
      { href: "#ui-components", label: "UI Components" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Error Codes" },
      { href: "#", label: "Rate Limits" },
      { href: "#", label: "Changelog" },
    ],
  },
];

function CodeBlock({
  label,
  status,
  children,
  onCopy,
}: {
  label: string;
  status?: string;
  children: React.ReactNode;
  onCopy?: () => void;
}) {
  return (
    <div className="doc-code-block rounded-2xl overflow-hidden mb-6 min-w-0 max-w-full bg-[#0d1117] border border-slate-800 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800 gap-2">
        <span className="text-xs sm:text-sm text-slate-400 font-mono truncate min-w-0">
          {label}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {status && (
            <span className="text-xs text-emerald-400 font-mono font-medium">
              {status}
            </span>
          )}
          {onCopy && (
            <button
              type="button"
              onClick={onCopy}
              className="copy-btn text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Copy className="w-3.5 h-3.5" /> Copy
            </button>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto min-w-0 text-slate-200 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function ParamRow({
  name,
  type,
  required,
  description,
  extra,
}: {
  name: string;
  type: string;
  required?: boolean;
  description: string;
  extra?: string;
}) {
  return (
    <div className="param-row px-4 sm:px-6 py-4 min-w-0 border-b border-slate-100 last:border-b-0">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
        <div className="min-w-0">
          <code className="text-primary font-mono text-xs sm:text-sm break-all font-semibold">
            {name}
          </code>
          {required ? (
            <span className="ml-2 text-xs text-rose-500 font-medium">required</span>
          ) : (
            <span className="ml-2 text-xs text-slate-400">optional</span>
          )}
        </div>
        <span className="text-xs text-slate-400 font-mono flex-shrink-0">
          {type}
        </span>
      </div>
      <p className="text-sm text-slate-600 break-words m-0">{description}</p>
      {extra && <p className="text-xs text-slate-400 mt-2">{extra}</p>}
    </div>
  );
}

export default function Documentation() {
  usePageMeta({
    title: metadata.title ?? "BASE API",
    description: metadata.description ?? "",
    canonical:
      metadata.openGraph?.url ?? "https://maiaddy.com/documentation/baseapi",
    ogTitle: metadata.openGraph?.title,
    ogDescription: metadata.openGraph?.description,
    ogUrl: metadata.openGraph?.url,
    twitterTitle: metadata.twitter?.title,
    twitterDescription: metadata.twitter?.description,
  });

  const [quickstartTab, setQuickstartTab] = useState<QuickstartTab>("curl");
  const [searchEndpointTab, setSearchEndpointTab] =
    useState<QuickstartTab>("curl");
  const [resolveEndpointTab, setResolveEndpointTab] =
    useState<QuickstartTab>("curl");
  const [activeSidebar, setActiveSidebar] = useState("#overview");

  const scrollTo = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActiveSidebar(href);
    }
  }, []);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
  }, []);

  return (
    <PageTransition>
      <main id="main">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="wrap">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/developers">Developers</Link> / Documentation
            </p>
            <p className="eyebrow">Base API v1.0 · Documentation</p>
            <h1>
              Basic Address Search Engine
              <br />
              <span className="grad-text">BASE API Documentation</span>
            </h1>
            <p className="lead" style={{ maxWidth: "60ch" }}>
              Enable address lookup, street search, address validation, and
              autocomplete by loccode in your applications with ease.
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 text-left max-w-4xl">
              {[
                { label: "Version", value: "v1.0" },
                {
                  label: "Base URL",
                  value: "https://base-api.maiaddy.com/api",
                  mono: true,
                },
                { label: "Protocol", value: "REST / JSON" },
                { label: "Auth", value: "Bearer Token (API Key)" },
                { label: "Coverage", value: "Nigeria" },
                { label: "Response", value: "JSON" },
              ].map(({ label, value, mono }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                    {label}
                  </p>
                  <p
                    className={`text-sm text-slate-800 break-words ${
                      mono ? "font-mono font-medium text-primary" : "font-semibold"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="hero-ctas mt-8">
              <a className="btn btn-primary" href="#quickstart">
                Get Started
              </a>
              <a className="btn btn-ghost" href="#search">
                Explore Endpoints
              </a>
            </div>
          </div>
        </section>

        {/* Content Layout with Sticky Sidebar */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap flex flex-col lg:flex-row gap-8 min-h-screen">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block sticky top-24 self-start w-72 bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto z-10">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-slate-900">
                    BASE API
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Basic Address Search Engine. Enable address lookup by loccode in
                  your applications.
                </p>
              </div>
              <div className="space-y-6">
                {SIDEBAR_SECTIONS.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.href + link.label}>
                          <a
                            href={link.href}
                            onClick={(e) => {
                              if (link.href.startsWith("#")) {
                                e.preventDefault();
                                scrollTo(link.href);
                              }
                            }}
                            className={`sidebar-link block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeSidebar === link.href
                                ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                            }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              <div className="space-y-16">
                {/* Overview */}
                <section id="overview" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    Overview
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The Basic Address Search Engine (BASE) API is how you resolve
                    addresses in Nigeria programmatically. Send it a loccode, a
                    street name, or a GPS coordinate pair, and it responds with a
                    structured, verified address that is clean, consistent, and
                    ready for your application.
                  </p>

                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    What this API does
                  </h3>
                  <ul className="space-y-2 text-slate-600 mb-6 list-disc pl-5 marker:text-primary">
                    <li>
                      Looks up a full address from a loccode &mdash; the Maiaddy
                      location identifier.
                    </li>
                    <li>
                      Searches for streets that match a full or partial street name.
                    </li>
                    <li>
                      Converts GPS coordinates (latitude/longitude) into a
                      verified Nigerian address.
                    </li>
                  </ul>

                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-amber-500" />
                      <h4 className="font-display text-slate-900 font-semibold">
                        How it works: the 3-step flow
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      Every request to the BASE API follows the same pattern:
                    </p>
                    <ol className="space-y-3 text-slate-600 text-sm list-decimal pl-5 marker:text-primary font-medium">
                      <li>
                        <span className="text-slate-900 font-semibold">
                          You send input
                        </span>
                        : a Loccode, a street name, or lat/lng coordinates.
                      </li>
                      <li>
                        <span className="text-slate-900 font-semibold">
                          The API resolves it
                        </span>
                        : an exact match for loccode, a text search for street
                        name, and a nearest-neighbour lookup for coordinates.
                      </li>
                      <li>
                        <span className="text-slate-900 font-semibold">
                          You get back structured data
                        </span>
                        : street name, LGA, state, country, and road metadata all
                        in consistent JSON.
                      </li>
                    </ol>
                  </div>

                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-amber-800 font-semibold uppercase text-xs tracking-wider mb-1 font-mono">
                          Note
                        </p>
                        <p className="text-amber-900/90 text-sm leading-relaxed">
                          All results are drawn from validated records in the
                          Maiaddy database, cross-referenced against OpenStreetMap
                          road data. You are never working with unverified free-text
                          addresses.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Authentication */}
                <section id="authentication" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    Authentication
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    All API requests require authentication using your API key.
                    Include it in the Authorization header.
                  </p>
                  <CodeBlock
                    label="Authorization Header"
                    onCopy={() =>
                      copyToClipboard("Authorization: Bearer YOUR_API_KEY")
                    }
                  >
                    <code className="text-xs sm:text-sm block min-w-0 overflow-x-auto">
                      <span className="syntax-property">Authorization</span>:{" "}
                      <span className="syntax-string">Bearer YOUR_API_KEY</span>
                    </code>
                  </CodeBlock>
                  <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5">
                    <div className="flex items-start gap-3 min-w-0">
                      <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display text-blue-900 font-semibold mb-1">
                          Security Note
                        </h4>
                        <p className="text-blue-800/90 text-sm leading-relaxed">
                          Never expose your API key in client-side code. Use
                          backend proxies or our SDKs with token exchange for
                          frontend implementations.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Quickstart */}
                <section id="quickstart" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    Quickstart
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Make your first API call in under 5 minutes.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-6 min-w-0">
                    <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 font-mono font-semibold text-xs">
                      GET
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900 font-mono break-all min-w-0 m-0">
                      Location Code Search
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6 border-b border-slate-200">
                    {(["curl", "js", "python", "java"] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setQuickstartTab(tab)}
                        className={`pb-2 text-sm font-medium capitalize cursor-pointer transition-colors ${
                          quickstartTab === tab
                            ? "border-b-2 border-primary text-primary font-semibold"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        {tab === "js"
                          ? "JavaScript"
                          : tab === "curl"
                            ? "cURL"
                            : tab === "java"
                              ? "Java"
                              : tab}
                      </button>
                    ))}
                  </div>
                  {quickstartTab === "curl" && (
                    <CodeBlock
                      label="Request"
                      onCopy={() =>
                        copyToClipboard(
                          `curl https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"loccode": "EN4A 1DQ", "include_metadata": true}'`,
                        )
                      }
                    >
                      <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                        <code>
                          <span className="syntax-property">curl</span>{" "}
                          <span className="syntax-string">
                            https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode
                          </span>{" "}
                          {"\\"}
                          {"\n"}
                          <span className="syntax-property">-H</span>{" "}
                          <span className="syntax-string">
                            &quot;Authorization: Bearer YOUR_API_KEY&quot;
                          </span>{" "}
                          {"\\"}
                          {"\n"}
                          <span className="syntax-property">-H</span>{" "}
                          <span className="syntax-string">
                            &quot;Content-Type: application/json&quot;
                          </span>{" "}
                          {"\\"}
                          {"\n"}
                          <span className="syntax-property">-d</span>{" "}
                          <span className="syntax-string">{`'{\n"loccode": "EN4A 1DQ",\n"include_metadata": true\n}'`}</span>
                        </code>
                      </pre>
                    </CodeBlock>
                  )}
                  {quickstartTab === "js" && (
                    <CodeBlock
                      label="Request"
                      onCopy={() =>
                        copyToClipboard(
                          "fetch('https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode', { method: 'POST', headers: { 'Authorization': 'Bearer YOUR_API_KEY', 'Content-Type': 'application/json' }, body: JSON.stringify({ loccode: 'EN4A 1DQ', include_metadata: true }) })",
                        )
                      }
                    >
                      <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                        <code>
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-property">response</span>{" "}
                          <span className="syntax-keyword">=</span>{" "}
                          <span className="syntax-keyword">await</span>{" "}
                          <span className="syntax-function">fetch</span>(
                          <span className="syntax-string">
                            &apos;https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode&apos;
                          </span>
                          ,{"\n  "}
                          {"{"}
                          {"\n  "}
                          <span className="syntax-property">method</span>:{" "}
                          <span className="syntax-string">&apos;POST&apos;</span>,
                          {"\n  "}
                          <span className="syntax-property">headers</span>: {"{"}
                          {"\n    "}
                          <span className="syntax-string">
                            &apos;Authorization&apos;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &apos;Bearer YOUR_API_KEY&apos;
                          </span>
                          ,{"\n    "}
                          <span className="syntax-string">
                            &apos;Content-Type&apos;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &apos;application/json&apos;
                          </span>
                          {"\n  "}
                          {"}"},{"\n  "}
                          <span className="syntax-property">body</span>:{" "}
                          <span className="syntax-function">JSON.stringify</span>(
                          {"{"}
                          <span className="syntax-property">loccode</span>:{" "}
                          <span className="syntax-string">
                            &apos;EN4A 1DQ&apos;
                          </span>
                          ,<span className="syntax-property">include_metadata</span>
                          : <span className="syntax-keyword">true</span>
                          {"}"}){"\n}"}
                          );
                          {"\n\n"}
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-property">data</span>{" "}
                          <span className="syntax-keyword">=</span>{" "}
                          <span className="syntax-keyword">await</span>{" "}
                          <span className="syntax-property">response</span>.
                          <span className="syntax-function">json</span>();
                          {"\n"}
                          <span className="syntax-property">console</span>.
                          <span className="syntax-function">log</span>(
                          <span className="syntax-property">data</span>.
                          <span className="syntax-property">addresses</span>);
                        </code>
                      </pre>
                    </CodeBlock>
                  )}
                  {quickstartTab === "python" && (
                    <CodeBlock
                      label="Request"
                      onCopy={() =>
                        copyToClipboard(
                          'import requests\nr = requests.post("https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode", headers={"Authorization": "Bearer YOUR_API_KEY", "Content-Type": "application/json"}, json={"loccode": "EN4A 1DQ", "include_metadata": True})\nprint(r.json()["addresses"])',
                        )
                      }
                    >
                      <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                        <code>
                          <span className="syntax-keyword">import</span> requests
                          {"\n\n"}r = requests.
                          <span className="syntax-function">post</span>(
                          <span className="syntax-string">
                            &quot;https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode&quot;
                          </span>
                          ,{"\n  "}
                          headers=
                          {"{"}
                          <span className="syntax-string">
                            &quot;Authorization&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;Bearer YOUR_API_KEY&quot;
                          </span>
                          ,{" "}
                          <span className="syntax-string">
                            &quot;Content-Type&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;application/json&quot;
                          </span>
                          {"}"},{"\n  "}
                          json=
                          {"{"}
                          <span className="syntax-property">loccode</span>:{" "}
                          <span className="syntax-string">
                            &quot;EN4A 1DQ&quot;
                          </span>
                          ,{" "}
                          <span className="syntax-property">include_metadata</span>:{" "}
                          <span className="syntax-keyword">True</span>
                          {"}"}
                          {"\n)"}
                          {"\n"}
                          <span className="syntax-function">print</span>(r.
                          <span className="syntax-function">json</span>()["addresses"])
                        </code>
                      </pre>
                    </CodeBlock>
                  )}
                  {quickstartTab === "java" && (
                    <CodeBlock
                      label="Request"
                      onCopy={() =>
                        copyToClipboard(`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class MaiaddyQuickstart {
  public static void main(String[] args) throws Exception {
    String body = "{\\"loccode\\": \\"EN4A 1DQ\\", \\"include_metadata\\": true}";

    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode"))
      .header("Authorization", "Bearer YOUR_API_KEY")
      .header("Content-Type", "application/json")
      .POST(HttpRequest.BodyPublishers.ofString(body))
      .build();

    HttpClient client = HttpClient.newHttpClient();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
  }
}`)
                      }
                    >
                      <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                        <code>
                          <span className="syntax-keyword">import</span>{" "}
                          java.net.URI;
                          {"\n"}
                          <span className="syntax-keyword">import</span>{" "}
                          java.net.http.HttpClient;
                          {"\n"}
                          <span className="syntax-keyword">import</span>{" "}
                          java.net.http.HttpRequest;
                          {"\n"}
                          <span className="syntax-keyword">import</span>{" "}
                          java.net.http.HttpResponse;
                          {"\n\n"}
                          <span className="syntax-keyword">public</span>{" "}
                          <span className="syntax-keyword">class</span>{" "}
                          <span className="syntax-property">MaiaddyQuickstart</span>{" "}
                          {"{"}
                          {"\n  "}
                          <span className="syntax-keyword">public</span>{" "}
                          <span className="syntax-keyword">static</span>{" "}
                          <span className="syntax-keyword">void</span>{" "}
                          <span className="syntax-function">main</span>(String[]
                          args) <span className="syntax-keyword">throws</span>{" "}
                          Exception {"{"}
                          {"\n    "}
                          String body ={" "}
                          <span className="syntax-string">
                            {
                              '"{\\"loccode\\": \\"EN4A 1DQ\\", \\"include_metadata\\": true}"'
                            }
                          </span>
                          ;{"\n\n    "}
                          HttpRequest request = HttpRequest.newBuilder()
                          {"\n      "}
                          .uri(URI.create(
                          <span className="syntax-string">
                            &quot;https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode&quot;
                          </span>
                          ))
                          {"\n      "}
                          .header(
                          <span className="syntax-string">
                            &quot;Authorization&quot;
                          </span>
                          ,{" "}
                          <span className="syntax-string">
                            &quot;Bearer YOUR_API_KEY&quot;
                          </span>
                          ){"\n      "}
                          .header(
                          <span className="syntax-string">
                            &quot;Content-Type&quot;
                          </span>
                          ,{" "}
                          <span className="syntax-string">
                            &quot;application/json&quot;
                          </span>
                          ){"\n      "}
                          .POST(HttpRequest.BodyPublishers.ofString(body))
                          {"\n      "}
                          .build();
                          {"\n\n    "}
                          HttpClient client = HttpClient.newHttpClient();
                          {"\n    "}
                          HttpResponse{"<"}String{">"} response =
                          client.send(request,
                          HttpResponse.BodyHandlers.ofString());
                          {"\n    "}
                          System.out.println(response.body());
                          {"\n  "}
                          {"}"}
                          {"\n"}
                          {"}"}
                        </code>
                      </pre>
                    </CodeBlock>
                  )}
                  <div className="mt-6">
                    <h4 className="font-display font-semibold text-slate-900 mb-3">
                      Expected Response
                    </h4>
                    <CodeBlock label="200 OK" status="Success">
                      <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                        <code>
                          {"{"}
                          {"\n  "}
                          <span className="syntax-property">
                            &quot;loccode&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;EN4A 1DQ&quot;
                          </span>
                          ,{"\n  "}
                          <span className="syntax-property">
                            &quot;streetName&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;Udoji Street&quot;
                          </span>
                          ,{"\n  "}
                          <span className="syntax-property">
                            &quot;addresses&quot;
                          </span>
                          : [{"\n    "}
                          <span className="syntax-string">
                            &quot;12 Udoji Street&quot;
                          </span>
                          ,{"\n    "}
                          <span className="syntax-string">
                            &quot;14 Udoji Street&quot;
                          </span>
                          {"\n  "}
                          ],
                          {"\n  "}
                          <span className="syntax-property">
                            &quot;lga&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;Enugu North LGA&quot;
                          </span>
                          ,{"\n  "}
                          <span className="syntax-property">
                            &quot;state&quot;
                          </span>
                          :{" "}
                          <span className="syntax-string">
                            &quot;Enugu State&quot;
                          </span>
                          ,{"\n  "}
                          <span className="syntax-property">
                            &quot;country&quot;
                          </span>
                          : <span className="syntax-string">&quot;NG&quot;</span>
                          {"\n}"}
                        </code>
                      </pre>
                    </CodeBlock>
                  </div>
                </section>

                {/* Core Endpoints - Search */}
                <section id="search" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    Search Addresses
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Search for verified addresses using a loccode.
                  </p>
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
                      Parameters
                    </h3>
                    <div className="divide-y divide-slate-100">
                      <ParamRow
                        name="loccode"
                        type="string"
                        required={true}
                        description="The 6 to 7 character loccode for the street."
                      />
                      <ParamRow
                        name="include_metadata"
                        type="boolean"
                        description="Include additional road metadata (highway type, length, OSM ID)."
                      />
                    </div>
                  </div>
                </section>

                {/* Core Endpoints - Resolve / Street search */}
                <section id="resolve" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    Street Search
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Search streets by name to find their corresponding loccode and registered addresses.
                  </p>
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">
                      Parameters
                    </h3>
                    <div className="divide-y divide-slate-100">
                      <ParamRow
                        name="streetName"
                        type="string"
                        required={true}
                        description="Full or partial street name to query."
                      />
                    </div>
                  </div>
                </section>

                {/* SDK Implementation */}
                <section id="sdk" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    SDK Implementation
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Use our official SDKs for JavaScript, Python, Java, and Go to
                    integrate the BASE API with minimal boilerplate. See Quickstart
                    for examples.
                  </p>
                </section>

                {/* UI Integration */}
                <section id="ui-components" className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                    UI Integration
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Implement the loccode search field in your application
                    interface.
                  </p>
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-8">
                    <h4 className="font-display font-semibold text-slate-900 mb-6">
                      Recommended Flow
                    </h4>
                    <div className="space-y-6">
                      {[
                        {
                          step: 1,
                          title: "Input Field",
                          desc: 'User types loccode into a dedicated field labeled "Enter Loccode" or "Location Code"',
                        },
                        {
                          step: 2,
                          title: "Validation",
                          desc: (
                            <>
                              Real-time format validation as user types (pattern:{" "}
                              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-xs">
                                XXXX XXX
                              </code>
                              )
                            </>
                          ),
                        },
                        {
                          step: 3,
                          title: "API Call",
                          desc: (
                            <>
                              On valid input or user confirmation, call{" "}
                              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-xs">
                                /api/v1/addresses/search/loccode/:loccode
                              </code>
                            </>
                          ),
                        },
                        {
                          step: 4,
                          title: "Selection",
                          desc: "Present returned addresses in a dropdown or modal for user selection",
                        },
                        {
                          step: 5,
                          title: "Auto-fill",
                          desc: "Populate your address form fields with selected address data",
                        },
                      ].map(({ step, title, desc }) => (
                        <div key={step} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                            {step}
                          </div>
                          <div>
                            <h5 className="font-display font-semibold text-slate-900 mb-1">
                              {title}
                            </h5>
                            <p className="text-sm text-slate-600 m-0">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Common Use Cases */}
                <section className="scroll-target">
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-6">
                    Common Use Cases
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: ShoppingCart,
                        iconBg: "bg-blue-100",
                        iconColor: "text-blue-600",
                        title: "E-commerce Checkout",
                        desc: "Customer enters loccode, selects their address from dropdown. Shipping address auto-populated with verified location data.",
                        tags: ["Reduces failed deliveries", "Faster checkout"],
                      },
                      {
                        icon: Banknote,
                        iconBg: "bg-emerald-100",
                        iconColor: "text-emerald-600",
                        title: "KYC & Identity Verification",
                        desc: "User provides loccode during onboarding. Financial institution retrieves verified address linked to that location.",
                        tags: ["Fraud prevention", "Regulatory compliance"],
                      },
                      {
                        icon: Truck,
                        iconBg: "bg-indigo-100",
                        iconColor: "text-indigo-600",
                        title: "Logistics & Delivery",
                        desc: "Driver enters recipient's loccode to retrieve all possible delivery points at that location—residential, business, or pickup point.",
                        tags: ["Precise routing", "Delivery confirmation"],
                      },
                      {
                        icon: HardHat,
                        iconBg: "bg-amber-100",
                        iconColor: "text-amber-600",
                        title: "Service Provision",
                        desc: "Utility companies, internet providers, and home services use loccodes to identify service locations and plan installations.",
                        tags: ["Accurate planning", "Service verification"],
                      },
                    ].map(
                      ({ icon: Icon, iconBg, iconColor, title, desc, tags }) => (
                        <div
                          key={title}
                          className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div
                            className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
                          >
                            <Icon className={`w-6 h-6 ${iconColor}`} />
                          </div>
                          <h3 className="font-display text-slate-900 font-semibold text-lg mb-2">
                            {title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                            {desc}
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </section>

        {/* CTA Band at bottom */}
        <section className="section">
          <div className="wrap">
            <div className="cta-band">
              <h2>Build with the BASE API today</h2>
              <p>
                Get instant loccode resolution, street search, and address verification in your applications.
              </p>
              <div className="hero-ctas" style={{ justifyContent: "center" }}>
                <a
                  className="btn btn-on-dark"
                  href={getAppStoreUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Loccode
                </a>
                <a
                  className="btn btn-ghost"
                  style={{
                    borderColor: "rgba(255,255,255,.5)",
                    color: "#fff",
                  }}
                  href="mailto:hello@maiaddy.com"
                >
                  Talk to Engineering
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
