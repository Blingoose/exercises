// 1. Loop over the array with the forEach method and dynamically create an ordered list
//  of the first and last names of the objects.
// 2. Remove the bullet points of the ordered list with JavaScript.
// 3. Create a custom data attribute called “data-id” and attach the id value to each li.

const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const names = (arr) => {
  const newDiv = document.createElement("div");
  newDiv.className = "user-names";
  const orderedList = document.createElement("ol");
  document.body.prepend(newDiv);
  newDiv.appendChild(orderedList);
  orderedList.style.listStyleType = "none";

  // playing a little bit.
  newDiv.style.height = "98vh";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.textAlign = "center";
  newDiv.style.fontSize = "25px";
  arr.forEach((e) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${e.firstName} ${e.lastName}`;
    orderedList.append(newLi);
    newLi.dataset.id = e.id;
  });
};
names(users);
