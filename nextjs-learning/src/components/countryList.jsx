'use client'
import Link from "next/link";

function CountryList({ countries }) {
  if (!countries || !Array.isArray(countries)) {
    return <p className="text-slate-600">Loading countries...</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {countries.map((country) => (
        <Link
          key={country.cca3}
          href={`/countries/${country.cca3.toLowerCase()}`}
          className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
        >
          <div className="mb-4 flex items-center gap-4">
            <img
              src={country.flags?.svg || country.flags?.png}
              alt={`${country.name.common} flag`}
              className="h-12 w-16 rounded-xl border border-slate-200 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{country.name.common}</h2>
              <p className="text-sm text-slate-500">{country.region ?? "Unknown region"}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Capital:</span> {country.capital?.[0] ?? "N/A"}
            </p>
            <p>
              <span className="font-semibold">Population:</span> {country.population?.toLocaleString() ?? "N/A"}
            </p>
            <p>
              <span className="font-semibold">Code:</span> {country.cca3}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;