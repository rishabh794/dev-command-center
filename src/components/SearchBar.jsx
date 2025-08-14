function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search commands..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;