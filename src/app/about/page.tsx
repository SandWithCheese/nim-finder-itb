"use client"

import Navbar from "../components/navbar"
import { FormEvent, useState } from "react"


export default function About() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Sending")
        
        let data = { name, message }

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log("Response received")
            if (res.status === 200) {
                console.log("Success")
                setName("")
                setMessage("")
            }
        })
    }

    return (
        <div className="flex flex-col mx-4 sm:mx-12 md:mx-24 lg:mx-48">
            <Navbar/>

            <article>
                <h1 className="text-4xl my-6 text-[#8550F6]">What?</h1>
                <p>
                    {"Riemann NIM Finder is a web application that can be used to search for the name, student ID (NIM), or faculty of ITB (Institut Teknologi Bandung) students based on the provided input. The data of ITB students can be searched using only the NIM because the NIM of ITB students follows a specific pattern, which consists of the faculty/department code + academic year + serial number (e.g., 19622089 represents the STEI-K faculty, academic year 22, and serial number 89). With just the NIM data, we can determine the student's name and their respective faculty/department of study."}
                </p>
            </article>

            <article>
                <h1 className="text-4xl my-6 mt-14 text-[#8550F6]">Why?</h1>
                <p>
                    {"Riemann NIM Finder was my first attempt at full-stack web application development using a comprehensive framework. Despite my limited knowledge, I found the process relatively manageable. This project provided valuable hands-on experience, allowing me to enhance my web development skills and gain a deeper understanding of full-stack frameworks, paving the way for future challenging endeavors."}
                </p>
            </article>

            <article>
                <h1 className="text-4xl my-6 mt-14 text-[#8550F6]">How?</h1>
                <p>
                    {"The development of Riemann NIM Finder consisted of two stages: data scraping and web development. To acquire the NIM data of ITB students, I utilized Selenium and Pandas for automating the data retrieval process from each individual student at ITB (currently limited to the 2022 academic year). The data scraping was performed on the pddikti website using a custom-built "}<a target="_blank" rel="noopener noreferrer" href="https://github.com/SandWithCheese/pddikti-scraper" className="text-[#8550F6]">pddikti scraper</a>{". Subsequently, for the web development aspect, I used Next.js, React, and Tailwind CSS. The web application also includes a feedback feature that utilizes Nodemailer to send user feedback via email."}
                </p>
            </article>

            <div>
                <h1 className="text-4xl mt-14 mb-4 text-[#8550F6]">Feedback</h1>
                <form className="mb-16" onSubmit={(e)=>{handleSubmit(e)}}>
                    <p>Name (Optional)</p>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="text-black w-full focus:outline-none focus:border-[#8550F6] border-2 border-solid mb-4 mt-2 h-8 px-2"/>
                    <p>Feedback</p>
                    <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} className="text-black w-full focus:outline-none focus:border-[#8550F6] border-2 border-solid mb-6 mt-2 h-24 px-2"></textarea>
                    <button type="submit" className="bg-[#8550F6] px-12 py-2 ml-auto">Submit</button>
                </form>
            </div>
        </div>
    )
}