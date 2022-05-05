import './App.css';
// import Image from './Image';
// import Album from './Album';
import UserProfile from './UserProfile';

/*
const album01 = {
  image: 'https://images.tcdn.com.br/img/img_prod/435678/1356_1_20180126093229.jpg',
  title: 'Mylo Xyloto',
  releaseDate: {
    year: '2011',
    month: '10',
    day: '24',
  },
  others: {
    recordCompany: 'Capitol, Parlophone',
    formats: 'CD, digital'
  }
};

const album02 = {
  image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
  title: 'Ghost Stories',
  releaseDate: {
    year: '2014',
    month: '05',
    day: '16',
  },
  others: {
    recordCompany: 'Parlophone',
    formats: 'CD, digital'
  }
};
*/

const joao = {
  id: 102,
  name: "João",
  email: "joao@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
};

const amelia = {
  id: 77,
  name: "Amélia",
  email: "amelia@gmail.com",
  avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
};

function App() {
  return (
    <div className="App">
      <UserProfile user={joao} />
      <UserProfile user={amelia} />
      {/* <Album album={ album01 } />
      <Album album={ album02 } /> */}
      {/* <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' /> */}
    </div>
  );
}

export default App;
