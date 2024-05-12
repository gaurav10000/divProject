const bb = document.getElementById('bbx');
const pp = document.getElementById('dbt');
const days = document.getElementById('days');
const ds1 = document.getElementById('ds');
const containervalue = document.getElementById('connection');
const placeName = document.getElementById('place-name');
const randimages = ["https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1503457574462-bd27054394c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
const lo = document.getElementById('loc');
const iimg = document.getElementById('planner-image');
const overlay = document.getElementById('overlay');
const svg = document.getElementById('ssv');
var storedData;
bb.addEventListener('click', function () {
    containervalue.innerHTML = "";
    if (!days.value) {
        alert('Please provide the number of days');
    }
    else if (!placeName.value) {
        alert('Please provide the place name');
    }
    else {
        pp.style.display = 'block';
        ssv.style.display = 'block';
        iimg.style.display = 'none';
        overlay.innerText = "";
        fetch(`/trip/${days.value}/${placeName.value}`)
            .then(res => res.json())
            .then(data => {
                storedData = data.data;
            })
            .then(() => {
                ssv.style.display = 'none';
                console.log("data aagaya dekh lo");
                overlay.innerText = `${days.value}- Day Trip to ${placeName.value}`
                iimg.style.display = 'block';
                iimg.src = randimages[Math.floor(Math.random() * randimages.length)];
                pp.style.display = 'block';
                ds1.innerText = days.value;
                dis();
            });


        // setTimeout(() => {
        //     // overlay.innerText = "dek le bhaio..."
        //     ssv.style.display = 'none';
        //     console.log("data aagaya dekh lo");
        //     overlay.innerText = `${days.value}- Day Trip to ${placeName.value}`
        //     iimg.style.display = 'block';
        //     iimg.src = randimages[Math.floor(Math.random() * randimages.length)];
        //     pp.style.display = 'block';
        //     ds1.innerText = days.value;
        //     dis();
        // }, 6500);
    }
});
function dis() {
    containervalue.innerHTML = storedData.map(function (item) {
        return `
    <div class="day">
        <h3 id="dday">${item.day}</h3>
        <div id="actual">
        <div class="morning">
            <h4>${item.Morning.time}</h4>
            <h2><i class="ri-walk-line"></i> ${item.Morning.activity}</h2>
            <p>Time ~ ${item.Morning.duration}</p>
        </div>
        <div class="afternoon">
            <h4>${item.Afternoon.time}</h4>
            <h2> <i class="ri-walk-line"></i> ${item.Afternoon.activity}</h2>
            <p>Time ~ ${item.Afternoon.duration}</p>
        </div>
        <div class="evening">
            <h4>${item.Evening.time}</h4>
            <h2><i class="ri-walk-line"></i> ${item.Evening.activity}</h2>
            <p>Time ~ ${item.Evening.duration}</p>
        </div>
        </div>
        
    </div>
    `}).join("");

}

