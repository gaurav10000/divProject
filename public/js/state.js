const planroute = document.getElementById('planjourney')
const pla = document.getElementById('naame');
const explore = document.getElementById('more-detail');
console.log(planroute);
planroute.addEventListener('click',()=>{
    window.location.href = `/page/${pla.innerText}/plan`
})
// planroute.forEach(plan => {
//     plan.addEventListener('click' ,()=>{
//         window.location.href = `/page/${pla.innerText}/plan`
//     });
// });


