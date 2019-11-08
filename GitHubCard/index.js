/* Step 1: using axios, send a GET request to the following URL 
  (replacing the palceholder with your Github name):
  https://api.github.com/users/Catherinesjkim */

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function
   // Actually copy and paste the above URL and check out the content on the browser!

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
    create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
  follow this link in your browser https://api.github.com/users/<Your github name>/followers 
  , manually find some other users' github handles, or use the list found 
  at the bottom of the page. Get at least 5 different Github usernames and add them as
  Individual strings to the friendsArray below.
  
  Using that array, iterate over it, requesting data for each user, creating a new card for each
  user, and adding that card to the DOM. */

/* Step 3: Create a function that accepts a single object as its only argument,
  Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div> */

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function Cards(follower){
  // Create Elements
  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardProfileLink = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const bio = document.createElement('p');

  // Element Conte 
    cardImage.src = follower.avatar_url;
    cardName.textContent = `Name: ${follower.name}`;
    cardUserName.textContent = `Username: ${follower.login}`;
    cardLocation.textContent = `Location: ${follower.location}`;
    cardProfileLink.href = follower.html_url;
    cardProfileLink.textContent = `${follower.html_url}`;
    cardProfile.textContent = `Profile: `;
    cardFollowers.textContent = `Followers: ${follower.followers}`;
    cardFollowing.textContent = `Following: ${follower.following}`;
    bio.textContent = `About: ${follower.bio}`;

  // Nesting of Elements
  card.append(cardImage, cardInfo);
  cardInfo.append(cardName, cardUserName, cardLocation, cardProfile, cardFollowers, cardFollowing, bio);
  cardProfile.append(cardProfileLink);
  

  // Set Class Names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  // newCard.append(newImage);
  // newCard.append(cards);
  
  // Return Card
  return card;
};

axios.get("https://api.github.com/users/Catherinesjkim")
  .then(response => {
    console.log(response.data)
    const cardResponse = Cards(response.data);

    const allCard = document.querySelector('.cards');
    allCard.append(cardResponse);
  })

followersArray.forEach(event => {
  axios.get(`https://api.github.com/users/${event}`)
  .then(response => {
    console.log(response.data);
    const cardResponse = Cards(response.data);

    const allCard = document.querySelector('.cards');
    allCard.append(cardResponse);
  })
})


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
