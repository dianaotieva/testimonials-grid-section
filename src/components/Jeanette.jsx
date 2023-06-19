import image2 from "./assets/image-jeanette.jpg"

function Jeanette(){
    return(
        <div className=" card white">
           <div class="author">
          <img src={image2} alt="" class="user" />
          <div>
            <h2 class="name dark">Jeanette Harmon</h2>
            <h2 class="status dark">Verified Graduate</h2>
          </div>
        </div>
        <p class="info dark">An overall wonderful and rewarding experience</p>
        <p class="description dark">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
        </div>
    )
}

export default Jeanette