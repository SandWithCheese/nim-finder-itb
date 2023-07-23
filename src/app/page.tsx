"use client"

import Navbar from "./components/navbar"
import { useEffect, useState } from "react"
import useDebounce from "./hooks/useDebounce"

type Data = {
  NAMA: string,
  NIM: string,
  FAKULTAS: string
}

export default function Home() {
  const [search, setSearch] = useState("")
  const debounceSearch = useDebounce(search, 500)
  const [result, setResult] = useState<Data[]>([])
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    async function getData(){
      const fetchData = await fetch("https://sandwithcheese.github.io/nim-data/data.json")
      setData(await fetchData.json())
    }

    getData()
  }, [])


  useEffect(() => {
    const filteredData = data.filter((mahasiswa: Data) => {
      return mahasiswa.NAMA.toLowerCase().includes(debounceSearch.toLowerCase()) || mahasiswa.NIM.includes(debounceSearch) || mahasiswa.FAKULTAS.toLowerCase().includes(debounceSearch.toLowerCase())
    })
    if (debounceSearch === ""){
      setResult([])
    } else{
      setResult(filteredData)
    }
  }, [data, debounceSearch])

  return (
    <div className="flex flex-col mx-4 sm:mx-12 md:mx-24 lg:mx-48">

      <Navbar/>

      <p className="text-xl mb-2">Search</p>
      <form>
        <input onChange={(e) => setSearch(e.target.value)} className="text-black w-full focus:outline-none focus:border-[#8550F6] border-2 border-solid h-12 text-2xl pl-4 rounded-md"/>
      </form>

      <p className="text-xl mt-2">Results: {result.length > 0 ? result.length : 0}</p>
      { result.length > 0 ? <hr className="h-1 my-2 bg-[#8550F6] border-0" /> : <br /> }
      { result.map((data: Data, key) => {
        return (
          <div key={key}>
            <div className="flex justify-between items-center">
              <div>
                <p>{data.NAMA}</p>
                <p>{data.NIM}</p>
              </div>

              <p className="text-end">{data.FAKULTAS}</p>
            </div>
            <hr className="h-px my-2 bg-[#8550F6] border-0"/>
          </div>
        )
      }) }
    </div>
  )
}
