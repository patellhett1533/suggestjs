'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const PerformenceGraph = ({ score }: { score: number }) => {
  const percentage: number = Number((score * 100).toFixed(2))

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#36A2EB', '#E5E5E5'],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: { enabled: false },
    },
  }

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
        {percentage}%
      </div>
    </div>
  )
}

export default PerformenceGraph
