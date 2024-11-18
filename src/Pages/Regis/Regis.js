import React, { useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '~/theme';
import { mockDataContacts } from '~/data/mockData';
import Stack from '@mui/material/Stack';
const Regis = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectData, setSelectedData] = useState([]);

  const columns = [
    { field: 'code', headerName: 'Mã MH', width: 100 },
    {
      field: 'name',
      headerName: 'Tên môn học',
      cellClassName: 'name-column--cell',
      width: 200,
    },
    {
      field: 'nmh',
      headerName: 'NMH',
      type: 'number',
      width: 70,
    },
    {
      field: 'tth',
      headerName: 'TTH',
      type: 'number',
      width: 70,
    },
    {
      field: 'stc',
      headerName: 'STC',
      type: 'number',
      width: 70,
    },
    {
      field: 'malop',
      headerName: 'Mã lớp',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'siso',
      headerName: 'Sỉ số',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'cl',
      headerName: 'CL',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'thu',
      headerName: 'Thứ',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'tietbd',
      headerName: 'Tiết BD',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'st',
      headerName: 'ST',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'phong',
      headerName: 'Phòng',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'giangvien',
      headerName: 'Giảng viên',
      type: 'number',
      align: 'left',
      width: 70,
    },
    {
      field: 'tuan',
      headerName: 'Tuần',
      type: 'number',
      align: 'left',
      width: 70,
    },
  ];

  const handleSelectionChange = (newSelection) => {
    if (newSelection.length === 0) {
      setSelectedRows(null);
      return;
    }
  };

  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Header title="CONTACTS" subtitle="welcome to you Contacts" /> */}
        </Box>
        <Box
          m="8px 0 0 0"
          width="100%"
          height="80vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button size="small" sx={{ color: '#fff', background: '#5ebbff' }} className="btn-primary">
              Xem danh sách môn đã chọn
            </Button>
          </Stack>
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            checkboxSelection
            onRowSelectionModelChange={handleSelectionChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default Regis;
