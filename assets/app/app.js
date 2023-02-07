let mail = document.getElementById("email")
let psw = document.getElementById("psw")
let btn = document.getElementById("btn")

let users = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
    },
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg"
    },
    {
        id: 12,
        email: "Abdullavr@code.edu.az",
        first_name: "Abdulla",
        last_name: "rahim",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHoCm09gs4-Uw/profile-displayphoto-shrink_200_200/0/1638198770539?e=2147483647&v=beta&t=I-8rJvXh-NRvbe8Ep38CuoIyYHAKafwIxBdBgMzjuSs"
    },
    {
        id: 12,
        email: "tester@gmail.com",
        first_name: "1",
        last_name: "1",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPetTyj1vEcs5ZXelLe4QaJdiuwu-5kVtJBQ&usqp=CAU"
    }
]


btn.addEventListener('click',()=>{
    let currentUser = users.find(e => e.email === mail.value && e.first_name.toLowerCase() === psw.value.toLowerCase())
    localStorage.setItem('current',JSON.stringify(currentUser))

    currentUser === undefined ?
    alert("Sifre veya Username yanlisdir")
    :
    window.location.href = 'product.html'
})