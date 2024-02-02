'use client'

import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export default function Loading() {
    return (
        <TableContainer className="max-w-[1200px] mx-auto min-h-screen lg:mt-16 mt-12">
            <Table sx={{ minWidth: 650, width: '100%' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow className='bg-[#4DAC6A]'>
                        <TableCell colSpan={5}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{ maxWidth: 100 }}>
                            <Skeleton animation='wave' className="mx-auto" variant='circular' width={40} height={40} />
                        </TableCell>
                        <TableCell colSpan={4} className="bg-gray-300 min-h-7"></TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{ maxWidth: 100 }}>
                            <Skeleton animation='wave' className="mx-auto" variant='circular' width={40} height={40} />
                        </TableCell>
                        <TableCell colSpan={4} className="bg-gray-300 min-h-7"></TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{ maxWidth: 100 }}>
                            <Skeleton animation='wave' className="mx-auto" variant='circular' width={40} height={40} />
                        </TableCell>
                        <TableCell colSpan={4} className="bg-gray-300 min-h-7"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
