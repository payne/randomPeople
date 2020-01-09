/* TODOs

1. updating table of who was chosen and how many times they have been choosen
2. Indicator of remaining size of the list
3. Allow input of people via query parameter on URL or via the GUI.   
4. Remember people using local storage

*/
window.addEventListener('DOMContentLoaded', function (event) {

  const students = ['Matt', 'Tracey', 'Pascal', 'Cello'];
  let people = Array.from(students);
  const person = document.getElementById('p');
  console.log(person)
  const choose = document.getElementById('c');
  console.log(choose)
  choose.addEventListener('click', function (e) {
    e.preventDefault();
    person.innerHTML = `<h1>${choosePerson()}</h1>`;
  });

  choosePerson = function () {
    if (people.length===0) people = Array.from(students);
    const person =  people[Math.floor(Math.random() * people.length)];
    people = people.filter(p => p !== person);
    console.log(`people=${people.join(",")}`)
    return person;
  }

})