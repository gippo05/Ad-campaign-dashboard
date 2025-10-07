import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../components/searchbar';
import axios from 'axios';
import CardDisplay from '../components/cardDisplay';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedItems, setSearchedItems] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  // Search filtering functionality either by Title or ID
  const onSearchChange = (e) => {
    setSearchedItems(e.target.value.toLowerCase());
  };

 const filteredItems = posts.filter(post => {
  const titleMatch = post.title?.toLowerCase().includes(searchedItems.toLowerCase());
  const idMatch = post.id?.toString().includes(searchedItems);
  return titleMatch || idMatch;
});


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-6 py-10">
      <header className="w-full max-w-6xl text-center mb-10">
        
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight mb-3">
          Ad-Campaign Dashboard
        </h1>
        <p className="text-gray-500 text-lg">
          Manage and monitor your campaigns efficiently
        </p>

        <div className="mt-8 flex justify-center">
          <SearchBar onSearchChange={onSearchChange} searchedItems={searchedItems} />
        </div>
      </header>

      <main className="w-full max-w-6xl">
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading posts...</p>
        ) : filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map(post => (
              <CardDisplay key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No posts found.</p>
        )}
      </main>
    </div>
  );
}

export default App;
