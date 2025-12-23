import { useState, useEffect } from 'react';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';

function App() {
  // Theme: persist and apply 'dark' class
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("my-tasks-db");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Lỗi đọc dữ liệu cũ:", error);
      return [];
    }
  });
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("my-tasks-db", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  const filteredTodos = todos
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    })
    .filter((t) =>
      t.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen transition-colors duration-300 flex justify-center py-10 px-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl p-6 md:p-10 transition-all duration-300">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Task Master
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
              Manage your day efficiently
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-yellow-400 hover:scale-110 transition-transform shadow-sm"
          >
            {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm nhanh công việc..."
            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-700 dark:text-slate-200 placeholder-slate-400 font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default App;