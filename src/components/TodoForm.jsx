import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Thêm nhiệm vụ mới..."
        className="flex-1 px-5 py-4 bg-slate-50 dark:bg-slate-700/50 border-2 border-slate-200 dark:border-slate-600 rounded-2xl focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white p-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30"
      >
        <FiPlus size={24} />
      </button>
    </form>
  );
}