"use client"

import Navbar from "./components/navbar"
import { FormEvent, useState } from "react"

type Data = {
  NAMA: string,
  NIM: string,
  FAKULTAS: string
}

export default function Home() {
  const [search, setSearch] = useState("")
  const [result, setResult] = useState<any[]>([])
  
  const getData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = "https://sandwithcheese.github.io/nim-data/data.json"
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const filtered = []
      if (search.length > 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].NAMA.toLowerCase().includes(search.toLowerCase())){
            filtered.push(data[i])
          }
  
          if (data[i].NIM.includes(search)){
            filtered.push(data[i])
          }
  
          if (data[i].FAKULTAS.toLowerCase().includes(search.toLowerCase())){
            filtered.push(data[i])
          }
        }
      }
      
      setResult(filtered)
    })
  }

  return (
    <div className="flex flex-col mx-4 sm:mx-12 md:mx-24 lg:mx-48">

      <Navbar/>

      <p className="text-xl mb-2">Search</p>
      <form onSubmit={getData}>
        <input onChange={(e) => setSearch(e.target.value)} className="text-black w-full focus:outline-none focus:border-[#8550F6] border-2 border-solid h-12 text-2xl pl-4 rounded-md"/>
        <button type="submit" className="bg-[#8550F6] px-12 py-2 ml-auto my-4 rounded-md">Submit</button>
      </form>

      <p className="text-xl">Results: {result.length > 0 ? result.length : ""}</p>
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
