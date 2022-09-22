/*BlackJack is well known casino game in the world! The purpose of the game is your sum of the cards of point equal 21 (does not matter how many cards you taked )
 if sum of the points be bellow 21 you can take again and again ! Howerever,if sum of point be above of 21 , you lose ! Hence your sum sum of the cards of point 
 must be 21
*/

let firstCard=getRandomCard();//take a random card in card desk
let secondCard=getRandomCard();
let sum=firstCard+secondCard;
let hasblackJack=false; //if the sum of card is 21 ,it is Blackjack
let isAlive=true;
let Poker_card=[firstCard,secondCard];  //Poker Card array


let card_el=document.getElementById("card-el");
let real=document.getElementById("message-el");
let sum_el=document.getElementById("sum-el");

function startGame()
{
    card_el.textContent="Cards: "
    sum_el.textContent="Sum:"+sum;
    for(let i=0;i<Poker_card.length;i++)
    {
       card_el.textContent+=Poker_card[i]+" ";
    }
            if( sum <=20)
            {
            message="Do you want to draw a new card ?";
            }
            else if (sum ===21)
            {
            message="wohho ! You got Blackjack";  
            hasblackJack=true;
          
            }
            else
            {
            message="you are out of the game";
            isAlive=false
           
            }
            real.textContent=message;
            playerEl.textContent=player.name +": "+" $"+player.chips;
        }
 

let player={name :"Engin", chips:100};
let playerEl=document.getElementById("player-id");
playerEl.textContent=player.name +": "+" $"+player.chips;

function getRandomCard()
{
    let random_number=Math.floor((Math.random()*13)+1);
    if(random_number===1)
    {                                   //Card of A equals 10 11 point
        return 11;
    }
    else if(random_number>10)
    {                                           //King Queen and Joker (11 12 13) equal 10 point in the Blackjack game
        return 10;
    }
    else
    return random_number; 
}

function newCard()
{
    if (isAlive===true && hasblackJack===false )
    {
        let Card=getRandomCard();
        sum+=Card;// add value of cards to sum 
        Poker_card.push(Card);// add  random Cards to Poker_card array
        startGame();
    }
}
