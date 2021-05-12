



fetch('https://randomuser.me/api/?results=100')
.then(res => res.json())
.then(data => {
    // console.log(data)
    let users = data.results;
     console.log(users)
    showData(users)
})

function showData(users) {

    let userData = '';
     users.map( user => {
        userData = userData +
    ` <div class= "user"> 
            <img src = ' ${user.picture.medium}' >
            <h3> Name:  ${user.name.first} ${user.name.last}</h3>
            <h5> Emai: ${user.email}</h5>
            <h5> Phone: ${user.phone}</h5>
            <button class ="btnDegain"> Click Me </button> 


        </div> ` 

     })

     document.getElementById('data-container').innerHTML = userData;
}