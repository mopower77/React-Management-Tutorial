import React from 'react';
import './App.css';
import Customer from './components/Customer'



// 데이터를 받아온다
const customer = [
  {
    id : 1,
    image : 'https://placeimg.com/64/64/1',
    name : '홍길동',
    birthday : '991222',
    gender : '남자',
    job : '대학생'
  } ,
  {
    id : 2,
    image : 'https://placeimg.com/64/64/2',
    name : '홍길동',
    birthday : '991222',
    gender : '남자',
    job : '대학생'
  } ,
  {
    id : 3,
    image : 'https://placeimg.com/64/64/3',
    name : '홍길동',
    birthday : '991222',
    gender : '남자',
    job : '대학생'
  } ,
  {
    id : 4,
    image : 'https://placeimg.com/64/64/4',
    name : '홍길동',
    birthday : '991222',
    gender : '남자',
    job : '대학생'
  } ,  {
    id : 5,
    image : 'https://placeimg.com/64/64/5',
    name : '홍길동',
    birthday : '991222',
    gender : '남자',
    job : '대학생'
  } 
]


function App() {
  return (

      <div>
        {
          customer.map(e => {
            return (
              <Customer 
              key={e.id}
              id={e.id}
              image={e.image}
              name={e.name}
              birthday={e.birthday}
              gender={e.gender}
              job={e.job}
              />
            )
          })
        }
      </div>
  );
}

export default App;
