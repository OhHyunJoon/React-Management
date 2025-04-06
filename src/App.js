import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '오현준',
    'birthday': '001211',
    'gender': '남자',
    'job': '취준생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '스티븐잡스',
    'birthday': '951130',
    'gender': '남자',
    'job': 'CEO'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '일론머스크',
    'birthday': '901030',
    'gender': '남자',
    'job': '디자이너'
  }
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            />
          )
        })
      }
    </div>
  );
}

export default App;
