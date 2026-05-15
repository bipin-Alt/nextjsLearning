const fields = "name,cca3,capital,region,subregion,population,flags,continents,maps,languages,currencies,borders";

function formatCurrencies(currencies) {
  if (!currencies) return "N/A";
  return Object.values(currencies)
    .map((currency) => `${currency.name}${currency.symbol ? ` (${currency.symbol})` : ""}`)
    .join(", ");
}

function formatLanguages(languages) {
  if (!languages) return "N/A";
  return Object.values(languages).join(", ");
}

export default async function CountryPage({ params }) {
  const paramsObj = await params;
  console.log(paramsObj);
  const code = (paramsObj?.code || paramsObj?.slug || paramsObj?.value?.code)?.toUpperCase();
  console.log(code);
  if (!code) {
    throw new Error("Missing country code in route params");
  }

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=${fields}`,
    { next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    throw new Error(`Unable to load country details for ${code}`);
  }

  const countryData = await res.json();
  console.log(countryData);
  const country = Array.isArray(countryData) ? countryData[0] : countryData;
  console.log(country)

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">{country.name.common}</h1>
        <p className="text-slate-600">{country.region} / {country.subregion ?? "Unknown subregion"}</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <img
            src={country.flags?.svg || country.flags?.png}
            alt={`${country.name.common} flag`}
            className="h-56 w-full rounded-3xl object-cover"
          />
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p><span className="font-semibold">Official name:</span> {country.name.official}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital?.[0] ?? "N/A"}</p>
            <p><span className="font-semibold">Population:</span> {country.population?.toLocaleString() ?? "N/A"}</p>
            <p><span className="font-semibold">Continents:</span> {country.continents?.join(", ") ?? "N/A"}</p>
            <p>
              <span className="font-semibold">Map:</span>{" "}
              <a className="text-slate-900 underline hover:text-slate-700" href={country.maps?.googleMaps} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Country details</h2>
            <div className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
              <p><span className="font-semibold">Languages:</span> {formatLanguages(country.languages)}</p>
              <p><span className="font-semibold">Currencies:</span> {formatCurrencies(country.currencies)}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Subregion:</span> {country.subregion ?? "N/A"}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
