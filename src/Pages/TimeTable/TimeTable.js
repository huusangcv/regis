import { useParams } from 'react-router-dom';
import './Timetable.scss';
import { useEffect, useRef } from 'react';
const TimeTable = () => {
  const { studentCode } = useParams();

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe
        style={{ height: '100%', width: '100%' }}
        src={`https://regis.agu.edu.vn/default.aspx?page=thoikhoabieu&sta=0&id=${studentCode}`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default TimeTable;
