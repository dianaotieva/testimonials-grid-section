import image5 from "./assets/image-patrick.jpg"

function Patrick(){
    return (
        <div className=" card black">
           <div class="author">
          <img src={image5} alt="" class="user border" />
          <div>
            <h2 class="name">Patrick Abrams</h2>
            <h2 class="status">Verified Graduate</h2>
          </div>
        </div>
        <p class="info">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy. in the company I joined. I honestly feel I got every penny’s
          worth.
        </p>
        <p class="description">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
    </div>
    )
}

export default Patrick;