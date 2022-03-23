
import '../css/style.css';


const moreOption = document.getElementById("bmore"),
     bsShowMobileLinks = document.getElementById("b-menu"),
     mobileMenu = document.querySelector(".links"),
     moreMenu = document.querySelector(".more .menu"),
     sliderVideos = document.getElementById("slider"),
     currentContainer = document.getElementById("current-container"),
     videosContainer = document.getElementById("videos-container"),
     buttomPrev = document.getElementById("prev"),
     buttomNext = document.getElementById("next");;
let current = 0;


bsShowMobileLinks.addEventListener("click", (e) => {
     e.preventDefault();
     mobileMenu.classList.toggle("show");
})

moreOption.addEventListener("click", (e) => {
     e.preventDefault();
     moreMenu.classList.toggle("show");
})

/* Section Vidoes */

const videos = [

     {
          id: "Ylcxdr6f9Gc"
     },
     {
          id: "hDsfUeCb5sI"
     },
     {
          id: "3kE2NE8ODyU"
     },
     {
          id: "CaRjl-zffSk"
     },
     {
          id: "UQlIyILyaEs"
     }
]
/* Function */
renderCurrentVideos(videos[current].id);
showVideos();

buttomPrev.addEventListener("click", (e) => {
     let change = current
     current = current - 1 >= 0 ? current - 1 : current;

     if (change != current) {
          renderCurrentVideos(videos[current].id);
     }
})

buttomNext.addEventListener("click", (e) => {
     let change = current;
     current = current + 1 < videos.length ? current + 1 : current;

     if (current != change) {
          renderCurrentVideos(videos[current].id);
     }
})

function renderCurrentVideos(id) {
     currentContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

function showVideos() {
     const html = videos.map((videos, index) => {
          return `
          <div class="items">
               <a href="#" data-id="${index}">
                    <img src="https://img.youtube.com/vi/${videos.id}/mqdefault.jpg"/>
               </a> 
          </div>`;
     });

     videosContainer.innerHTML = html.join("");

     document.querySelectorAll('.items a').forEach((items) => {
          items.addEventListener("click", (e) => {
               e.preventDefault();

               const id = items.getAttribute("data-id");
               current = id;
               renderCurrentVideos(videos[current].id);
          });
     });
}
