import { useParams } from 'react-router-dom';

const TimeTable = () => {
  const { studentCode } = useParams();

  return <h1>TimeTable,{studentCode}</h1>;
};

export default TimeTable;
