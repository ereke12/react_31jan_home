import { useState } from 'react'
import './App.css'
import { PhotosItem } from './components/photoItem'
import { photos } from './mock'
function App() {

  const [photosList, setPhotos] = useState(photos);

  const handleDeleteClick = (id: number) => {
    const newPhotosList = photosList.filter(item => item.id !== id);
    setPhotos(newPhotosList);
  }

  const handleAddClick = () =>{
    const newPhotosList = [...photosList, {
      albumId: 1,
      id: photosList.length + 1,
      title: "Hello Ers",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }];
    setPhotos(newPhotosList);
  }

  return <>
    <button onClick={handleAddClick}>Add</button>
    <ul>{
      photosList.map((item) => (
        <PhotosItem item={item} key={item.id} onDeleteClick={() => handleDeleteClick(item.id)}/>
      ))
    }</ul>  
  </>
}

export default App
