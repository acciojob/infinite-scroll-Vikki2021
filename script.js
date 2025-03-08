//your code here!
let main=document.querySelector('main');
let ol = document.getElementById('infi-list');

for (let i = 1; i <= 10; i++) {
  ol.innerHTML += `<li>item ${i}</li>`;
}

function addItems() {
  let currentLength = ol.children.length;
	ol.innerHTML+=`
	<li>item ${currentLength + 1}</li>
	<li>item ${currentLength + 2}</li>
	`
}

ol.addEventListener('scroll', () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight-10 ) {
    addItems();
  }
});