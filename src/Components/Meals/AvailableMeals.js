import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//     {
//         id:'m1',
//         name:'Chicken Briyani',
//         description:'Dindigul Thalapakatty Briyani',
//         price:180,
//     },
//     {
//         id:'m2',
//         name:'Pizza',
//         description:'A German Speciality',
//         price:150,
//     },
//     {
//         id:'m3',
//         name:'Cheese Burger',
//         description:'American, raw, meaty',
//         price:100,
//     },
//     {
//         id:'m4',
//         name:'Meals',
//         description:'Healthy.... and green...',
//         price:200,
//     },
//     {
//         id:'m5',
//         name:'Veg Sandwich',
//         description:'Tasty.... and Yummy...',
//         price:70,
//     }
// ]

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async() => {
            const response = await fetch('https://react-demo-22242-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
              }
        
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id:key,
                    name:responseData[key].name,
                    description: responseData[key].description,
                    price:responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
          });
        }, []);
    

    if(isLoading) {
        return(
            <section className={classes.mealsLoading}>
                <p>Loading....</p>
            </section>
        );
    }

    if (httpError) {
        return (
          <section className={classes.MealsError}>
            <p>{httpError}</p>
          </section>
        );
      }

    // const mealsList = DUMMY_MEALS.map (meal => 
    //     <MealItem 
    //         id={meal.id}
    //         key={meal.id} 
    //         name={meal.name} 
    //         description={meal.description} 
    //         price={meal.price} 
    //     />);

    const mealsList = meals.map ((meal) => 
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
        />);

    return (
        <section className={classes.meals}>
            <Card >
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>


    )
}

export default AvailableMeals;