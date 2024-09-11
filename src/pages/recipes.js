import RecipeCard from "../components/recipecard"
export default function Recipes(){
    const recipes = [
        {
            title: "oat chocolate muffins",
            image: "/images/proteinm3.jpg",
            info:"super easy choco muffins that i devour for breakfast"
        }, 
        {
            title: "chilli paneer",
            image: "/images/chillipaneer.jpg",
            info:"quick paneer because i cannot live without it"
        },
        {
            title: "quinoa salad",
            image: "/images/quinoa.jpg",
            info:"simple quinoa salads have saved my lunches"
        },
        {
            title: "cucumber roll",
            image: "/images/roll.jpg",
            info:"cute way of getting more veggies in"
        },
        {
            title: "tomato soup",
            image: "/images/soup.jpg",
            info:"for throw in a pot and let happen type of nights"
        }, 
        {
            title: "paneer & cabbage dumplings",
            image: "/images/dumplings.jpg",
            info:"for when you are feeling fancy and need to feed a village"
        },
        {
            title: "black bean tacos",
            image: "/images/taco.jpg",
            info:"my absolute favourite tacos that my family also love"
        }
    ].sort(() => Math.random() - 0.5)


    return(
        <div>
            <h1 className="title">recipes!</h1>
            <div className="search-box">
                <input type="text" placeholder="search..."/>
                <button className="btn">go!</button>
            </div>
            <div className="recipes-container">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.title} recipe={recipe} />
                ))}
            </div>
            
        </div>
    )
}