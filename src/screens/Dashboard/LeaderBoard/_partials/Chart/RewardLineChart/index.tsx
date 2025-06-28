import React from 'react';
import Chart from 'react-apexcharts';
import './RewardLineChart.scss';

interface IRewardLineChart {
  lineSeries: number[];
  lineCategory: string[];
}

const RewardLineChart = ({ lineSeries, lineCategory }: IRewardLineChart) => {
  const datas = {
    options: {
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 2,
        curve: 'straight' as const
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.1,
          opacityFrom: 0.9,
          opacityTo: 0.1,
          stops: [0, 90]
        }
      },
      colors: ['#1dbbe6'],
      dataLabels: {
        enabled: false
      },
      grid: {
        strokeDashArray: 4,
        borderColor: '#1dbbe6'
      },
      xaxis: {
        show: false,
        categories: lineCategory || [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#1dbbe6'
          }
        }
      },
      yaxis: {
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: '#1dbbe6'
          },
          formatter: function (value: number): string {
            return value === 0 ? value.toString() : value + '%';
          }
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontSize: '12px',
          color: '#ffffff'
        },
        marker: {
          show: true
        },
        theme: 'dark'
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: '#ffffff'
          },
          {
            y: 40,
            borderColor: '#ffffff'
          }
        ]
      }
    },
    series: [
      {
        name: 'Performance',
        data: lineSeries || [0, 0, 0, 0, 0, 0, 0]
      }
    ]
  };

  return (
    <div className="RewardLineChart__wrapper">
      <div className="mixed-chart">
        <Chart options={datas.options} series={datas.series} type="area" height={250} />
      </div>
    </div>
  );
};

export default RewardLineChart;
