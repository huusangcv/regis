import React, { useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '~/theme';
import { mockDataContacts } from '~/data/mockData';
import { IoMdCloseCircle } from 'react-icons/io';

import Stack from '@mui/material/Stack';
import Table from 'react-bootstrap/Table';
import './Regis.scss';
import { useDispatch } from 'react-redux';
import { addSubject } from '~/redux/actions';
const Regis = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const [selectData, setSelectedData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showListChoice, setShowListChoice] = useState(false);
  const columns = [
    { field: 'id', headerName: 'STT', width: 30 },
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
      width: 10,
    },
    {
      field: 'tth',
      headerName: 'TTH',
      type: 'number',
      width: 10,
    },
    {
      field: 'stc',
      headerName: 'STC',
      type: 'number',
      width: 10,
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

  const handleRowClick = (params) => {
    setSelectedData((prevData) => [...prevData, params.row]);
    dispatch(addSubject(params.row));
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
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button
              size="small"
              sx={{ color: '#fff', background: '#5ebbff' }}
              className="btn-primary"
              onClick={() => setShowListChoice(true)}
            >
              Xem danh sách môn đã chọn
            </Button>
          </Stack>
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            checkboxSelection
            onRowClick={handleRowClick}
          />
        </Box>
      </Box>
      <div className={(showListChoice && 'modal-control') || 'hidden'}>
        <div className="d-flex align-items-center justify-content-space-between gap-4 padding-2">
          <div></div>
          <p className="modal-control__header">Danh sách môn học đã chọn</p>
          <div className="modal-control__close">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            >
              <path d="M19.884 5.884a1.25 1.25 0 0 0-1.768-1.768L12 10.232 5.884 4.116a1.25 1.25 0 1 0-1.768 1.768L10.232 12l-6.116 6.116a1.25 1.25 0 0 0 1.768 1.768L12 13.768l6.116 6.116a1.25 1.25 0 0 0 1.768-1.768L13.768 12l6.116-6.116z"></path>
            </svg>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã MH</th>
              <th>Tên MH</th>
              <th>NMH</th>
              <th>TTH</th>
              <th>STC</th>
              <th>Học phí</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {(selectData.length > 0 &&
              selectData.map((data, index) => {
                return (
                  <>
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.code}</td>
                      <td>{data.name}</td>
                      <td>{data.nmh}</td>
                      <td>{data.tth}</td>
                      <td>{data.stc}</td>
                      <td>{data.hocphi}</td>
                      <td>Đã lưu vào CSDL</td>
                    </tr>
                  </>
                );
              })) || (
              <tr>
                <td colSpan={10} style={{ textAlign: 'center' }}>
                  Chưa có môn nào được chọn
                </td>
              </tr>
            )}
            {selectData.length > 0 && (
              <tr>
                <td colSpan={4} style={{ fontWeight: 600 }}>
                  Tổng cộng
                </td>
                <td style={{ fontWeight: 600 }}>15</td>
                <td style={{ fontWeight: 600 }}>15</td>
                <td style={{ fontWeight: 600 }}>6,225,000</td>
                <td style={{ fontWeight: 600 }}>6,225,000</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div className={(showListChoice && 'overlay') || 'hidden'} onClick={() => setShowListChoice(false)}></div>
    </>
  );
};

export default Regis;
