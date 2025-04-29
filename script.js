//your code here!
const list = document.getElementById('infi-list')
let  count = 10;

for (let i = 1; i <= count; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}
function addItems(num = 2) {
  for (let i = 0; i < num; i++) {
    count++;
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    list.appendChild(li);
  }
}
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems();
  }
});
