/* TODOs

1. updating table of who was chosen and how many times they have been choosen
2. Indicator of remaining size of the list
3. Allow input of people via query parameter on URL or via the GUI.   
4. Remember people using local storage

*/
window.addEventListener('DOMContentLoaded', function (event) {
  console.log(window.location);
  const students = ['Matt', 'Tracey', 'Pascal', 'Cello'];
  let people = Array.from(students);
  const person = document.getElementById('p');
  const choose = document.getElementById('c');
  const historyDiv = document.getElementById('history');
  const choiceHistoryDiv = document.getElementById('choiceHistoryDiv');
  let choiceHistory=[];
  let historyCount = {};
  choose.addEventListener('click', function (e) {
    e.preventDefault();
    const chosen =  choosePerson();
    person.innerHTML = `<h1>${chosen}</h1>`;
    historyCount[chosen] = historyCount[chosen] ? historyCount[chosen]+1 : 1;
    choiceHistory.push(chosen);
    let lst=`<p>${people.length} this round.</p><ol>\n`;
    for (const k in historyCount) {
      lst+=`<li>${k} called on ${historyCount[k]} times</li>\n`;
    }
    lst+="</ol>";
    historyDiv.innerHTML=lst;
    lst = '<ol>';
    lst += choiceHistory.map(i => `<li>${i}</li>\n`).join(''); 
    lst += '</ol>'
    choiceHistoryDiv.innerHTML=lst;
  });

  choosePerson = function () {
    if (people.length===0) people = Array.from(students);
    const person =  people[Math.floor(Math.random() * people.length)];
    people = people.filter(p => p !== person);
    console.log(`people=${people.join(",")}`)
    return person;
  }

})