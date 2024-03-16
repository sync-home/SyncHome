'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import useAuthContext from '@/Hooks/useAuthContext';
import getUpdateSelectedProductsState from '@/components/utils/getUpdateSelectedProductsState';
import { Button } from '@mui/material';
import { deselectProduct } from '@/components/utils/getReadyCartLS';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ArrowBack } from '@mui/icons-material';

let rows = [];

const headCells = [
    {
        id: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Product Title',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 'Quantity',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Unit Price',
    },
    {
        id: 'subtotal',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
];

/* TODO: Connect to cart and payment gateway to purchase if user already signed in */
const handleOrder = (user) => {
    // console.log('Order proceed.');

    if (!user) return toast('Please sign in first to order.');

    /* TODO: Redirect to order pending pages where user can go further or can cancel the order */

}

function createData(id, menuId, title, quantity = 1, price) {
    const subtotal = quantity * price

    return {
        id, menuId,
        title,
        quantity,
        price,
        subtotal,
    };
}

/* Data Sort */
function descendingComparator(a, b, orderBy) {
    if (b[ orderBy ] < a[ orderBy ]) {
        return -1;
    }
    if (b[ orderBy ] > a[ orderBy ]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [ el, index ]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[ 0 ], b[ 0 ]);
        if (order !== 0) {
            return order;
        }
        return a[ 1 ] - b[ 1 ];
    });
    return stabilizedThis.map((el) => el[ 0 ]);
}

/* Header Creator component */
function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

/* Toolbar creator component */
function EnhancedTableToolbar({ selected, setSelected, selectedProducts, setSelectedProducts }) {
    // const { selectedProducts, setSelectedProducts } = useAuthContext()
    const [ numSelected, setNumSelected ] = React.useState(selected?.length);
    console.log(selected);

    React.useEffect(() => {
        setNumSelected(selected?.length)
    }, [ selected?.length ])
    // console.log(numSelected, 'data in rows: ', rows, 'selected products: ', selectedProducts);
    const handleDelete = () => {
        let i = numSelected;
        // console.log(i);

        /* remove selected products */
        while (i--) {
            console.log(i);
            /* Find the product in rows of which id is selected[ i - 1 ] */
            const [ productInRows ] = rows.filter(row => {
                if (row?.id === selected[ i ]) {
                    /* Index of the product in rows */
                    const indexInRows = rows?.indexOf(row);

                    /* Remove form LS */
                    const isDeselected = deselectProduct(row?.menuId)

                    /* Remove from local rows array */
                    isDeselected && rows.slice(indexInRows - 1, 1);

                    return true
                }

                return false
            })

            /* Find the product in selectedProducts of which menuId is same of the productInRows */
            const [ product ] = selectedProducts.filter(theProduct => theProduct?._id === productInRows?.menuId)

            const isUpdated = getUpdateSelectedProductsState({ selectedProducts, setSelectedProducts, product, add: false })

            console.log(isUpdated);

            rows.slice(selected[ i ] - 2, 1)
        }

        console.log('-1 expected: ', i);

        /* remove selection */
        if (i !== -1) {
            console.log('Something wrong.');
        } else {
            /* Resent states */
            setSelected([])
            setSelectedProducts([])
            setNumSelected(0)
        }
    }

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Shopping Cart
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : <Button variant="contained" component={'a'} href='/shop' color='info' startIcon={<ArrowBack />}>Shop</Button>}
        </Toolbar>
    );
}

/* Main function */
export default function OrderDisplay() {
    const { selectedProducts, setSelectedProducts, user, loading } = useAuthContext()
    const [ order, setOrder ] = React.useState('asc');
    const [ orderBy, setOrderBy ] = React.useState('calories');
    const [ selected, setSelected ] = React.useState([]);
    const [ page, setPage ] = React.useState(0);
    const [ dense, setDense ] = React.useState(false);
    const [ rowsPerPage, setRowsPerPage ] = React.useState(5);

    const handleRequestSort = (_event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    /* Change size of rows */
    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };


    /* Selection */
    const handleClick = (_event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    /* Get the products to make shopping cart */
    if (selectedProducts?.length) {
        const newRows = [];
        selectedProducts?.forEach((product, idx) => {
            const row = createData(idx + 1, product?._id, product?.title, product?.quantity, product?.price);
            // console.log(row);
            newRows?.push(row)
        });

        rows = newRows;
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows?.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };


    // Avoid a layout jump when reaching the last page with empty rows?.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

    /* save the rows */
    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [ rows, order, orderBy, page, rowsPerPage ],
    );

    /* Cost Calculation */
    const quantity = rows?.reduce((total, current) => total + current?.quantity, 0)
    const yourFloor = 4;
    const TAX_RATE = 0.07; const CHARGE_PER_FLOOR = 0.01, CHARGE_PER_WEIGHT = 0.001;

    function deliveryCost(floor = 0, quantity = 1) {
        return (floor + 1) * CHARGE_PER_FLOOR + quantity * CHARGE_PER_WEIGHT;
    }

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const deliveryCharge = deliveryCost(yourFloor, quantity);
    const invoiceTotal = invoiceTaxes + invoiceSubtotal + deliveryCharge;
    // console.log(deliveryCharge, quantity);

    return (
        <Box sx={{ maxWidth: '80%', mx: 'auto', py: '1rem' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} selected={selected} setSelected={setSelected} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="Shopping Cart"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows?.length}
                        />
                        <TableBody>
                            {!loading ?
                                selectedProducts?.length && visibleRows?.length ?
                                    visibleRows.map((row, index) => {
                                        const isItemSelected = isSelected(row?.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row?.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row?.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row?.title}
                                                </TableCell>
                                                <TableCell align="right">{row?.quantity}</TableCell>
                                                <TableCell align="right">{row?.price}</TableCell>
                                                <TableCell align="right">{row?.subtotal}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                    : <TableRow>
                                        <TableCell className='text-center' rowSpan={5} colSpan={5}>No product selected.</TableCell>
                                    </TableRow>
                                : <TableRow>
                                    <TableCell className='text-center' rowSpan={5} colSpan={5}>Your selected products are loading now...</TableCell>
                                </TableRow>

                            }

                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[ 5, 10, 25 ]}
                    component="div"
                    count={rows?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="Shopping Cart"
                    size={dense ? 'small' : 'medium'}
                >
                    <TableBody>
                        <TableRow>
                            <TableCell rowSpan={4} />
                            <TableCell rowSpan={4} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">${ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(2)} %`}</TableCell>
                            <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Delivery Charge</TableCell>
                            <TableCell align="right">{`Per floor: ${(CHARGE_PER_FLOOR * 100).toFixed(2)} % & Per Weight: ${(CHARGE_PER_WEIGHT * 100).toFixed(2)} %`}</TableCell>
                            <TableCell align="right">${ccyFormat(deliveryCharge)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">${ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Box className="flex justify-end py-10" >
                <Link variant='outlined' href={user ? '/' : '/signin'}>Order now</Link>
            </Box>
        </Box>
    );
}

/* Prop validations */
EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf([ 'asc', 'desc' ]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


EnhancedTableToolbar.propTypes = {
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired
};