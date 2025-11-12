const form = document.getElementById('study-form');
const recordList = document.getElementById('record-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const subject = document.getElementById('subject').value;
  const time = document.getElementById('time').value;
  const memo = document.getElementById('memo').value;

  const record = { date, subject, time, memo };
  saveRecord(record);
  displayRecords();
  form.reset();
});

function saveRecord(record) {
  const records = JSON.parse(localStorage.getItem('records') || '[]');
  records.push(record);
  localStorage.setItem('records', JSON.stringify(records));
}

function displayRecords() {
  const records = JSON.parse(localStorage.getItem('records') || '[]');
  recordList.innerHTML = '';
  records.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.date} - ${r.subject}（${r.time}h） ${r.memo}`;
    recordList.appendChild(li);
  });
}

displayRecords(); // 初期表示
