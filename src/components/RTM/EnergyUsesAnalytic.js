// "use client"
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

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


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
            <div direction="row" spacing={'10%'} py={5} >
                <Box align='justify' letterSpacing={1} sx={{ mx: 'auto', width: '40%', }}>
                    <Typography variant='h3' className='text-4xl  text-red-500 font-semibold' sx={{ fontWeight: 'bold' }} >
                        All the energy we generate is 100% renewable.
                    </Typography>
                    <Typography variant='p' className='pt-20 text-[#3e3d3d] font-medium' sx={{ fontWeight: 'light',  }}>
                        100% renewable energy is the goal of the use renewable resources for all energy.
                        100% renewable energy for electricity, heating, cooling and transport is motivated by climate change, pollution and other environmental issues, as well as economic and energy security concerns.
                    </Typography>
                </Box>
                {/* <Box>Item 2</Box> */}
                <Box sx={{ mx: 'auto', width: '40%' }} >
                    <Box className='bg-red-500' sx={{ flexGrow: 1, p: 2, borderRadius: 2, my: 1, textDecorationColor: 'red', fontWeight: 'medium' }}>
                       <div className='flex flex-row justify-between items-center'>
                        <div>
                        <Typography varient="p" className='text-[#d0cbcb]' sx={{ fontWeight: 'bold' }} >
                            67%
                        </Typography>
                        <Typography varient="p" className='text-[#3e3d3d] font-semibold' sx={{ fontWeight: 'light' }} >
                            Electricity
                        </Typography>
                        </div>
                        <div>
                        <figure><Image src={electricity} className="w-[50px] h-[50px] mx-auto" alt="Shoes" /></figure>  
                        </div>
                       </div>
                    </Box>
                    <Box className='bg-red-500' sx={{ flexGrow: 1,  p: 2, borderRadius: 2, my: 1 }}>
                       <div className='flex flex-row justify-between items-center'>
                       <div>
                       <Typography varient="p" className='text-[#d0cbcb]' sx={{ fontWeight: 'bold' }} >
                            23%
                        </Typography>
                        <Typography varient="p" className='text-[#3e3d3d] font-semibold' sx={{ fontWeight: 'light' }} >
                            Green gas
                        </Typography>
                       </div>
                       <div>
                       <figure><Image src={greengas} className="w-[50px] h-[50px] mx-auto" alt="Shoes" /></figure>
                       </div>
                       </div>
                    </Box>
                    {/* <Box
                        sx={{ display: 'flex', p: 1,  borderRadius: 1, justifyContent: 'space-between' }}
                    >
                        <Item className='bg-[#616a5f]'>
                            <Typography varient="p" color="#3e3d3d" sx={{ fontWeight: 'bold' }}>
                                Cost To Date
                            </Typography>
                            <Typography varient="p" className='text-[#d0cbcb] font-medium' sx={{ fontWeight: 'light' }}>
                                $40.00
                            </Typography>
                        </Item>
                        <Item className='bg-[#616a5f]'>
                            <Typography varient="p" color="#3e3d3d" sx={{ fontWeight: 'bold' }}>
                                Cost Per Day
                            </Typography>
                            <Typography varient="p" className='text-[#d0cbcb] font-semibold' sx={{ fontWeight: 'light' }}>
                                $0.40
                            </Typography>
                        </Item>
                        <Item className='bg-[#616a5f]'>
                            <Typography varient="p" color="#3e3d3d" sx={{ fontWeight: 'bold' }}>
                                Usage
                            </Typography>
                            <Typography varient="p" className='text-[#d0cbcb] font-semibold' sx={{ fontWeight: 'light' }}>
                                125kW
                            </Typography>
                        </Item>
                    </Box> */}

                </Box>
            </div>
            <Box sx={{  width: 1 }} >

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
            <Box sx={{ bgcolor: 'green', my: 4, p: 7, textAlign: 'justify', letterSpacing: 1,border:5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 3 }}>
                    <Typography variant='h3' className='text-2xl w-6/12 text-[#d0cbcb] font-semibold' >
                        Save on power bills and reduce carboon emissions.
                        Our vision is to create a low-carbon economy where CO₂ is used as a resource to create new low-carbon products.
                    </Typography>
                    <Typography variant='p' className='w-6/12 text-[#3e3d3d]' marginLeft={5}>
                        With real-time insights into your energy data, you can quickly take action to minimize costs.
                        That can be achieved through optimizing your demand management to minimize peak demand charges and penalties and by identifying areas of inefficiency where you can implement targeted energy and cost-saving measures, for example.
                    </Typography>

                </Box>
                <Box alignItems={'center'} justifyItems={'center'} sx={{ display: 'flex' }}>
                    <Box sx={{ bgcolor: '#5def35', width: '50%', p: 2.5 }}>
                        {/* <Typography variant='h6' className='text-lg' color="#000000" textTransform={'capitalize'}>
                            latest offer
                        </Typography> */}
                        <Typography variant='h3' className='text-xl' color="#000000">
                            Save $25 a month for 6 months on our new energy plants.
                        </Typography>
                        <Typography variant='p' className='w-full h-[400px] text-[#3e3d3d]'>
                            Embedded analytics enables energy companies to optimize their operational efficiency by providing real-time insights into energy consumption, production, and distribution.
                            It allows stakeholders to monitor and analyze energy data centrally, identify inefficiencies or anomalies, and take proactive measures to improve operational processes.
                        </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>

                        <Image
                            src={image2}
                            alt="Foo image"
                            className='w-full h-[400px]'
                            layout={"responsive"}
                        />
                    </Box>

                </Box>
            </Box>
        </Container>

        // </div>
    );
};

export default EnergyUsesAnalytic;