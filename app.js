const $ = s => document.querySelector(s);
const done = `<h1 class="names">
Carla & Aaron
</h1>

<p class="knot">
Tied the knot on May 15, 2021
</p>`;


function carla () {
    const theDate = new Date(`May 15 ${new Date().getFullYear() + 1} 14:00:00`);
    const curTime = new Date();
    const diff = theDate - curTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;



    $('.secs').textContent = s < 10 ? '0' + s: s;
    $('.mins').textContent = m < 10 ? '0' + m: m;
    $('.hours').textContent = h < 10 ? '0' + h: h;
    $('.days').textContent = d < 10 ? '0' + d: d;

    // When done
    if (diff < 0) $('.stuffs').innerHTML = done;
}

// run each seconds
setInterval(carla, 1000);


////////////////////////
// Modal

$('.info').addEventListener('click', () =>
    $('.modal').style.display = 'block');


$('.close').addEventListener('click', () =>
    $('.modal').style.display = 'none');