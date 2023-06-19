import image3 from "./assets/image-jonathan.jpg"

function Jonathan(){
    return(
        <div className=" card gray">
             <div class="author">
          <img src={image3} alt="" class="user" />
          <div>
            <h2 class="name">Jonathan Walters</h2>
            <h2 class="status">Verified Graduate</h2>
          </div>
        </div>
        <p class="info">The team was very supportive and kept me motivated</p>
        <p class="description">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. “
        </p>
        </div>
    )
}

export default Jonathan;