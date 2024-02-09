import Image from 'next/image';
import alarm from "@/assets/rtm/alarm.jpg"
import cable from "@/assets/rtm/cable.jpg"
import camerasensor from "@/assets/rtm/camerasensor.jpg"
import fence from "@/assets/rtm/fence.jpg"
import microwabe from "@/assets/rtm/microwabe.jpg"
import accessories from "@/assets/rtm/accessories.jpg"
import smarthome from "@/assets/rtm/smarthome.webp"
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const SecurityMobitoring = () => {
    return (
        <Box className='py-5'>
            <Typography className="text-rode-400 text-2xl pb-5 font-bold pt-5 w-full text-center">SECURITY MONITORING</Typography>
            {/* <h3 className='text-2xl font-semibold text-red-500'>About Software</h3> */}
            {/* <p className='my-5 text-justify'>Our industry-leading outdoor perimeter security systems for the protection of critical infrastructure, high value assets and human life. */}
            {/* These technologies fortify many of the world’s highest security sites and perform reliably in harsh environments.</p> */}
            
                <Grid className='my-5 grid grid-cols-2 gap-20' >
                    <Card className='flex flex-row' >
                        <CardMedia>
                            <Image src={alarm} className='h-full' alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Alarm Monitoring & Control Systems!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            Advanced security management systems that monitor, display
                            and control a facility’s complete perimeter security program.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card className='flex flex-row' >
                        <CardMedia>
                            <Image src={camerasensor} className='h-full'  alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Infrared and Dual Tech Sensors!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            High-performance stand-alone active / passive infrared and motion sensors designed for outdoor intrusion detection.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card className='flex flex-row ' >
                        <CardMedia>
                            <Image src={cable} className='h-full'  alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Buried Cable Detection Systems!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            Terrain-following volumetric sensors that locate intruders to within 3 meters for covert protection applications.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card className='flex flex-row '>
                        <CardMedia>
                            <Image src={fence} className='h-full'  alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Fence Detection Systems!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            High-security smart sensors that reliably pinpoint cut or climb attempts to within 1 meter while ignoring harmless disturbances.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card className='flex flex-row ' >
                        <CardMedia>
                            <Image src={microwabe} className='h-full'  alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Microwave Sensors!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            Flexible, reliable microwave links and transceivers
                            for the protection of open areas, gates or entryways and rooftop or wall applications.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card className='flex flex-row ' >
                        <CardMedia>
                            <Image src={accessories} className='h-full'  alt="Shoes" />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Accessories!
                            </Typography>
                            <Typography className='text-justify text-[16px] text-[#3b3a3a]' variant="body2" color="text.secondary">
                            Southwest Microwave offers a complete range of accessories to support our perimeter security systems.
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </Box>
      
    );
};

export default SecurityMobitoring;