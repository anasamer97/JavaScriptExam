/// <reference types="../@types/jquery" />
let homeSection = document.getElementById('homeSection')
let searchButton = document.getElementById('searchButton');
let categories = document.getElementById('categories');
// let searchByName = document.getElementById('searchByName')
// let searchByLetter = document.getElementById('searchByLetter')


$('#searchButton').on('click', function () {
    closeSideNavbar()
    homeSection.innerHTML = `
    <section class="search-fields bg-black w-75 m-auto " id="searchContainer">
      <section class="search d-flex gap-3">
         <input type="text" onchange="searchByName(this.value)" placeholder="Search by name.." class="form-control bg-transparent text-white"
            id="searchByName">
         <input type="text" onchange="searchByLetter(this.value)"  placeholder="Search by first letter.." class="form-control bg-transparent text-white"
            id="searchByLetter">
      </section>
   </section>

    `



})


async function getCategories() {
    let cardContent = ``;
    let FetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.categories[5].strMealThumb)
    console.log(ResponseAPI.categories[0].idMeal)
    console.log(ResponseAPI.categories.length)

    let maxMeals = Math.min(ResponseAPI.categories.length, 20)

    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.categories[i].strCategory)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.categories[i].strCategoryThumb}"  class="w-100 card-food-image">
               <div class="overlay text-center">
                  <div class="overlay-content d-flex   justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5" onclick="displayCategoryMeals('${ResponseAPI.categories[i].strCategory}')">${ResponseAPI.categories[i].strCategory}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}

categories.addEventListener('click', getCategories)

async function displayCategoryMeals(categoryItem) {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryItem}`)
    ResponseAPI = await FetchAPI.json()
    console.log(ResponseAPI)

    // let maxMeals = Math.min(ResponseAPI.meals.length, 20)

    for (let i = 0; i < ResponseAPI.meals.length; i++) {
        // console.log(ResponseAPI.meals[i].strCategory)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-maxMeals">
               <img src="${ResponseAPI.meals[i].strMealThumb}"  class="w-100 card-food-image">
               <div class="overlay text-center">
                  <div class="overlay-content d-flex"  justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;

}


async function searchByName(mealName) {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)


    let maxMeals = Math.min(ResponseAPI.meals.length, 20)


    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.meals[i].idMeal)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
               <div class="overlay">
                  <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}
async function searchByLetter(letter) {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)

    let maxMeals = Math.min(ResponseAPI.meals.length, 20)



    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.meals[i].idMeal)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
               <div class="overlay">
                  <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}




// async function searchByName(name) {
//     let cardContent = ``;
//     let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//     ResponseAPI = await FetchAPI.json()


//     console.log(ResponseAPI)
//     console.log(ResponseAPI.meals[5].strMealThumb)
//     console.log(ResponseAPI.meals[0].idMeal)
//     console.log(ResponseAPI.meals.length)


//     for (let i = 0; i < ResponseAPI.meals.length; i++) {
//         console.log(ResponseAPI.meals[i].idMeal)

//         cardContent += `
//         <div class="col-sm-6 col-md-4 col-lg-3">
//             <div class="card-content">
//                <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
//                <div class="overlay">
//                   <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
//                      <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
//                   </div>
//                </div>
//             </div>
//          </div>

//         `
//     }
// }



function openSideNavbar() {
    $(".sidebar").animate({
        left: 0
    }, 500)


    $(".close-open-toggle-icon").removeClass("fa-align-justify");
    $(".close-open-toggle-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".sidebar .navigation-items li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}


async function getArea() {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)

    let maxMeals = Math.min(ResponseAPI.meals.length, 20)



    for (let i = 0; i < ResponseAPI.meals.length; i++) {

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content fs-3 d-flex justify-content-center flex-column align-items-center text-white">
                <i class="fa-solid fa-pizza-slice"></i>
                <p   onclick="getAreaMeals('${ResponseAPI.meals[i].strArea}')" class="text-center fw-bold ">${ResponseAPI.meals[i].strArea}</p>
               
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}

async function getAreaMeals(area) {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)

    let maxMeals = Math.min(ResponseAPI.meals.length, 20)



    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.meals[i].idMeal)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
               <div class="overlay">
                  <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}


