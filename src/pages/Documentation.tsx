import { useState, useCallback } from "react";
import usePageMeta from "../hooks/usePageMeta";
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
    <div className="doc-code-block rounded-xl overflow-hidden mb-6 min-w-0 max-w-full">
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-nvidia-surface border-b border-white/10 gap-2">
        <span className="text-xs sm:text-sm text-nvidia-muted truncate min-w-0">
          {label}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {status && <span className="text-xs text-green-500">{status}</span>}
          {onCopy && (
            <button
              type="button"
              onClick={onCopy}
              className="copy-btn text-xs text-nvidia-muted hover:text-white flex items-center gap-1"
            >
              <Copy className="w-3 h-3" /> Copy
            </button>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto min-w-0">{children}</div>
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
    <div className="param-row px-4 sm:px-6 py-3 sm:py-4 min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div className="min-w-0">
          <code className="text-primary font-mono text-xs sm:text-sm break-all">
            {name}
          </code>
          {required ? (
            <span className="ml-2 text-xs text-red-400">required</span>
          ) : (
            <span className="ml-2 text-xs text-nvidia-muted">optional</span>
          )}
        </div>
        <span className="text-xs text-nvidia-muted font-mono flex-shrink-0">
          {type}
        </span>
      </div>
      <p className="text-sm text-nvidia-muted break-words">{description}</p>
      {extra && <p className="text-xs text-nvidia-muted mt-2">{extra}</p>}
    </div>
  );
}

