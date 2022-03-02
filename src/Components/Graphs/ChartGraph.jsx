import React from 'react'
import {Pie} from 'react-chartjs-2'

function ChartGraph() {
    const data = {
        datasets:[{
            data:[100,70,30],
            backgroundColor:[
                'red',
                'blue',
                'yellow'
            ]
        },
    ],
        labels: ['Applied',' Selected', 'Not Selected'],
    }
    return (
        <div>
        

        

        
            <Pie data = {data}/>



        </div>
    )
}

export default ChartGraph
