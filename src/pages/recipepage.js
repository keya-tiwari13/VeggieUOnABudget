import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../components/recipesdata.js'; 

export default function RecipePage() {
    const { recipePath } = useParams();
    const recipe = recipes.find(r => r.path === `/recipes/${recipePath}`);

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    return (
        <div className="recipe-page container">
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            <div className="recipe-steps">
                <h2>Steps</h2>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
