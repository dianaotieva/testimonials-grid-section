import image1 from "./assets/image-daniel.jpg";

function Daniel(){
    return(
        <div className="card violet">
            
            <div class="author">
          <img src={image1} alt="" class="user border" />
          <div>
            <h2 class="name">Daniel Clifford</h2>
            <h2 class="status">Verified Graduate</h2>
          </div>
        </div>
        <p class="info">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </p>
        <p class="description">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>

            </div>
    )
}

export default Daniel;
