"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import Image from 'next/image';
import image from '../../assets/rtm/energy-analytics2.png'
import image2 from '../../assets/about-man.jpg'
import electricity from '@/assets//rtm/electricity.png'
import greengas from '@/assets//rtm/greengas.webp'
import Chart from "chart.js";


const EnergyUsesAnalytic = () => {
  //chart
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Smart TVs",
          "Smart lighting systems",
          "Smart thermostats",
          "Smart security cameras",
          "Smart pet and lawn care",
          "Smart household monitors",
          "Smart plugs",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "#000000",
                zeroLineColor: "#000000",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    // <div>
    <Container>
      <Typography className="text-rode-400 text-2xl pb-5 font-bold pt-5 w-full text-center">ENERGY USAGE ANALYTIC</Typography>
      <div direction="row" spacing={'10%'} py={5} >

        <Box sx={{ mx: 'auto', width: '40%' }} >
        </Box>
      </div>
      <Box sx={{ width: 1 }} >

        {/* <Image loading="lazy" className='w-full h-[200px]' src={image} alt="Responsive image"></Image> */}
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                  Performance
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  Energy Analytics
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </div>

      </Box>
    </Container>

    // </div>
  );
};

export default EnergyUsesAnalytic;