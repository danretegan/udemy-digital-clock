const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const date = dateFns.format(now, 'eeee, do MMMM yyyy');

  const html = `
    <p>${date}</p>
    <div>
      <span>${h}</span> :
      <span>${m}</span> :
      <span>${s}</span>
    </div>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
