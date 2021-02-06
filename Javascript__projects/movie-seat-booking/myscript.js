const movieSelect = document.getElementById("movie"),
      count = document.getElementById("count"),
      total = document.getElementById("total"),
      container = document.querySelector(".container"),
      seats = document.querySelectorAll(".row .seat:not(.occupied");
populateUI();

let ticketPrice = +movieSelect.value;



// populate UI
function populateUI(){
  const movieIndex = localStorage.getItem("movieIndex");

  if(movieIndex!==null){
    movieSelect.selectedIndex = movieIndex;
  }

  const seatsIndex = JSON.parse(localStorage.getItem("seatsIndex"));
  if(seatsIndex!==null && seatsIndex.length>0){
    seatsIndex.forEach(seat=>{
      seats[seat].classList.add("selected");
      
    });
  }
  
}

// set movie index and price
function setMovieData(movieIndex,moviePrice){
  localStorage.setItem("movieIndex", movieIndex);
  localStorage.setItem("moviePrice", +moviePrice);
}


// Update selected seats and price
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
  // save selected seats to localStorage
  const seatsIndex = [...selectedSeats].map((seat)=>{
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("seatsIndex",JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

}


// Seat click event listener
container.addEventListener("click", (e)=>{
  if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
    e.target.classList.toggle("selected");
  }

  updateSelectedCount();
})


// Movie select event listener
movieSelect.addEventListener("change", (e)=>{
  ticketPrice = +e.target.value;


  setMovieData(e.target.selectedIndex,e.target.value);
  updateSelectedCount();
})

updateSelectedCount();
