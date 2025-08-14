
function CategorySidebar({activeCategory , onCategoryChange , categories}){
    console.log('Sidebar received activeCategory:', activeCategory);
    return(
        <div className="sidebar">
            {
                categories.map((category) => (
                    <button key={category} className= {activeCategory === category ? "active" : ""} 
                    onClick={()=>onCategoryChange(category)}
                    >{category}</button>

                ))
            }
        </div>
    )
}
export default CategorySidebar;