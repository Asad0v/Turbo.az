const hamburgermenu = document.querySelector('#hamburgermenu');
const navbartoggler = document.querySelector('#navbartoggler');
const basket = document.querySelector('#basket');
const cards = document.querySelector('#cards');
const inp = document.querySelector('#inp');
const automarka = document.querySelector('#automarka');
const automarkamobile = document.querySelector('#automarkamobile');
const automodel = document.querySelector('#automodel');
const city = document.querySelector('#city');
const bannovu = document.querySelector('#bannovu');
const minil = document.querySelector('#minil');
const maxil = document.querySelector('#maxil');
const totalamount = document.querySelector('#totalamount');
const heart = document.querySelectorAll('.heart')

const markaInp = document.querySelector('.markaInp');
const qiymetInp = document.querySelector('.qiymetInp');
const ilInp = document.querySelector('.ilInp');
const imgInp = document.querySelector('.imgInp');
const modelInp = document.querySelector('.modelInp');
const matorInp = document.querySelector('.matorInp');
const rengInp = document.querySelector('.rengInp');
const yenielan = document.getElementById('yenielan')
const yenielanmobile = document.getElementById('yenielanmobile')
const filtsec = document.getElementById('filtsec')
const filtsecmob = document.getElementById('filtsecmob')
function newElan() {
    const  newData = {
        id: idplus++, status: false, marka: `${markaInp.value}`, qiymet: `${qiymetInp.value}`, model: `${modelInp.value}`, mator: `${matorInp.value}`, il: `${ilInp.value}`, reng: `${rengInp.value}`, img: `${imgInp.value}`
    }
    arr.push(newData)
    imgInp.value = ""
    rengInp.value = ""
    ilInp.value = ""
    matorInp.value = ""
    modelInp.value = ""
    qiymetInp.value = ""
    markaInp.value = ""
    printCards()
}
function handleToggler(status) {
    navbartoggler.style.right = status ? '0' : '-30vw'
}
function openBasket(status) {
    const basket = document.getElementById("basket");
    
    if (window.innerWidth < 640) {
        basket.style.right = status ? '0' : '-100%';
    } else {
        basket.style.right = status ? '0' : '-40vw';
    }
}

function openNewAdMob(status) {
    yenielanmobile.style.top = status ? '60px' : '-200px'
    filtsecmob.style.marginTop = status ? '195px' : '0px'
}
function openNewAd(status) {
    yenielan.style.top = status ? '122px' : '-110px'
    filtsec.style.marginTop = status ? '105px' : '0px'
}

const azerbaijanCities = [
    "Bakı", "Gəncə", "Sumqayıt", "Mingəçevir", "Şəki", 
    "Şirvan", "Lənkəran", "Naxçıvan", "Yevlax", "Xankəndi", 
    "Quba", "Qusar", "Xaçmaz", "Şamaxı", "İsmayıllı", 
    "Qəbələ", "Zaqatala", "Balakən", "Gədəbəy", "Tovuz", 
    "Ağstafa", "Qazax", "Şəmkir", "Bərdə", "Ağcabədi", 
    "Ağdam", "Füzuli", "Cəbrayıl", "Zəngilan", "Laçın", 
    "Kəlbəcər", "Lerik", "Astara", "Masallı", "Cəlilabad", 
    "Biləsuvar", "Salyan", "Neftçala", "Hacıqabul", "Göyçay", 
    "Ağsu", "Ucar", "Zərdab", "Sabirabad", "Saatlı"
];
const avtomobilBanNovleri = [ ' Ban novu ',
    "Sedan", "Yolsuzluq (SUV)", "Hetçbek", "Kupe", "Kabriolet", 
    "Pikap", "Minivan", "Furqon", "Universal", "Krossover", 
    "Rodster", "Targa", "Fastbek", "Limuzin", "Mikroavtomobil"
];
function  makeMin() {
    minil.innerHTML = `<option selected disabled>Min il</option>`;
    maxil.innerHTML = `<option selected disabled>Maks il</option>`;
    for (let i = 2025; i >= 1905; i--) {
        minil.innerHTML += `
        <option class="  bg-red-500 text-left text-white">${i} </option>`
        maxil.innerHTML += `
        <option class="  bg-red-500 text-left text-white">${i} </option>`
        
    }
}
makeMin()
function  makeBan() {
    for (let i = 0; i < avtomobilBanNovleri.length; i++) {
        bannovu.innerHTML += `<div class="flex"><option class="  bg-red-500 text-left text-white">${avtomobilBanNovleri[i]} </option><input type="checkbox"></div>`
    }
}
makeBan()
function  makeCity() {
    for (let i = 0; i < azerbaijanCities.length; i++) {
        city.innerHTML += `<option class=" bg-red-700 text-center text-white">${azerbaijanCities[i]} </option>`
    }
}
makeCity()
const marka = ['🚗 Bütün Avtomobillər']
const model = ['Model']
function makeOpt() {
    arr.map(item => {
        if (!marka.includes(item.marka)) {
            marka.push(item.marka)
        }
    })
    for (let i = 0; i < marka.length; i++) {

         automarkamobile.innerHTML += `
        <option class=" bg-red-700 text-center text-white">${marka[i]}</option>`
        automarka.innerHTML += `
        <option class=" bg-red-700 text-center text-white">${marka[i]}</option>`

    }
    console.log(marka);
}
makeOpt()
function makeOptModel() {
    arr.map(item => {
        if (!model.includes(item.model)) {
            model.push(item.model)
        }
    })
    for (let i = 0; i < model.length; i++) {
        automodel.innerHTML += `<option class=" bg-red-700 text-center text-white">${model[i]}</option>`

    }
    console.log(marka);
}
makeOptModel()
let cardsNum = 4
function printCards() {
    cards.innerHTML = ''
    let kod = ''
    arr
        .slice(0, cardsNum)
        .map(item => kod += `<div class="mt-[20px] sm:mt-0 sm:w-[255px]  md:w-[290px] relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
        <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
        <i  onclick="makeHeart(this, ${item.id})" class="heart fa-solid fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
        <div class="mt-2  bg-white  pl-3">
        <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
        <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide cursor-pointer">${item.marka} ${item.model}</h2>
        </div>
        <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}</span></p>
        <button onclick="buy(${item.id})" class="mt-[20px] p-[10px] px-[30px] rounded-[10px] transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white duration-300">AL</button>

        </div>`)
    cards.innerHTML = kod
}
printCards()
let umumiqiymet = 0
const basketArr = []
const shoppingList = document.getElementById('shoppingList')
function buy(id) {
        const obj = arr.find(item => item.id == id)
        const product = basketArr.find(item => item.id == id)

        if(!product){
            basketArr.push({...obj, count:1})
        }else product.count += 1
        console.log(basketArr);
        
        printBasket()
    
            
}
function removeShopCard(id){
    
     const index = basketArr.findIndex(item => item.id == id)
     basketArr.splice(index, 1)
     printBasket()

    
}

