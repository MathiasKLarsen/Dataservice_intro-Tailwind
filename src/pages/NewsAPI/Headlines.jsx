import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Title from "../../components/Title";

import useRequestData from "../../Hooks/useRequestData";
import newsparams from "./newsparameter.json";

const Headlines = () => {
  
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [searchKey, setSearchKey] = useState("ai");
  const [country, setCountry] = useState("us");
  const [category, setcategory] = useState("business");

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    makeRequest(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${searchKey}&apiKey=${import.meta.env.VITE_APP_NEWSAPIKEY}`
    );
  };

  return (
    <div>
      <Title titleText="Nyheder fra NewsAPI ( headlines endpoint )" />
      <div>
        {isLoading && <Loader />}
        {error && <Error />}
        <div className="m-10">
          <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-4">
              <label className="font-bold text-gray-700 ">
                Søg Nyheder
              </label>
              <input
                onChange={(e) => setSearchKey(e.target.value)}
                defaultValue={searchKey}
                type="text"
                placeholder="Skriv søgeord her..."
                className="px-4 py-2 bg-white border border-gray-400 rounded shadow pr- hover:border-gray-500"
              />
            </div>

            {/* vælg land */}
            <div className="flex flex-col gap-4">
              <label className="font-bold">Vælg land:</label>
              <select
                onChange={(e) => setCountry(e.target.value)}
                defaultValue={country}
                className="px-4 py-2 pr-8 bg-white border border-gray-400 rounded shadow hover:border-gray-500 focus:outline-none">
                {newsparams.country.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.country_code}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold">Vælg kategori:</label>
              <select
                onChange={(e) => setcategory(e.target.value)}
                defaultValue={category}
                className="px-4 py-2 pr-8 bg-white border border-gray-400 rounded shadow hover:border-gray-500 focus:outline-none">
                {newsparams.category.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.category_code}
                  </option>
                ))}
              </select>
            </div>

            <button className="block px-4 py-2 font-bold text-white rounded bg-emerald-500">
              Søg
            </button>
          </form>
        </div>

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-3">
            {data.articles
              .map((a, i) => (
                <div className="m-5 border" key={"news" + i}>
                  <img src={a.urlToImage} alt={"Foto: " + a.title} />
                  <div className="p-5 m-5 " key={"news" + i}>
                    <time>
                      {new Date(a.publishedAt).toLocaleString("da-DK", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </time>
                    <h3 className="mb-2 text-3xl">{a.title}</h3>
                    <p>{a.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Headlines;
