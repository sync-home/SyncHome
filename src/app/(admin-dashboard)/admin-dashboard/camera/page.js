import CameraLayout from "@/components/AdminDashboard/CameraSetup/CameraLayout";
import { FaRegCircleDot } from "react-icons/fa6";

const Camera = () => {


    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="inline-block px-10 py-3 rounded-md text-2xl font-extrabold text-[#363636] uppercase font-catamaran" style={{ border: '1px solid #ccc' }}>cctv camera management</h2>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '10px', marginBottom: '40px' }}>
                <div style={{ borderBottom: '1px solid #ccc' }} className="px-5 py-3">
                    <h4 className="text-xl font-semibold text-[#363636] flex items-center gap-2">Live <FaRegCircleDot /></h4>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
                    <CameraLayout path={'JUfIpZCYquY?si=oOoiP8TTVDEAjOIw'} name={'Floor 01 CCTV'}></CameraLayout>
                    <CameraLayout path={'xjQzg1QAlXs?si=FRg83E1UE2EwPEr4'} name={'Floor 02 CCTV'}></CameraLayout>
                    <CameraLayout path={'yWFv9eA72LA?si=ziT6o70HKOcouXBP'} name={'Floor 03 CCTV'}></CameraLayout>
                    <CameraLayout path={'59R63qA1jg0?si=5nTZVSuRBkT1J2Ze'} name={'Floor 04 CCTV'}></CameraLayout>
                    <CameraLayout path={'NtuKgCMqssY?si=ol70_gHIwJW0rcul'} name={'Floor 05 CCTV'}></CameraLayout>
                    <CameraLayout path={'MFsMR1mAPPc?si=rX3jhnWwOn-QFdpL'} name={'Floor 06 CCTV'}></CameraLayout>
                </div>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                <div style={{ borderBottom: '1px solid #ccc' }} className="px-5 py-3">
                    <h4 className="text-xl font-semibold text-[#363636] flex items-center gap-2">Previous Recorded Footage</h4>
                </div>
                <div className="mt-5">
                    <span style={{ border: '1px solid #ccc', borderRadius: '2px', padding: '2px 10px', margin: '10px' }}>Yesterday</span>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
                        <CameraLayout path={'JUfIpZCYquY?si=oOoiP8TTVDEAjOIw'} name={'Floor 01 CCTV'}></CameraLayout>
                        <CameraLayout path={'xjQzg1QAlXs?si=FRg83E1UE2EwPEr4'} name={'Floor 02 CCTV'}></CameraLayout>
                        <CameraLayout path={'yWFv9eA72LA?si=ziT6o70HKOcouXBP'} name={'Floor 03 CCTV'}></CameraLayout>
                    </div>
                </div>
                <div className="mt-5">
                    <span style={{ border: '1px solid #ccc', borderRadius: '2px', padding: '2px 10px', margin: '10px' }}>Last 7 Days</span>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
                        <CameraLayout path={'JUfIpZCYquY?si=oOoiP8TTVDEAjOIw'} name={'Floor 01 CCTV'}></CameraLayout>
                        <CameraLayout path={'xjQzg1QAlXs?si=FRg83E1UE2EwPEr4'} name={'Floor 02 CCTV'}></CameraLayout>
                        <CameraLayout path={'yWFv9eA72LA?si=ziT6o70HKOcouXBP'} name={'Floor 03 CCTV'}></CameraLayout>
                    </div>
                </div>
                <div className="mt-5">
                    <span style={{ border: '1px solid #ccc', borderRadius: '2px', padding: '2px 10px', margin: '10px' }}>Last 30 Days</span>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
                        <CameraLayout path={'JUfIpZCYquY?si=oOoiP8TTVDEAjOIw'} name={'Floor 01 CCTV'}></CameraLayout>
                        <CameraLayout path={'xjQzg1QAlXs?si=FRg83E1UE2EwPEr4'} name={'Floor 02 CCTV'}></CameraLayout>
                        <CameraLayout path={'yWFv9eA72LA?si=ziT6o70HKOcouXBP'} name={'Floor 03 CCTV'}></CameraLayout>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Camera;