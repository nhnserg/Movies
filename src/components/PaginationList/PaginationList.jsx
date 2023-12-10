import { Pagination } from '@mui/material';

const PaginationList = ({ pageQty, pg, onChange }) => {
    const handlePaginationChange = (_, num) => {
        onChange(num);
    };

    return (

        <Pagination
            count={pageQty}
            page={pg}
            onChange={handlePaginationChange}
            color={'success'}
            sx={{
                color: '#fff',
                stroke: '#fff',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',

                '& .MuiPaginationItem-root': {
                    color: '#fff',
                },
                '& .MuiPaginationItem-page': {
                    '&:hover:not(.Mui-selected):not(:first-of-type), &:focus:not(.Mui-selected):not(:first-of-type)':
                    {
                        color: '#1cb114',
                    },
                },
            }}
        />
    );
};

export default PaginationList;