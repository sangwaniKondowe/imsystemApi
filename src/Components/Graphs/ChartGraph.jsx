// import React,{useState, useEffect} from 'react'
// import {Bar} from 'react-chartjs-2'
// import {
//     Chart as ChartJS,
  
//     BarElement,
  
//   } from 'chart.js';
// import axios from 'axios';
// import { CropLandscapeOutlined } from '@material-ui/icons';

//   ChartJS.register(
//     BarElement,
//   );
  
// function ChartGraph() {
//     const token = localStorage.getItem("accessToken")
//     const userToken = JSON.parse(token)
//     const valid_token = userToken.token


   

//     const [data, setData] = useState({})

//         const dataDetails = () => {

//            axios.get(baseUrl,{

//                 headers: {
//                     'Authorization': 'Bearer ' + valid_token
//                     }
                

//             })
//             .then(response => {
//                console.log('Incoming data', response)

//                const propertyNames = Object.keys(response.data);
//                console.log(propertyNames)
       
//                const propertyValues = Object.values(response.data);
//                console.log(propertyValues)

//                 setData({
//                        labels: propertyNames,
//            datasets:[{
//                     label:"Number of application against categories",
//                     data: propertyValues
//            }],

//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
        
//                 })
                
                
            // }).catch((error) =>{
            //     console.log(error)
            // })
//         }
//         useEffect(() =>{
//             dataDetails()
//         },[])

    

//     return (
        
//         <div> 
        
//         <Bar
//                     data={data}
//                     options={{
//                         responsive:true,
//                         title: { text: "PRICE CONTRIBUTION PER VEHICLE CATEGORY", display: true },
//                         scales:{
//                             yAxes:{
//                                 ticks:{
//                                     beginAtZero: true
//                                 }
//                             }
//                         }
//                     }}
//                   />




//         </div>
//     )
    
//     }
// export default ChartGraph
