import React,{useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
  
    BarElement,
  
  } from 'chart.js';
import axios from 'axios';

  ChartJS.register(
    BarElement,
  );
  
function ChartGraph() {
    const token = localStorage.getItem("accessToken")
    const userToken = JSON.parse(token)
    const valid_token = userToken.token

    const [chart, setChart] = useState({})
    const baseUrl = "http://localhost:5000/application/countAll"

    const [data, setData] = useState([])
    useEffect(() =>{
        const dataDetails = async => {
            axios.get(baseUrl,{

                headers: {
                    'Authorization': 'Bearer ' + valid_token
                    }
                

            })
            .then(respose => {
                if(respose.ok){
                    respose.json().then((json) => {
                        console.log(json.data)
                        setData(json.data)
                    });
                }
                
            }).catch((error) =>{
                console.log(error)
            })
        }
         dataDetails()
    },[baseUrl])



    const Vardata = {


        
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }

    }

    const options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }

    return (
        
        <div> 
        

     

        
            



        </div>
    )
    }

export default ChartGraph
