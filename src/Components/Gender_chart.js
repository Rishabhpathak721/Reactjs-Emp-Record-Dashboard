import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function Gender_Chart() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ],
  total:0
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://gorest.co.in/public/v2/users').then((data) => {
        console.log(data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const data = [];
        var malecount =0;
        var femalecount =0;

        for(var i of res) {
            
            if(i.gender === 'male'){
                malecount+=1;
            }else{
                femalecount+=1;
            }
        }
        setData(
          {
            datasets: [{
                data:[femalecount,malecount],
                backgroundColor:['yellow','red']
            },
          ],
          labels:['Female - '+femalecount,'Male - '+malecount], 
          total:femalecount+malecount
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])

  return (
<div class="card App text-center Chart1" >
    <h4 class="text-left">Key Performance Indicators</h4>
  <div class="card-body d-flex justify-content-center" >
    <h5 class="card-title">Gender</h5>
    <div style={{width:'25%', height:'25%',}}>
    <Pie data={data}/>
    </div>
  </div>
    <hr/>
    <hr className='second-line'/>
    <hr/>
</div>

  );
}

export default Gender_Chart;