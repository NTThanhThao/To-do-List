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
    <form onSubmit={handleSubmit} className="flex gap-4 mb-10">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Thêm nhiệm vụ mới..."
        className="flex-1 pl-6 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-gray-800 placeholder-gray-400 font-medium text-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-400"
        style={{ textIndent: '70px' }}
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center aspect-square"
      >
        <FiPlus size={28} strokeWidth={2.5} />
      </button>
    </form>
  );
}