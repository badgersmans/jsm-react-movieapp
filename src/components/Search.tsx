
export default function Search({search, setSearch}) {
  return (
    <div className="search">
      <img src="search.svg" alt="search" />

      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
