import CountryList from "@/components/countryList";

export default async function CountriesPage() {
  const fields = "name,cca3,flags,region,capital,population";
  const response = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
  const data = await response.json();

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Country Explorer</h1>
      <CountryList countries={data} />
    </main>
  );
}