function handleCount(x,id) {
    const product = basketArr.find(item => item.id == id)
    if(product.count > 1 && x == -1 || x == 1)     product.count += x
    printBasket()
}

function printBasket(){
    const total = basketArr.reduce((acc, item) => {return acc + Number(item.qiymet.replace(/\s/g, '')) * item.count}, 0) 
            totalamount.innerHTML = `${total} AZN`

    shoppingList.innerHTML = ""
    
    basketArr.forEach(item =>
    shoppingList.innerHTML +=`
		<div class="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div class="flex w-full space-x-2 sm:space-x-4 p-5 bg-red-400">
				<img class="flex-shrink-0 object-cover w-20 h-20 rounded-xl outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="${item.img}" alt="Polaroid camera">
				<div class="flex flex-col justify-between w-full pb-4">
					<div class="flex justify-between w-full pb-2 space-x-2">
						<div class="space-y-1">
							<h3 class="text-lg font-semibold leading-snug sm:pr-8">${item.marka} ${item.model}</h3>
							<p class="text-sm dark:text-white">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}</p>
						</div>
						<div class="text-right">
							<p class="text-lg font-semibold">${item.qiymet} AZN</p>
							<p class="text-md  dark:text-blue-700">${Number(item.qiymet.replace(/\s/g, '')) * item.count}</p>
						</div> 
					</div>
                    <div class=" flex gap-1 items-center">
                        <button onclick="handleCount(-1,${item.id})" class=" px-2 p-1 rounded-md border-[2px] border-white  bg-red-500">-</button>
                            <span>${item.count}</span>  
                        <button onclick="handleCount(1,${item.id})" class=" px-2 p-1 rounded-md border-[2px] border-white  bg-red-500">+</button>
                    </div>
					<div class="flex text-sm divide-x">
						<button  onclick="removeShopCard(${item.id})" type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<button type="button" class="flex items-center px-2 py-1 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
							</svg>
							<span>Add to favorites</span>
						</button>
					</div>
				</div>
			</div>
        </div>
            
            `
        
    )
}


