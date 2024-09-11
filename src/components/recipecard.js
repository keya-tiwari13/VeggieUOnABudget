import CustomImage from "./customimage"
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-info">{recipe.info}</p> 
                <Link className="view-btn" to={recipe.path}>go!</Link>
            </div>
        </div>
    );
}


//<img className="auther-img" src="/images/pierogies.jpg" alt=""></img>

//<CustomImage imgSrc={recipe.image} pt="65%"/>