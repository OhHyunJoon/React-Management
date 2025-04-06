import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/64/64?random=1',
    name: '오현준',
    birthday: '001211',
    gender: '남자',
    job: '취준생'
  },
  {
    id: 2,
    image: 'https://picsum.photos/64/64?random=2',
    name: '스티븐잡스',
    birthday: '951130',
    gender: '남자',
    job: 'CEO'
  },
  {
    id: 3,
    image: 'https://picsum.photos/64/64?random=3',
    name: '일론머스크',
    birthday: '901030',
    gender: '남자',
    job: '디자이너'
  }
];

function App() {
  return (
    <Paper sx={{ width: '100%', mt: 3, overflowX: 'auto' }}>
      <Table sx={{ minWidth: 1080 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
