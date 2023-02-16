var form_check = document.querySelector('.search')
form_check.addEventListener('submit',(e)=>{
  e.preventDefault()
   var sumbit=document.querySelector('[placeholder="Enter Something"]')
   var sumbit_value=sumbit.value
//    console.log(sumbit_value)
   api(page,sumbit_value)
})


var page = 1;

async function api(per_page,sumbit_value) {
    var api = fetch(`https://api.unsplash.com/search/photos/?client_id=80voezOU2LBeZNzYP0xA7UllOWC19fhFdOrxWHyLAIY&query=${sumbit_value}&per_page=100&page=${per_page}&orientation=landscape`)
    var prom = await api
    var out = prom.json()
    var out1 = await out
    console.log(out1.results)
    parent = document.querySelector('.parent')
    parent.innerHTML=''
    for (let i of out1.results) {
        // console.log(i.urls.thumb)
        child = document.createElement('img')
        child.setAttribute('src', i.urls.thumb)
        parent.append(child)
    }
}
  

window.addEventListener('scroll', () => {
    if ((window.scrollY + window.innerHeight) >
        document.querySelector('body').offsetHeight) {
        page++
        // console.log(page)
        api(page,sumbit_value)
    }
})



// async function api2(){
//     var apiData= fetch('https://api.unsplash.com/search/photos/?client_id=8TeG_pjd5hF-NmHrP-Y8Zhx2qdbUavTimonCdzxtuAk&query=nature&orientation=portrait')
//    console.log(apiData)
//    var res= await apiData
//    var out =res.json()
//     var out1=await out
//     // console.log(out1.urls.thumb)
//     parent = document.querySelector('.parent')
//     for(let i of out1){
//         console.log(i.urls.thumb)
//         var childimage =document.createElement('img')
//         childimage.setAttribute('src',i.urls.thumb)
//         parent.append(childimage)
//     }
  
// }
// api2()
