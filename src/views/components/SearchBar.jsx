function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Tarif veya malzeme ara..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
      />
    </div>
  );
}

export default SearchBar;

