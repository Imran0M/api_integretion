// var form_check = document.querySelector('.search')
// form_check.addEventListener('submit',(e)=>{
//   e.preventDefault()
//    var sumbit=document.querySelector('[placeholder="Enter Image Name"]')
//    var sumbit_value= sumbit.value
// //    console.log(sumbit_value)
//    api(page,sumbit_value)
// })

// var page = 1;

// async function api(per_page,sumbit_value) {
//     var api = fetch(`https://api.unsplash.com/search/photos/?client_id=80voezOU2LBeZNzYP0xA7UllOWC19fhFdOrxWHyLAIY&query=${sumbit_value}&per_page=1000&page=${per_page}&orientation=landscape`)
//     var prom = await api
//     var out = prom.json()
//     var out1 = await out
//     console.log(out1.results)
//     parent = document.querySelector('.parent')
//     parent.classList.add('parent-style')
//     parent.innerHTML=''
//     for (let i of out1.results) {
//         // console.log(i.urls.thumb)
//         child = document.createElement('img')
//         child.classList.add('img-style')
//         child.setAttribute('src', i.urls.thumb)
//         parent.append(child)
//     }
// }

// window.addEventListener('scroll', () => {
//     if ((window.scrollY + window.innerHeight) >
//         document.querySelector('body').offsetHeight) {
//         page++
//         console.log(page)
//         api(page,sumbit_value)
//     }
// })


// var form_check = document.querySelector('.search')
// form_check.addEventListener('submit',(e)=>{
//   e.preventDefault()
//    var sumbit=document.querySelector('[type="text"]')
//    var sumbit_value=sumbit.value
// //    console.log(sumbit_value)
//    api(page,sumbit_value)
// })


// var page = 1;

// async function api(per_page,sumbit_value) {
//     var api = fetch(`https://api.unsplash.com/search/photos/?client_id=80voezOU2LBeZNzYP0xA7UllOWC19fhFdOrxWHyLAIY&query=${sumbit_value}&per_page=100&page=${per_page}&orientation=landscape`)
//     var prom = await api
//     var out = prom.json()
//     var out1 = await out
//     console.log(out1.results)
//     parent = document.querySelector('.parent')
//     parent.innerHTML=''
//     for (let i of out1.results) {
//         // console.log(i.urls.thumb)
//         child = document.createElement('img')
//         child.setAttribute('src', i.urls.thumb)
//         parent.append(child)
//     }
// }
  

// window.addEventListener('scroll', () => {
//     if ((window.scrollY + window.innerHeight) >
//         document.querySelector('body').offsetHeight) {
//         page++
//         // console.log(page)
//         api(page,sumbit_value)
//     }
// })



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