import RecipeCard from "../components/recipecard"
export default function Recipes(){
    const recipes = [
        {
            title: "protein muffins",
            image: "/images/proteinm3.jpg"
        }, 
        {
            title: "chilli paneer",
            image: "/images/chillipaneer.jpg"
        },
        {
            title: "quinoa salad",
            image: "/images/quinoa.jpg"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "cucumber roll",
            image: "/images/roll.jpg"
        },
        {
            title: "tomato soup",
            image: "/images/soup.jpg"
        }, 
        {
            title: "paneer & cabbage dumplings",
            image: "public/images/dumplings.jpg"
        },
        {
            title: "black bean tacos",
            image: "/images/taco.jpg"
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
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
            
        </div>
    )
}