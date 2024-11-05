// console.log("Hello");
// function fetchData(){
// const response = fetch("https://dummyjson.com/recipes");
// response.then(data => {
//     console.log(data);
//     data.json().then((res) => {
//         console.log(res.recipes[0].name);

//         let output = `${res.recipes[0].id + " " + res.recipes[0].name + " " + res.recipes[0].ingredients}`; 
//         document.getElementById("rec").innerHTML = output;

//     })
// })
// .catch(error => console.log(error))
// .finally(() => console.log("Hi, finally closed all the resources"))
// }

// async function fetchData() {
//     try {
//         const response = await fetch('https://dummyjson.com/recipes');
//         const data = await response.json();

//         const table = document.getElementById('dataTable');

//         data.forEach(item => {
//             const row = table.insertRow();
//             row.insertCell().textContent = item.id;
//             row.insertCell().textContent = item.name;
//             row.insertCell().textContent = item.ingredients.join(', ');
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

async function fetchData() {
    console.log("Hello");

    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        console.log(data);
        console.log(data.recipes[0].name);

        // Display the first recipe’s details in the "rec" div
        let output = `${data.recipes[0].id} ${data.recipes[0].name} ${data.recipes[0].ingredients.join(', ')}`;
        document.getElementById("rec").innerHTML = output;

        // Add recipes to the table
        const table = document.getElementById('dataTable');
        data.recipes.forEach(recipe => {
            const row = table.insertRow();
            row.insertCell().textContent = recipe.id;
            row.insertCell().textContent = recipe.name;
            row.insertCell().textContent = recipe.ingredients.join(', ');
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        console.log("Hi, finally closed all the resources");
    }
}
