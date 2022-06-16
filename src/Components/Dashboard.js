import React from 'react'
import Status_Chart from './Status_Chart'
import Gender_Chart from './Gender_chart'

const Dashboard = () => {
  return (
    <div className='main'>
        <Gender_Chart/>
        <Status_Chart/>
    </div>
  )
}

export default Dashboard