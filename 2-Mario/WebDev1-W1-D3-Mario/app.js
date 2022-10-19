function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
    
}




let score=-1;
const init = () => {
    //get the avatar
    var avatar=document.getElementById("#avatar");

    //get the coin
    var coin=document.getElementById("#coin");
    

    moveCoin();
    
    window.addEventListener('keydown', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
             moveVertical(avatar, 50);
        } else if (e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50)
        }else if (e.key === 'ArrowLeft' || e.key === 'Left'){
            avatar.style.transform="scale(-1,1)";
            moveHorizontal(avatar, -50)
        }else if (e.key === 'ArrowRight' || e.key === 'Right'){
            avatar.style.transform="scale(1,1)";
            moveHorizontal(avatar, 50)
        }

        if(isTouching(avatar,coin)) moveCoin();
      
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    if (((currTop+amount+element.height)< window.innerHeight)&&((currTop+amount)>=0)){
        element.style.top = `${currTop + amount}px`;
    }
}
const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    if (((currLeft+amount+element.width)<window.innerWidth) && ((currLeft+amount)>=0)){
        element.style.left = `${currLeft + amount}px`;
    }
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

//Printing the score

var prin = document.createElement("div");
prin.id="score";

const moveCoin = () => {
    score+=1;
    console.log(coin.width,coin.height);
    let x = Math.floor(Math.random() * (window.innerWidth-coin.width))
    if (x<0){
        x=0
    }

    let y = Math.floor(Math.random() * (window.innerHeight-coin.height))
    if(y<0){
        y=0
    }
    
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;

    
    prin.textContent="SCORE: "+score;
    
}

document.body.appendChild(prin)

init();