export default function Documentation() {
  usePageMeta({
    title: metadata.title ?? "BASE API",
    description: metadata.description ?? "",
    canonical: metadata.openGraph?.url ?? "https://maiaddy.com/documentation/baseapi",
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
    <>
      {/* Full-width hero — sits above the sidebar/content layout */}
      <section className="relative overflow-hidden bg-nvidia-dark pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_520px_at_50%_85%,rgba(51,102,153,0.40),transparent_70%)]" />

        <div className="relative px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] sm:text-xs font-medium text-white/90 uppercase tracking-[0.15em]">
              Base API v1.0
            </span>
          </div>
          <h1 className="font-serif italic text-white text-[clamp(2.5rem,8vw,128px)] leading-[0.9] xl:leading-[111px] tracking-[-0.02em] mb-12 xl:whitespace-nowrap">
            Basic Address Search Engine
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12 text-left">
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
                  className="rounded-xl border border-white/10 bg-[#212529] p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-white/55 mb-2">
                    {label}
                  </p>
                  <p
                    className={`text-sm text-white break-words ${mono ? "font-mono" : ""}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Get API Key
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex min-h-screen">
        {/* Sidebar — sticky so it appears once user scrolls past the hero */}
        <aside className="hidden lg:block sticky top-16 self-start w-72 h-[calc(100vh-4rem)] bg-nvidia-surface border-r border-white/5 overflow-y-auto z-10">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white font-semibold">BASE API</span>
              </div>
              <p className="text-xs text-nvidia-muted leading-relaxed">
                Basic Address Search Engine. Enable address lookup by loccode in
                your applications.
              </p>
            </div>
            <div className="space-y-6">
              {SIDEBAR_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-semibold text-nvidia-muted uppercase tracking-wider mb-3">
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
                          className={`sidebar-link block px-3 py-2 rounded text-sm ${
                            activeSidebar === link.href
                              ? "active text-primary"
                              : "text-nvidia-muted hover:text-white"
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
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
            {/* Overview */}
            <section id="overview" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-4">
                Overview
              </h2>
              <p className="text-nvidia-muted leading-relaxed mb-8">
                The Basic Address Search Engine (BASE) API is how you resolve
                addresses in Nigeria programmatically. Send it a loccode, a
                street name, or a GPS coordinate pair, and it responds with a
                structured, verified address that is clean, consistent, and
                ready for your application.
              </p>

              <h3 className="text-white font-semibold text-lg mb-3">
                What this API does
              </h3>
              <ul className="space-y-2 text-nvidia-muted mb-8 list-disc pl-5 marker:text-white/40">
                <li>
                  Looks up a full address from a loccode &mdash; the Maiaddy
                  location identifier.
                </li>
                <li>
                  Searches for streets that match a full or partial street name.
                </li>
                <li>
                  Converts GPS coordinates (latitude/longitude) into a verified
                  Nigerian address.
                </li>
              </ul>

              <div className="bg-nvidia-surface border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-white font-semibold">
                    How it works: the 3-step flow
                  </h4>
                </div>
                <p className="text-nvidia-muted text-sm mb-4">
                  Every request to the BASE API follows the same pattern:
                </p>
                <ol className="space-y-3 text-nvidia-muted text-sm list-decimal pl-5 marker:text-white/40">
                  <li>
                    <span className="text-white font-semibold">
                      You send input
                    </span>
                    : a Loccode, a street name, or lat/lng coordinates.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      The API resolves it
                    </span>
                    : an exact match for loccode, a text search for street name,
                    and a nearest-neighbour lookup for coordinates.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      You get back structured data
                    </span>
                    : street name, LGA, state, country, and road metadata all in
                    consistent JSON.
                  </li>
                </ol>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-orange-400 font-semibold uppercase text-sm tracking-wider mb-2">
                      Note
                    </p>
                    <p className="text-nvidia-muted text-sm leading-relaxed">
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
            <section id="authentication" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-6">
                Authentication
              </h2>
              <p className="text-nvidia-muted mb-8">
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
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-4 min-w-0">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Security Note
                    </h4>
                    <p className="text-nvidia-muted text-sm">
                      Never expose your API key in client-side code. Use backend
                      proxies or our SDKs with token exchange for frontend
                      implementations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quickstart */}
            <section id="quickstart" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-6">
                Quickstart
              </h2>
              <p className="text-nvidia-muted mb-8">
                Make your first API call in under 5 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 min-w-0">
                <span className="http-method method-get flex-shrink-0">
                  GET
                </span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-white font-mono break-all min-w-0">
                  Location Code Search
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 border-b border-white/10">
                {(["curl", "js", "python", "java"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setQuickstartTab(tab)}
                    className={`tab-btn pb-3 text-xs sm:text-sm font-medium capitalize ${
                      quickstartTab === tab
                        ? "active text-white"
                        : "text-nvidia-muted"
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
                      <span className="syntax-function">json</span>() ()[
                      <span className="syntax-string">
                        &quot;addresses&quot;
                      </span>
                      ])
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
                <h4 className="text-white font-semibold mb-4">
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
                        &quot;Udoji Street&quot;
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
                        &quot;Udoji Street&quot;
                      </span>
                      {"\n  "}
                      ],
                      {"\n    "}
                      <span className="syntax-property">
                        &quot;lga&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Enugu North LGA&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">&quot;state&quot;</span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Enugu State&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">
                        &quot;streetInfo&quot;
                      </span>
                      : {"{"}
                      {"\n    "}
                      <span className="syntax-property">
                        &quot;name&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Udoji Street&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;highwayType&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;residential&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;length&quot;
                      </span>
                      : <span className="syntax-number">543.33</span>,{"\n    "}
                      <span className="syntax-property">&quot;osmId&quot;</span>
                      : <span className="syntax-number">174525750</span>
                      {"\n  "}
                      {"}"},{"\n  "}
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

            {/* Search Endpoint */}
            <section id="search" className="mb-20 scroll-target">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 min-w-0">
                <span className="http-method method-get flex-shrink-0">
                  GET
                </span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-white font-mono break-all min-w-0">
                  Coordinates Search
                </h2>
              </div>
              <p className="text-nvidia-muted mb-8">
                Look up address and loccode data for a latitude and longitude.
                Use query parameters{" "}
                <code className="bg-black/30 px-1 rounded text-primary">
                  latitude
                </code>{" "}
                and{" "}
                <code className="bg-black/30 px-1 rounded text-primary">
                  longitude
                </code>{" "}
                (replace the placeholders in the URL below).
              </p>
              <p className="text-nvidia-muted mb-6 font-mono text-xs sm:text-sm break-all">
                https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=:latitude&amp;longitude=:longitude
              </p>
              <div className="bg-nvidia-surface border border-white/10 rounded-xl overflow-hidden mb-8 min-w-0">
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                  <h4 className="text-white font-semibold">Query Parameters</h4>
                </div>
                <div className="divide-y divide-white/5">
                  <ParamRow
                    name="latitude"
                    type="number"
                    required
                    description="WGS-84 latitude in decimal degrees."
                  />
                  <ParamRow
                    name="longitude"
                    type="number"
                    required
                    description="WGS-84 longitude in decimal degrees."
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 border-b border-white/10">
                {(["curl", "js", "python", "java"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setSearchEndpointTab(tab)}
                    className={`tab-btn pb-3 text-xs sm:text-sm font-medium capitalize ${
                      searchEndpointTab === tab
                        ? "active text-white"
                        : "text-nvidia-muted"
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
              {searchEndpointTab === "curl" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      `curl "https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&longitude=7.4951" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                    )
                  }
                >
                  <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                    <code>
                      <span className="syntax-property">curl</span>{" "}
                      <span className="syntax-string">
                        &quot;https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&amp;longitude=7.4951&quot;
                      </span>{" "}
                      {"\\"}
                      {"\n"}
                      <span className="syntax-property">-H</span>{" "}
                      <span className="syntax-string">
                        &quot;Authorization: Bearer YOUR_API_KEY&quot;
                      </span>
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {searchEndpointTab === "js" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      "const response = await fetch('https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&longitude=7.4951', { method: 'GET', headers: { 'Authorization': 'Bearer YOUR_API_KEY' } });\nconst data = await response.json();\nconsole.log(data);",
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
                        &apos;https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&amp;longitude=7.4951&apos;
                      </span>
                      , {"{"}
                      {"\n  "}
                      <span className="syntax-property">method</span>:{" "}
                      <span className="syntax-string">&apos;GET&apos;</span>,
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
                      {"\n  "}
                      {"}"}
                      {"\n}"}
                      );
                      {"\n"}
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-property">data</span>{" "}
                      <span className="syntax-keyword">=</span>{" "}
                      <span className="syntax-keyword">await</span>{" "}
                      <span className="syntax-property">response</span>.
                      <span className="syntax-function">json</span>();
                      {"\n"}
                      <span className="syntax-property">console</span>.
                      <span className="syntax-function">log</span>(
                      <span className="syntax-property">data</span>);
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {searchEndpointTab === "python" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      'import requests\nr = requests.get(\n    "https://base-api.maiaddy.com/api/v1/addresses/search/coordinates",\n    params={"latitude": 9.0579, "longitude": 7.4951},\n    headers={"Authorization": "Bearer YOUR_API_KEY"},\n)\nprint(r.json())',
                    )
                  }
                >
                  <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                    <code>
                      <span className="syntax-keyword">import</span> requests
                      {"\n\n"}r = requests.
                      <span className="syntax-function">get</span>({"\n  "}
                      <span className="syntax-string">
                        &quot;https://base-api.maiaddy.com/api/v1/addresses/search/coordinates&quot;
                      </span>
                      ,{"\n  "}
                      params=
                      {"{"}
                      <span className="syntax-string">
                        &quot;latitude&quot;
                      </span>
                      : <span className="syntax-number">9.0579</span>,{" "}
                      <span className="syntax-string">
                        &quot;longitude&quot;
                      </span>
                      : <span className="syntax-number">7.4951</span>
                      {"}"},{"\n  "}
                      headers=
                      {"{"}
                      <span className="syntax-string">
                        &quot;Authorization&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Bearer YOUR_API_KEY&quot;
                      </span>
                      {"}"},{"\n)"}
                      {"\n"}
                      <span className="syntax-function">print</span>(r.
                      <span className="syntax-function">json</span>())
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {searchEndpointTab === "java" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class CoordinateSearch {
  public static void main(String[] args) throws Exception {
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&longitude=7.4951"))
      .header("Authorization", "Bearer YOUR_API_KEY")
      .GET()
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
                      <span className="syntax-property">CoordinateSearch</span>{" "}
                      {"{"}
                      {"\n  "}
                      <span className="syntax-keyword">public</span>{" "}
                      <span className="syntax-keyword">static</span>{" "}
                      <span className="syntax-keyword">void</span>{" "}
                      <span className="syntax-function">main</span>(String[]
                      args) <span className="syntax-keyword">throws</span>{" "}
                      Exception {"{"}
                      {"\n    "}
                      HttpRequest request = HttpRequest.newBuilder()
                      {"\n      "}
                      .uri(URI.create(
                      <span className="syntax-string">
                        &quot;https://base-api.maiaddy.com/api/v1/addresses/search/coordinates?latitude=9.0579&amp;longitude=7.4951&quot;
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
                      .GET()
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
                <h4 className="text-white font-semibold mb-4">
                  Example Response
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
                        &quot;Udoji Street&quot;
                      </span>
                      {"\n  "}
                      ],
                      {"\n  "}
                      <span className="syntax-property">
                        &quot;lga&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Enugu North LGA&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">&quot;state&quot;</span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Enugu State&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">
                        &quot;streetInfo&quot;
                      </span>
                      : {"{"}
                      {"\n    "}
                      <span className="syntax-property">
                        &quot;name&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Udoji Street&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;highwayType&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;residential&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;length&quot;
                      </span>
                      : <span className="syntax-number">543.33</span>,{"\n    "}
                      <span className="syntax-property">&quot;osmId&quot;</span>
                      : <span className="syntax-number">174525750</span>
                      {"\n  "}
                      {"}"},{"\n  "}
                      <span className="syntax-property">
                        &quot;country&quot;
                      </span>
                      : <span className="syntax-string">&quot;NG&quot;</span>
                      {"\n}"}
                    </code>
                  </pre>
                </CodeBlock>
              </div>
              <div className="bg-nvidia-surface border border-white/10 rounded-xl overflow-hidden min-w-0 mt-8">
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                  <h4 className="text-white font-semibold">Response Fields</h4>
                </div>
                <div className="divide-y divide-white/5">
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        loccode
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        string
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      Maiaddy loccode for the resolved location.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        streetName
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        string
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      Primary street name for the segment.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        addresses
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        array
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      Address strings associated with the result.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        lga
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        string
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      Local government area.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        state
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        string
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      State or territory.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        streetInfo
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        object
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      OSM-backed street metadata:{" "}
                      <code className="text-primary">name</code>,{" "}
                      <code className="text-primary">highwayType</code>,{" "}
                      <code className="text-primary">length</code> (meters),{" "}
                      <code className="text-primary">osmId</code>.
                    </p>
                  </div>
                  <div className="param-row px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-start justify-between mb-2">
                      <code className="text-blue-400 font-mono text-sm">
                        country
                      </code>
                      <span className="text-xs text-nvidia-muted font-mono">
                        string
                      </span>
                    </div>
                    <p className="text-sm text-nvidia-muted">
                      ISO 3166-1 alpha-2 country code.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Street search (Resolve anchor) */}
            <section id="resolve" className="mb-20 scroll-target">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 min-w-0">
                <span className="http-method method-get flex-shrink-0">
                  GET
                </span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-white font-mono break-all min-w-0">
                  Street search
                </h2>
              </div>
              <p className="text-nvidia-muted mb-8">
                Look up loccode and address data by street name. Use the query
                parameter{" "}
                <code className="bg-black/30 px-1 rounded text-primary">
                  streetName
                </code>{" "}
                (replace the placeholder in the URL below).
              </p>
              <p className="text-nvidia-muted mb-6 font-mono text-xs sm:text-sm break-all">
                https://base-api.maiaddy.com/api/v1/addresses/search/street?streetName=:streetName
              </p>
              <div className="bg-nvidia-surface border border-white/10 rounded-xl overflow-hidden mb-8 min-w-0">
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                  <h4 className="text-white font-semibold">Query Parameters</h4>
                </div>
                <div className="divide-y divide-white/5">
                  <ParamRow
                    name="streetName"
                    type="string"
                    required
                    description="Street name to resolve (URL-encoded when passed in the query string)."
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 border-b border-white/10">
                {(["curl", "js", "python", "java"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setResolveEndpointTab(tab)}
                    className={`tab-btn pb-3 text-xs sm:text-sm font-medium capitalize ${
                      resolveEndpointTab === tab
                        ? "active text-white"
                        : "text-nvidia-muted"
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
              {resolveEndpointTab === "curl" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      `curl "https://base-api.maiaddy.com/api/v1/addresses/search/street?streetName=Udoji Street" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
                    )
                  }
                >
                  <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                    <code>
                      <span className="syntax-property">curl</span>{" "}
                      <span className="syntax-string">
                        {
                          "&quot;https://base-api.maiaddy.com/api/v1/addresses/search/street?streetName=Udoji Street&quot;"
                        }
                      </span>{" "}
                      {"\\"}
                      {"\n"}
                      <span className="syntax-property">-H</span>{" "}
                      <span className="syntax-string">
                        &quot;Authorization: Bearer YOUR_API_KEY&quot;
                      </span>
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {resolveEndpointTab === "js" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      "const params = new URLSearchParams({ streetName: 'Udoji Street' });\nconst response = await fetch(`https://base-api.maiaddy.com/api/v1/addresses/search/street?${params}`, { method: 'GET', headers: { 'Authorization': 'Bearer YOUR_API_KEY' } });\nconst data = await response.json();\nconsole.log(data);",
                    )
                  }
                >
                  <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                    <code>
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-property">params</span>{" "}
                      <span className="syntax-keyword">=</span>{" "}
                      <span className="syntax-keyword">new</span>{" "}
                      <span className="syntax-function">URLSearchParams</span>(
                      {"{"} <span className="syntax-property">streetName</span>:{" "}
                      <span className="syntax-string">
                        &apos;Udoji Street&apos;
                      </span>{" "}
                      {"}"}); {"\n"}
                      {"\n"}
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-property">response</span>{" "}
                      <span className="syntax-keyword">=</span>{" "}
                      <span className="syntax-keyword">await</span>{" "}
                      <span className="syntax-function">fetch</span>(
                      <span className="syntax-string">
                        {
                          "`https://base-api.maiaddy.com/api/v1/addresses/search/street?${params}`"
                        }
                      </span>
                      , {"{"}
                      {"\n  "}
                      <span className="syntax-property">method</span>:{" "}
                      <span className="syntax-string">&apos;GET&apos;</span>,
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
                      {"\n  "}
                      {"}"}
                      {"\n}"}
                      );
                      {"\n"}
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-property">data</span>{" "}
                      <span className="syntax-keyword">=</span>{" "}
                      <span className="syntax-keyword">await</span>{" "}
                      <span className="syntax-property">response</span>.
                      <span className="syntax-function">json</span>();
                      {"\n"}
                      <span className="syntax-property">console</span>.
                      <span className="syntax-function">log</span>(
                      <span className="syntax-property">data</span>);
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {resolveEndpointTab === "python" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(
                      'import requests\nr = requests.get(\n    "https://base-api.maiaddy.com/api/v1/addresses/search/street",\n    params={"streetName": "Udoji Street"},\n    headers={"Authorization": "Bearer YOUR_API_KEY"},\n)\nprint(r.json())',
                    )
                  }
                >
                  <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                    <code>
                      <span className="syntax-keyword">import</span> requests
                      {"\n\n"}r = requests.
                      <span className="syntax-function">get</span>({"\n  "}
                      <span className="syntax-string">
                        &quot;https://base-api.maiaddy.com/api/v1/addresses/search/street&quot;
                      </span>
                      ,{"\n  "}
                      params=
                      {"{"}
                      <span className="syntax-string">
                        &quot;streetName&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Udoji Street&quot;
                      </span>
                      {"}"},{"\n  "}
                      headers=
                      {"{"}
                      <span className="syntax-string">
                        &quot;Authorization&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Bearer YOUR_API_KEY&quot;
                      </span>
                      {"}"},{"\n)"}
                      {"\n"}
                      <span className="syntax-function">print</span>(r.
                      <span className="syntax-function">json</span>())
                    </code>
                  </pre>
                </CodeBlock>
              )}
              {resolveEndpointTab === "java" && (
                <CodeBlock
                  label="Request"
                  onCopy={() =>
                    copyToClipboard(`import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class StreetSearch {
  public static void main(String[] args) throws Exception {
    String q = URLEncoder.encode("Udoji Street", StandardCharsets.UTF_8);
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://base-api.maiaddy.com/api/v1/addresses/search/street?streetName=" + q))
      .header("Authorization", "Bearer YOUR_API_KEY")
      .GET()
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
                      java.net.URLEncoder;
                      {"\n"}
                      <span className="syntax-keyword">import</span>{" "}
                      java.nio.charset.StandardCharsets;
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
                      <span className="syntax-property">StreetSearch</span>{" "}
                      {"{"}
                      {"\n  "}
                      <span className="syntax-keyword">public</span>{" "}
                      <span className="syntax-keyword">static</span>{" "}
                      <span className="syntax-keyword">void</span>{" "}
                      <span className="syntax-function">main</span>(String[]
                      args) <span className="syntax-keyword">throws</span>{" "}
                      Exception {"{"}
                      {"\n    "}
                      String q = URLEncoder.encode(
                      <span className="syntax-string">
                        &quot;Udoji Street&quot;
                      </span>
                      , StandardCharsets.UTF_8);
                      {"\n    "}
                      HttpRequest request = HttpRequest.newBuilder()
                      {"\n      "}
                      .uri(URI.create(
                      <span className="syntax-string">
                        &quot;https://base-api.maiaddy.com/api/v1/addresses/search/street?streetName=&quot;
                      </span>{" "}
                      + q))
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
                      .GET()
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
                <h4 className="text-white font-semibold mb-4">
                  Example Response
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
                        &quot;Udoji Street&quot;
                      </span>
                      {"\n  "}
                      ],
                      {"\n  "}
                      <span className="syntax-property">
                        &quot;lga&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Enugu North LGA&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">&quot;state&quot;</span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;Enugu State&quot;
                      </span>
                      ,{"\n  "}
                      <span className="syntax-property">
                        &quot;streetInfo&quot;
                      </span>
                      : {"{"}
                      {"\n    "}
                      <span className="syntax-property">
                        &quot;name&quot;
                      </span>:{" "}
                      <span className="syntax-string">
                        &quot;Udoji Street&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;highwayType&quot;
                      </span>
                      :{" "}
                      <span className="syntax-string">
                        &quot;residential&quot;
                      </span>
                      ,{"\n    "}
                      <span className="syntax-property">
                        &quot;length&quot;
                      </span>
                      : <span className="syntax-number">543.33</span>,{"\n    "}
                      <span className="syntax-property">&quot;osmId&quot;</span>
                      : <span className="syntax-number">174525750</span>
                      {"\n  "}
                      {"}"},{"\n  "}
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

            {/* Validate - placeholder */}
            {/* <section id="validate" className="mb-20 scroll-target">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 min-w-0">
                <span className="http-method method-post flex-shrink-0">POST</span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-white font-mono break-all min-w-0">/v2/base/validate</h2>
              </div>
              <p className="text-nvidia-muted">
                Validate an address or loccode. Returns validation status and suggested corrections if applicable.
              </p>
            </section> */}

            {/* Suggest / Autocomplete - placeholder */}
            {/* <section id="suggest" className="mb-20 scroll-target">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 min-w-0">
                <span className="http-method method-get flex-shrink-0">GET</span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-white font-mono break-all min-w-0">/v2/base/suggest</h2>
              </div>
              <p className="text-nvidia-muted">
                Autocomplete endpoint for partial loccode or address input. Returns matching suggestions as the user types.
              </p>
            </section> */}

            {/* Webhook - placeholder */}
            {/* <section id="webhook" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-6">Webhooks</h2>
              <p className="text-nvidia-muted">
                Configure webhooks to receive real-time notifications when addresses are updated or new data is available at a loccode.
              </p>
            </section> */}

            {/* SDK - placeholder */}
            <section id="sdk" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-6">
                SDK Implementation
              </h2>
              <p className="text-nvidia-muted">
                Use our official SDKs for JavaScript, Python, Java, and Go to
                integrate the BASE API with minimal boilerplate. See Quickstart
                for examples.
              </p>
            </section>

            {/* UI Integration */}
            <section id="ui-components" className="mb-20 scroll-target">
              <h2 className="font-sans text-3xl font-bold text-white mb-6">
                UI Integration
              </h2>
              <p className="text-nvidia-muted mb-8">
                Implement the loccode search field in your application
                interface.
              </p>
              <div className="bg-nvidia-surface border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 min-w-0">
                <h4 className="text-white font-semibold mb-6">
                  Recommended Flow
                </h4>
                <div className="space-y-6">
                  {(
                    [
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
                            <code className="bg-black/30 px-1 rounded text-primary">
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
                            <code className="bg-black/30 px-1 rounded text-primary">
                              /api/v1/addresses/search/loccode/:loccode{" "}
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
                    ] as {
                      step: number;
                      title: string;
                      desc: React.ReactNode;
                    }[]
                  ).map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {step}
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">{title}</h5>
                        <p className="text-sm text-nvidia-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <CodeBlock
                label="React Component Example"
                onCopy={() =>
                  copyToClipboard(`import { useState } from 'react';

function AddressLookup() {
  const [loccode, setLoccode] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    const response = await fetch('https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode , {
      method: 'POST',
      headers: {
        Authorization: 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loccode, include_metadata: true }),
    });
    const data = await response.json();
    setAddresses(data.addresses || []);
    setLoading(false);
  };
  return (
    <div>
      <input value={loccode} onChange={(e) => setLoccode(e.target.value)} placeholder="Enter loccode" />
      <button onClick={handleSearch} disabled={loading}>{loading ? 'Searching...' : 'Find Addresses'}</button>
      {addresses.length > 0 && <select>{addresses.map(addr => <option key={addr.id} value={addr.id}>{addr.label}</option>)}</select>}
    </div>
  );
}`)
                }
              >
                <pre className="text-xs sm:text-sm leading-relaxed min-w-0">
                  <code>
                    <span className="syntax-keyword">import</span>{" "}
                    {"{ useState }"}{" "}
                    <span className="syntax-keyword">from</span>{" "}
                    <span className="syntax-string">&apos;react&apos;</span>;
                    {"\n\n"}
                    <span className="syntax-keyword">function</span>{" "}
                    <span className="syntax-function">AddressLookup</span>(){" "}
                    {"{"}
                    {"\n  "}
                    <span className="syntax-keyword">const</span> [
                    <span className="syntax-property">loccode</span>,
                    <span className="syntax-property">setLoccode</span>] ={" "}
                    <span className="syntax-function">useState</span>(
                    <span className="syntax-string">&apos;&apos;</span>
                    );
                    {"\n  "}
                    <span className="syntax-keyword">const</span> [
                    <span className="syntax-property">addresses</span>,
                    <span className="syntax-property">setAddresses</span>] ={" "}
                    <span className="syntax-function">useState</span>([]);
                    {"\n  "}
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">handleSearch</span> ={" "}
                    <span className="syntax-keyword">async</span> () =&gt; {"{"}
                    {"\n    "}
                    <span className="syntax-function">setLoading</span>(
                    <span className="syntax-keyword">true</span>);
                    {"\n    "}
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">response</span> ={" "}
                    <span className="syntax-keyword">await</span>{" "}
                    <span className="syntax-function">fetch</span>(
                    <span className="syntax-string">
                      &apos;https://base-api.maiaddy.com/api/v1/addresses/search/loccode/:loccode
                      &apos;
                    </span>
                    , {"{"}
                    {"\n      "}
                    <span className="syntax-property">method</span>:{" "}
                    <span className="syntax-string">&apos;POST&apos;</span>,
                    {"\n      "}
                    <span className="syntax-property">headers</span>: {"{"}
                    {"\n        "}
                    <span className="syntax-string">
                      &apos;Authorization&apos;
                    </span>
                    :{" "}
                    <span className="syntax-string">
                      &apos;Bearer YOUR_API_KEY&apos;
                    </span>
                    ,{"\n        "}
                    <span className="syntax-string">
                      &apos;Content-Type&apos;
                    </span>
                    :{" "}
                    <span className="syntax-string">
                      &apos;application/json&apos;
                    </span>
                    ,{"\n      "}
                    {"}"},{"\n      "}
                    <span className="syntax-property">body</span>:{" "}
                    <span className="syntax-property">JSON</span>.
                    <span className="syntax-function">stringify</span>({"{"}{" "}
                    loccode,{" "}
                    <span className="syntax-property">include_metadata</span>:{" "}
                    <span className="syntax-keyword">true</span> {"}"}),
                    {"\n    "}
                    {"}"}
                    );
                    {"\n    "}
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">data</span> ={" "}
                    <span className="syntax-keyword">await</span>{" "}
                    <span className="syntax-property">response</span>.
                    <span className="syntax-function">json</span>();
                    {"\n    "}
                    <span className="syntax-function">setAddresses</span>(
                    <span className="syntax-property">data</span>.
                    <span className="syntax-property">addresses</span> || []);
                    {"\n    "}
                    <span className="syntax-function">setLoading</span>(
                    <span className="syntax-keyword">false</span>
                    );
                    {"\n  "}
                    {"}"};{"\n  "}
                    <span className="syntax-keyword">return</span> ({"\n    "}
                    &lt;div&gt;
                    {"\n      "}
                    &lt;input placeholder=&quot;Enter loccode&quot;
                    value=&#123;loccode&#125; onChange=&#123;(e) =&gt;
                    setLoccode(e.target.value)&#125; /&gt;
                    {"\n      "}
                    &lt;button onClick=&#123;handleSearch&#125;
                    disabled=&#123;loading&#125;&gt; &#123;loading ?
                    &apos;Searching...&apos; : &apos;Find
                    Addresses&apos;&#125;&lt;/button&gt;
                    {"\n    "}
                    &lt;/div&gt;
                    {"\n  "}
                    );
                    {"\n}"}
                  </code>
                </pre>
              </CodeBlock>
            </section>

            {/* Use Cases */}
            <section className="mb-20">
              <h2 className="font-sans text-3xl font-bold text-white mb-8">
                Common Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: ShoppingCart,
                    iconBg: "bg-blue-500/10",
                    iconColor: "text-blue-400",
                    title: "E-commerce Checkout",
                    desc: "Customer enters loccode, selects their address from dropdown. Shipping address auto-populated with verified location data.",
                    tags: ["Reduces failed deliveries", "Faster checkout"],
                  },
                  {
                    icon: Banknote,
                    iconBg: "bg-green-500/10",
                    iconColor: "text-green-400",
                    title: "KYC & Identity Verification",
                    desc: "User provides loccode during onboarding. Financial institution retrieves verified address linked to that location.",
                    tags: ["Fraud prevention", "Regulatory compliance"],
                  },
                  {
                    icon: Truck,
                    iconBg: "bg-purple-500/10",
                    iconColor: "text-purple-400",
                    title: "Logistics & Delivery",
                    desc: "Driver enters recipient's loccode to retrieve all possible delivery points at that location—residential, business, or pickup point.",
                    tags: ["Precise routing", "Delivery confirmation"],
                  },
                  {
                    icon: HardHat,
                    iconBg: "bg-orange-500/10",
                    iconColor: "text-orange-400",
                    title: "Service Provision",
                    desc: "Utility companies, internet providers, and home services use loccodes to identify service locations and plan installations.",
                    tags: ["Accurate planning", "Service verification"],
                  },
                ].map(
                  ({ icon: Icon, iconBg, iconColor, title, desc, tags }) => (
                    <div
                      key={title}
                      className="endpoint-card bg-nvidia-surface border border-white/10 rounded-xl p-4 sm:p-6 min-w-0"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-nvidia-muted mb-4">{desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-nvidia-muted"
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

      {/* Ready to integrate — full-width CTA before footer */}
      <section className="relative overflow-hidden bg-nvidia-dark py-24 lg:py-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_520px_at_50%_85%,rgba(51,102,153,0.40),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-5">
            Ready to integrate?
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Get your API keys and start building with the BASE API. Free tier
            includes 10,000 requests per month.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Get API Key
          </a>
        </div>
      </section>
    </>
  );
}
