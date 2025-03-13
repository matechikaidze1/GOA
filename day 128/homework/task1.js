import { useState } from "react";

export default function AnimalImageGenerator() {
  const [catImage, setCatImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [foxImage, setFoxImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchImage = async (api, setImage) => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const imageUrl = data[0]?.url || data.image || data.message;
      setImage(imageUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">random animal img generator</h1>
      {error && <p className="text-red-500">error: {error}</p>}
      
      <div className="mb-4">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => fetchImage("https://api.thecatapi.com/v1/images/search", setCatImage)}>random cat</button>
        {catImage && <img src={catImage} alt="Random Cat" className="mt-2 w-64 h-64 object-cover mx-auto" />}
      </div>
      
      <div className="mb-4">
        <button className="bg-green-500 text-white p-2 rounded" onClick={() => fetchImage("https://dog.ceo/api/breeds/image/random", setDogImage)}>random dog</button>
        {dogImage && <img src={dogImage} alt="Random Dog" className="mt-2 w-64 h-64 object-cover mx-auto" />}
      </div>
      
      <div className="mb-4">
        <button className="bg-orange-500 text-white p-2 rounded" onClick={() => fetchImage("https://randomfox.ca/floof/", setFoxImage)}>random fox</button>
        {foxImage && <img src={foxImage} alt="Random Fox" className="mt-2 w-64 h-64 object-cover mx-auto" />}
      </div>
    </div>
  );
}
