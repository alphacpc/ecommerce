import React from 'react';

const AdminCategoryList = () => {
  return (
    <div className="divCategories">
        <div className="head">
          <h2>Mes catégories</h2>
          <Link to="nouvelle_categorie">Ajouter une catégorie</Link>
        </div>
        
        <div className="cat">
          { categories.map((cat, ind) => <Link to="#" key={ind}>{cat["title"]}</Link>)}
        </div>
    </div>
  )
}

export default AdminCategoryList;