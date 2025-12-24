import { useState } from 'react';
import { FiTrash2, FiCheck } from 'react-icons/fi';

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      <div
        onClick={() => onToggle(todo.id)}
        className={`group flex items-center justify-between p-5 mb-4 rounded-2xl border-2 transition-all cursor-pointer shadow-sm
        ${todo.completed
          ? 'opacity-40 grayscale-[0.5] scale-[0.98]'
          : 'bg-white/10 dark:bg-slate-800 border-white/5 dark:border-slate-700 hover:border-white dark:hover:border-indigo-500 hover:shadow-lg'
        }`}
      >
        <div className="flex items-center gap-5 flex-1 min-w-0">
          <div
            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              todo.completed ? 'bg-green-400 border-green-400' : 'border-white/40 dark:border-slate-400'
            }`}
          >
            {todo.completed && <FiCheck size={16} className="text-indigo-900 dark:text-white stroke-[3px]" />}
          </div>

          <span
            className={`text-lg font-bold truncate ${
              todo.completed ? 'line-through' : 'text-white dark:text-white'
            }`}
          >
            {todo.text}
          </span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); setShowConfirm(true); }}
          className="ml-4 p-2 text-white/40 dark:text-zinc-400 hover:text-red-300 dark:hover:text-red-500 hover:bg-white/10 dark:hover:bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all"
        >
          <FiTrash2 size={20} />
        </button>
      </div>

      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl p-6 shadow-2xl w-[320px] border border-indigo-100 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-3">Xóa công việc?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
              Bạn có chắc chắn muốn xóa công việc này?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                onClick={() => setShowConfirm(false)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                onClick={() => { onDelete(todo.id); setShowConfirm(false); }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}