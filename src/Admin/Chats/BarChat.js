
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

const BarChat = () => {
    const [bar, setBar] = useState([])
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(json => setBar(json))
  })
    return (


        <div class="card mx-5 bg-base-100 shadow-xl rounded">
            <div class="card-body overflow-x-auto flex items-center">


                <BarChart width={730} height={250} data={bar}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>

        </div>


    )
}

export default BarChat