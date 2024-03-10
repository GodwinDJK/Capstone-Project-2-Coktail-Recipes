//using the npm packages
import express from "express"; 
import axios from "axios";

//creating const to use express() and initializing the listening port
const app = express();
const port= 3000;

//assigning the API URL to a const
const API_URL = "https://thecocktaildb.com/api/json/v1/1/random.php"

//linking the static folder "public"
app.use(express.static("public"));

//handling the root get request
app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL); //using axios to make a request to the API URL
        res.render("index.ejs", { //when got the response, render the index.ejs with some data from the API
            coktailName: result.data.drinks[0].strDrink,
            coktailInstructions: result.data.drinks[0].strInstructions,
            ingredient1: result.data.drinks[0].strIngredient1,
            ingredient2: result.data.drinks[0].strIngredient2,
            ingredient3: result.data.drinks[0].strIngredient3,
            ingredient4: result.data.drinks[0].strIngredient4,
            ingredient5: result.data.drinks[0].strIngredient5,
            ingredient6: result.data.drinks[0].strIngredient6,
            ingredient7: result.data.drinks[0].strIngredient7,
            ingredient8: result.data.drinks[0].strIngredient8,
            ingredient9: result.data.drinks[0].strIngredient9,
            ingredient10: result.data.drinks[0].strIngredient10,
            ingredient11: result.data.drinks[0].strIngredient11,
            ingredient12: result.data.drinks[0].strIngredient12,
            ingredient13: result.data.drinks[0].strIngredient13,
            ingredient14: result.data.drinks[0].strIngredient14,
            ingredient15: result.data.drinks[0].strIngredient15,

            measure1: result.data.drinks[0].strMeasure1,
            measure2: result.data.drinks[0].strMeasure2,
            measure3: result.data.drinks[0].strMeasure3,
            measure4: result.data.drinks[0].strMeasure4,
            measure5: result.data.drinks[0].strMeasure5,
            measure6: result.data.drinks[0].strMeasure6,
            measure7: result.data.drinks[0].strMeasure7,
            measure8: result.data.drinks[0].strMeasure8,
            measure9: result.data.drinks[0].strMeasure9,
            measure10: result.data.drinks[0].strMeasure10,
            measure11: result.data.drinks[0].strMeasure11,
            measure12: result.data.drinks[0].strMeasure12,
            measure13: result.data.drinks[0].strMeasure13,
            measure14: result.data.drinks[0].strMeasure14,
            measure15: result.data.drinks[0].strMeasure15,
        });
    } catch (error) {
        //if we get some error it is going to be change in JSON and send like a data to the error.ejs file
        res.render("error.ejs", { theError: JSON.stringify(error.response.data) });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})