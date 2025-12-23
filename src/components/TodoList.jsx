import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, filter, setFilter }) {
  const filters = [
    { name: 'all', label: 'Tất cả' },
    { name: 'active', label: 'Đang làm' },
    { name: 'completed', label: 'Đã xong' },
  ];

  return (
    <div>
      {/* Bộ lọc */}
      <div className="flex p-1.5 bg-slate-100 dark:bg-slate-700/50 rounded-xl mb-6">
        {filters.map((f) => (
          <button
            key={f.name}
            onClick={() => setFilter(f.name)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              filter === f.name
                ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Danh sách */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 dark:text-slate-500 italic">
              Không tìm thấy công việc nào.
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}