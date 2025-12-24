import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import TodoForm from './src/components/TodoForm';
import TodoList from './src/components/TodoList';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = window.document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
  const [vnTime, setVnTime] = useState('');

  useEffect(() => {
    localStorage.setItem("my-tasks-db", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const update = () => setVnTime(new Date().toLocaleTimeString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredTodos = todos
    .filter(t => (filter === "active" ? !t.completed : filter === "completed" ? t.completed : true))
    .filter(t => t.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen w-full transition-colors duration-500 flex justify-center py-10 px-4 bg-zinc-50 dark:bg-slate-950 font-sans text-zinc-900 dark:text-white">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-indigo-600 dark:text-white tracking-tighter">
              TASK MASTER <span className="font-light opacity-50">PRO</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1 font-medium">Professional Portfolio</p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-lg text-sm font-semibold">
            {vnTime || '--:--:--'} <span className="text-xs text-zinc-500 dark:text-zinc-400">GMT+7</span>
          </div>
        </div>

        <div className="bg-indigo-600 dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-indigo-500 dark:border-slate-800 transition-all duration-500 text-white dark:text-white">
          <div className="relative mb-10 group">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60 dark:text-slate-400 group-focus-within:text-white dark:group-focus-within:text-indigo-400" size={22} />
            <input
              type="text"
              placeholder="Tìm kiếm công việc nhanh..."
              className="w-full pl-6 pr-6 py-4 bg-white/10 dark:bg-slate-800 border-2 border-transparent focus:border-white/30 dark:focus:border-indigo-500 rounded-2xl outline-none placeholder-white/40 dark:placeholder-slate-400 text-white dark:text-white transition-all font-medium"
              style={{ textIndent: '70px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <TodoForm onAdd={(text) => setTodos([{ id: Date.now(), text, completed: false }, ...todos])} />
          <TodoList
            todos={filteredTodos}
            onToggle={(id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))}
            onDelete={(id) => setTodos(todos.filter(t => t.id !== id))}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
}