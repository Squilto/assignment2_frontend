import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const addPost = (title) => {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((newPost) => setPosts((prevPosts) => [...prevPosts, newPost]));
  };

  const deletePost = (id) => {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    }).then(() =>
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    addPost(title);
    e.target.title.value = "";
  };

  const updatePost = (id, title) => {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    .then(() => {
      setPosts(prevPosts => prevPosts.map(post => post.id === id ? { ...post, title } : post));
      setEditingId(null);
      setEditingTitle('');
    });
  };
};

export default Posts;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="border p-2 mr-2"
          type="text"
          name="title"
          placeholder="Post Title"
        />
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add Post
        </button>
      </form>
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id} className="border p-2 my-2 flex justify-between items-center">
            {editingId === post.id ? (
              <div className="flex items-center">
                <input 
                  className="border p-1 mr-2" 
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button 
                  className="bg-green-500 text-white py-1 px-2 ml-2 rounded-full" 
                  onClick={() => updatePost(post.id, editingTitle)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">{post.title}</span>
                <button 
                  className="bg-yellow-500 text-white py-1 px-2 rounded-full" 
                  onClick={() => {
                    setEditingId(post.id);
                    setEditingTitle(post.title);
                  }}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white py-1 px-2 ml-2 rounded-full" 
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </main>
);
