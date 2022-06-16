import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function Status_Chart() {

  const [data, setData] = useState({
    datasets: [{
        data: [],
    },
  ],
  labels: [], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://gorest.co.in/public/v2/users').then((data) => {
        console.log(data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        var activecount =0;
        var inactivecount =0;
        var total = activecount + inactivecount;

        for(var i of res) {
            if(i.status === 'active'){
                activecount+=1;
            }else{
                inactivecount+=1;
            }
        }
        setData(
          {
            datasets: [{
                data:[activecount,inactivecount],
                backgroundColor:['yellow','red']
            },
          ],
          labels:['Active - '+activecount, 'Inactive - '+inactivecount], 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])

  return (
<div class="card App text-center Chart2">
  <div class="card-body d-flex justify-content-center" >
    <h5 class="card-title">Status</h5>
    <div style={{width:'26%', height:'25%',}}>
    <Pie data={data}/>
    </div>
  </div>
</div>

  );
}

export default Status_Chart;