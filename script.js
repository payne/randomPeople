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
  const choose = document.getElementById('c');
  const historyDiv = document.getElementById('history');
  let history = {};
  choose.addEventListener('click', function (e) {
    e.preventDefault();
    const chosen =  choosePerson();
    person.innerHTML = `<h1>${chosen}</h1>`;
    history[chosen] = history[chosen] ? history[chosen]+1 : 1;
    let lst="<ol>\n";
    for (const k in history) {
      lst+=`<li>${k} called on ${history[k]} times</li>\n`;
    }
    lst+="</ol>";
    historyDiv.innerHTML=lst;
  });

  choosePerson = function () {
    if (people.length===0) people = Array.from(students);
    const person =  people[Math.floor(Math.random() * people.length)];
    people = people.filter(p => p !== person);
    console.log(`people=${people.join(",")}`)
    return person;
  }

})