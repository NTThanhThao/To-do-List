import { FiTrash2, FiCheck } from 'react-icons/fi';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={`group flex items-center justify-between p-4 mb-3 border rounded-2xl transition-all duration-200 hover:shadow-md cursor-pointer
        ${todo.completed 
          ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50' 
          : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500'
        }
      `}
      onClick={() => onToggle(todo.id)}
    >
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        {/* Checkbox */}
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-indigo-500 border-indigo-500'
              : 'border-slate-300 dark:border-slate-500 group-hover:border-indigo-400'
          }`}
        >
          {todo.completed && <FiCheck size={14} className="text-white" />}
        </div>

        {/* Text */}
        <span
          className={`text-base font-medium truncate transition-colors ${
            todo.completed
              ? 'line-through text-slate-400 dark:text-slate-500'
              : 'text-slate-700 dark:text-slate-200'
          }`}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="ml-3 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}