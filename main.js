const hamburgermenu = document.querySelector('#hamburgermenu');
const navbartoggler = document.querySelector('#navbartoggler');
const basket = document.querySelector('#basket');
const cards = document.querySelector('#cards');
const inp = document.querySelector('#inp');
const automarka = document.querySelector('#automarka');
const heart = document.querySelectorAll('.heart')
function handleToggler(status) {
    navbartoggler.style.right = status ? '0' : '-30vw'
}
function openBasket(status) {
    basket.style.right = status ? '0' : '-30vw'
   
}
const arr = [
    { id: 1, status:false, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg' },
    { id: 2, status:false, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg' },
    { id: 3, status:false, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' },
    { id: 4, status:false, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg' },
    { id: 5, status:false, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' },
    { id: 6, status:false, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' },
    { id: 7, status:false, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' },
    { id: 8, status:false, marka: 'Porche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg' },
    { id: 9, status:false, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' },
    { id: 10, status: false, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg' },
    { id: 11, status: false, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg' },
    { id: 12, status: false, marka: 'Toyota', qiymet: '15 800', model: 'Corolla', mator: '1.6', il: '2016', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg' },
    { id: 13, status: false, marka: 'Honda', qiymet: '18 500', model: 'Civic', mator: '1.8', il: '2017', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg' },
    { id: 14, status: false, marka: 'Volkswagen', qiymet: '23 200', model: 'Golf', mator: '2.0', il: '2019', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg' }
]
const marka = ['Bütün Avtomobillər']
function makeOpt() {
    arr.map(item =>{
        if (!marka.includes(item.marka)) {
            marka.push(item.marka)
        }
    })
    for (let i = 0; i < marka.length; i++) {
        automarka.innerHTML += `<option class=" bg-red-700 text-center text-white">${marka[i]}</option>`
        
    }
    console.log(marka);
}
makeOpt()
function printCards() {
    cards.innerHTML = ''
    let kod = ''
    arr.map(item => kod += `<div class=" relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
        <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
        <i  onclick="makeHeart(this)" class="heart fa-regular fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
        <div class="mt-2  bg-white  pl-3">
        <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
        <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide cursor-pointer">${item.marka} ${item.model}</h2>
        </div>
        <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
        </div>`)
    cards.innerHTML = kod
}
printCards()

function showDet(id) {
    const obj = arr.find(item => item.id == id)
    console.log(obj);
    automarka.style.display = 'none'
    cards.innerHTML = ''
    cards.innerHTML = `
                        <section class="">
                        <h2 class="px-8 py-3 text-black text-xl font-bold">${obj.marka} ${obj.model}, ${obj.il}, ${obj.mator}, ${obj.reng}</h2>
                        <div class="container max-w-6xl  mx-auto space-y-6 sm:space-y-12">
                            <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-5  mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                                <img src="${obj.img}" alt="" class="object-cover w-full h-64  sm:h-96 lg:col-span-7 dark:bg-gray-500 rounded-[8px]">
                                <div class=" p-3 space-y-2 lg:col-span-5 border-[1px] border-blue-500 rounded-[8px] ">
                                    <h3 class="text-2xl font-bold sm:text-2xl ">Qiymət: ${obj.qiymet} AZN</h3>
                                    <div class="flex gap-2">
                                        <img class="w-[70px] h-16 rounded-[12px]" src="${obj.img}">
                                        <div class="flex flex-col justify-center ">
                                            <h3 class="font-semibold">Autolux Azerbaijan - ${obj.marka}</h3>
                                            <p class=" text-gray-400">Rəsmi nümayəndə</p>
                                        </div>
                                    </div>
                                    <button class="m-auto rounded-[10px] py-4 lg:w-[320px] w-[230px] bg-green-500 text-white flex gap-1 justify-center items-center" ><i class="fa-solid fa-phone"></i>Zeng et</button>
                                    <p class="font-medium">There's Only One. </p>
                                    <p class="text-gray-500" >${obj.marka} avtomobilərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir. 
                                    20% ilkin ödəniş, 10% illik bank faizi, 5 illik</p>
                                    <button class="m-auto rounded-[10px] py-4 lg:w-[320px] w-[230px]  bg-blue-500  text-white flex gap-1 justify-center items-center" >Salona Keç</button>

                                </div>
                            </a>
                        </div>
                    </section>
        `

}
function printFilter() {
    
    const filterArr = arr.filter(item =>item.marka.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase()))
        let kod = filterArr.map(item => `<div class=" relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
                                            <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
                                            <i  onclick="makeHeart(this)" class="heart fa-regular fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
                                            <div class="mt-2  bg-white  pl-3">
                                            <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
                                            <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide">${item.marka} ${item.model}</h2>
                                            </div>
                                            <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
                                        </div>`
        )
        
        cards.innerHTML = kod

        if(filterArr.length == 0){
            cards.innerHTML = `<p class="text-lg font-bold" > Axtardiginiz Avtomobil satishda  yoxdur...</p>`

        }
}

function markaFilter() {
    if(automarka.value == 'Bütün Avtomobillər'){
        printCards()
        return
    }
    const filterArr = arr.filter(item =>item.marka.toLocaleLowerCase().includes(automarka.value.toLocaleLowerCase()))
    let kod = filterArr.map(item => `<div class=" relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
        <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
        <i  onclick="makeHeart(this)" class="heart fa-regular fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
        <div class="mt-2  bg-white  pl-3">
        <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
        <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide">${item.marka} ${item.model}</h2>
        </div>
        <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
        </div>`
)

cards.innerHTML = kod
    
}
function makeHeart(element){
    arr.status = !arr.status
    element.style.color = arr.status ? "red" : "white"
    
}