async function getIngredients() {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)

    let maxMeals = Math.min(ResponseAPI.meals.length, 20)



    for (let i = 0; i < ResponseAPI.meals.length; i++) {
        let description = ResponseAPI.meals[i].strDescription || '';
        let truncatedDescription = truncateDescription(description, 10);
        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content overflow-hidden  fs-3 d-flex justify-content-center flex-column align-items-center text-white">
                <i class="fa-solid fa-pizza-slice"></i>
                <p onclick="getIngredientsMeals('${ResponseAPI.meals[i].strIngredient}')" class="text-center fw-bold ">${ResponseAPI.meals[i].strIngredient}</p>
               <p class="overflow-hidden">${truncatedDescription}</p>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}

async function getIngredientsMeals(ingredient) {
    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)


    let maxMeals = Math.min(ResponseAPI.meals.length, 20)




    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.meals[i].idMeal)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
               <div class="overlay">
                  <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;
}



function truncateDescription(description, wordLimit) {
    let words = description.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
}

function closeSideNavbar() {
    let navWidth = $(".sidebar .sidebar-content").outerWidth()
    $(".sidebar").animate({
        left: -navWidth
    }, 500)

    $(".close-open-toggle-icon").addClass("fa-align-justify");
    $(".close-open-toggle-icon").removeClass("fa-x");

    $(".sidebar .navigation-items li").animate({
        top: 300
    }, 500)



}

closeSideNavbar()


$(".sidebar i.close-open-toggle-icon").on('click', function () {
    if ($(".sidebar").css("left") == "0px") {
        closeSideNavbar();
    } else {
        openSideNavbar();
    }
})


// function displayMeals(arr) {
//     let content = "";

//     for (let i = 0; i < arr.length; i++) {
//         content += `
//         <div class="col-md-3">
//                 <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
//                     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                         <h3>${arr[i].strMeal}</h3>
//                     </div>
//                 </div>
//         </div>
//         `
//     }

//     homeSection.innerHTML = content
// }



// async function getMealDetails(mealID) {
//     closeSideNavbar()
//     homeSection.innerHTML = ""
//     // $(".inner-loading-screen").fadeIn(300)

//     // searchContainer.innerHTML = "";
//     let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
//     respone = await respone.json();

//     displayMealDetails(respone.meals[0])
//     $(".inner-loading-screen").fadeOut(300)

// }



// async function getMeals() {
//     let fetchAPI = await fetch(`www.themealdb.com/api/json/v1/1/random.php`);
//     let JSONResponse = await fetchAPI.json()
//     console.log(JSONResponse)
// }


// getMeals();

// console.log(fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`))


// let fetchAPI = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
// console.log(fetchAPI)


// getMeals();

// Function to fetch a random meal
// function fetchRandomMeal() {
//     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data.meals[0].strMeal); // Logs the name of the random meal
//         })
//         .catch(function (error) {
//             console.error('Error:', error);
//         });
// }

// Call the function to fetch and log a random meal
// fetchRandomMeal();


async function fetchMeals(term) {

    let cardContent = ``;
    let FetchAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    ResponseAPI = await FetchAPI.json()


    console.log(ResponseAPI)
    console.log(ResponseAPI.meals[5].strMealThumb)
    console.log(ResponseAPI.meals[0].idMeal)
    console.log(ResponseAPI.meals.length)


    let maxMeals = Math.min(ResponseAPI.meals.length, 20)




    for (let i = 0; i < maxMeals; i++) {
        console.log(ResponseAPI.meals[i].idMeal)

        cardContent += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-content">
               <img src="${ResponseAPI.meals[i].strMealThumb}" class="w-100 card-food-image">
               <div class="overlay">
                  <div class="overlay-content d-flex justify-content-center align-items-center fs-3 align-content-center fw-bold">
                     <p class ="position-relative pb-5 mb-5">${ResponseAPI.meals[i].strMeal}</p>
                  </div>
               </div>
            </div>
         </div>

        `
    }

    homeSection.innerHTML = cardContent;

}


// On startup || Home page..
fetchMeals('')