function showDet(id) {
    // window.location.href = `http://127.0.0.1:5500/detail.htm?id=${id}`
    window.location.href = `https://turboaz-byrashid.vercel.app/?id=${id}`

    // const obj = arr.find(item => item.id == id)
    // console.log(obj);
    // automarka.style.display = 'none'
    // cards.innerHTML = ''
    // cards.innerHTML = 
    // showBtn.style.display = 'none'
}
function printFilter() {

    const filterArr = arr.filter(item => item.marka.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase()))
    let kod = filterArr.map(item => `<div class=" w-[290px] relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
                                            <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
                                            <i  onclick="makeHeart(this)" class="heart fa-solid fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
                                            <div class="mt-2  bg-white  pl-3">
                                            <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
                                            <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide">${item.marka} ${item.model}</h2>
                                            </div>
                                            <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
                                        </div>`
    )

    cards.innerHTML = kod

    if (filterArr.length == 0) {
        cards.innerHTML = `<p class="text-lg font-bold" > Axtardiginiz Avtomobil satishda  yoxdur...</p>`

    }
}
function markaFilter(event) {
    let selectedElement = event.target; // Hansı `select` dəyişibsə onu götür
    let selectedValue = selectedElement.value;
    
    if (selectedValue == '🚗 Bütün Avtomobillər') {
        printCards();
        return;
    }
    
    const filterArr = arr.filter(item => item.marka.toLocaleLowerCase().includes(selectedValue.toLocaleLowerCase()));
    // console.log(filterArr);

    let kod = filterArr.map(item => `
        <div class=" w-[290px] relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
            <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
            <i  onclick="makeHeart(this)" class="heart fa-solid fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
            <div class="mt-2  bg-white  pl-3">
                <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
                <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide">${item.marka} ${item.model}</h2>
            </div>
            <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
        </div>
    `).join("");

    cards.innerHTML = kod;
}

function modelFilter() {
    if (automodel.value == 'Model') {
        printCards()
        return
    }
    const filterArr = arr.filter(item => item.model.toLocaleLowerCase().includes(automodel.value.toLocaleLowerCase()))
    // console.log(filterArr);
    
    let kod = filterArr.map(item => `<div class=" w-[290px] relative  max-w-xs   rounded-md shadow-md  dark:text-gray-900">
        <img src="${item.img}" alt="" class=" object-cover object-center w-full rounded-tl-md rounded-tr-md h-72 dark:bg-gray-500">
        <i  onclick="makeHeart(this)" class=" heart fa-regular fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer  "></i>
        <div class="mt-2  bg-white  pl-3">
        <span class="block text-2xl font-bold  uppercase text-black">${item.qiymet} AZN</span>
        <h2 onclick="showDet(${item.id})" class="text-lg font-normal tracking-wide">${item.marka} ${item.model}</h2>
        </div>
        <p class="dark:text-gray-800 pb-4 pl-3">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}<span></p>
        </div>`
    )

    cards.innerHTML = kod
}

function showMore() {
    cardsNum += 4
    showBtn.style.display = cardsNum > arr.length ? 'none' : 'block'
    printCards()
}



function makeHeart(element, id) {
    arr.status = !arr.status
    element.style.color = arr.status ? "red" : "white"



    const favList = JSON.parse(localStorage.getItem('favList')) || []

    const isElementExists = favList.some(item =>item.id == id) 
    if(!isElementExists){
        const favelement = arr.find(item => item.id == id)
        favList.push(favelement)
        
        localStorage.setItem('favList', JSON.stringify(favList))

    }else console.warn('Bu element avtomobil elave edilib')

}
const premiumcards = document.getElementById('premiumcards')
function cheapToExp() {
     const cheaptoexp = arr.sort((a, b) => parseFloat(b.qiymet) - parseFloat(a.qiymet))
         console.log(cheaptoexp);
         let kod = ''
         cheaptoexp.map(item => kod += `<div class="swiper-slide    relative  max-w-[200px] sm:max-w-[250px]  h-min  rounded-md shadow-md  dark:text-gray-900">
        <img src="${item.img}" alt="" class=" object-cover object-center w-full  rounded-tl-md rounded-tr-md  dark:bg-gray-500">
        <i  onclick="makeHeart(this)" class="heart fa-solid fa-heart absolute right-5 top-5 text-xl text-white cursor-pointer "></i>
        <div class="mt-2  bg-white  pl-3 text-left">
        <span class="block text-lg font-bold  uppercase text-black">${item.qiymet} AZN</span>
        <h2 onclick="showDet(${item.id})" class="text-sm font-normal tracking-wide cursor-pointer">${item.marka} ${item.model}</h2>
        </div>
        <p class="text-sm dark:text-gray-800 pb-4 pl-3 text-left">${item.il}, ${item.mator}, <span style=" color: ${item.reng};">${item.reng}</span></p>
        <button onclick="buy(${item.id})" class=" mt-[10px]  px-[10px] rounded-[10px] text-white  transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white duration-300">al</button>

        </div>`)
        premiumcards.innerHTML = kod
    
    // console.log(arr.filter(item => arr.sort(item.qiymet,item.qiymet) => item.qiymet-item.qiymet));
    
    // console.log(arr.sort((a, b) => a - b));
    
 }
 cheapToExp()
