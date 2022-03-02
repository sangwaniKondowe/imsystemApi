import React from 'react'
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function BarGraph() {
    return (
        <div>
        

        

        
            <Bar
             data = {{
                 labels: ['Applied',' Selected', 'Not Selected'],
                 datasets: [{
                     data: [100,70,30],
                     backgroundColor:'red'
                 }]
             }}
            >


            </Bar>



        </div>
        
    )
}

export default BarGraph
