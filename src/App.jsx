import './App.css';
import { commandsData } from "./data";
import SearchBar from "./components/SearchBar";
import CategorySidebar from "./components/CategorySidebar";
import CommandCard from "./components/CommandCard";
import { useState , useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favourites, setFavourites] = useState(()=>{
    const savedFav = localStorage.getItem("Favourites-Storage");
    if(savedFav){
      const loadedFav = JSON.parse(savedFav);
      return loadedFav;
    }
    else{
      return [];
    }
  });
  console.log({ searchQuery, selectedCategory , favourites});

  const toggleFavourite = (commandId) => {
  if(favourites.includes(commandId)){
    const removedFav =  favourites.filter(value => value !== commandId);
    setFavourites(removedFav);
  }
  else{
    const addFav = [...favourites , commandId];
    setFavourites(addFav);
  }
  };

  useEffect(() => {
    localStorage.setItem("Favourites-Storage", JSON.stringify(favourites));
  }, [favourites]);

  const filteredCommands = commandsData.filter((command) => {
     if(selectedCategory==="All"){
      return true;
     }
     if(selectedCategory=== "Favourites"){
      return favourites.includes(command.id);
     }
     if(command.category === selectedCategory){
      return true;
    }
    return false;
  }
  ).filter((command) => {
    if(command.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
   command.name.toLowerCase().includes(searchQuery.toLowerCase()) ) {
    return true;
   }
  });

  const categoryNamesWithDuplicates = commandsData.map((command) => {
  return command.category;
  });

  const uniqueCategoriesSet = new Set(categoryNamesWithDuplicates);
  
  const allCategories = ["All" , "Favourites", ...uniqueCategoriesSet];

  return (
    // App.jsx return
      <div className="app-container">
        <CategorySidebar 
          activeCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
          categories={allCategories}
        />
        <div className="main-content">
          <h1>Dev Command Center</h1>
          <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
          <div className="command-list">
            {filteredCommands.map((command) => (
              <CommandCard
                key={command.id}
                command={command}
                onToggleFavourite={toggleFavourite}
                isFavourite={favourites.includes(command.id)}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
