<template>
  <div class="partners-container">
    <div class="background"></div>
    <div class="partners-margin">
      <div class="partners-header">
        <p>
          Moterys nuo gėlių skiriasi tuo, kad pačios gali nuspręsti kada joms
          pražysti. Jei ne TU, tai kas? jei ne DABAR, tai kada? Kartais reikia
          tiesiog pradėti. Kurti grožį - kiekvieno žmogaus viena iš svarbiausiu
          užduočių. Kviečiame Jus - kurkime grožį. ❤️
        </p>
      </div>
      <div class="partners">
        <div class="partners__partner">
          <div class="partners__partner-name">Kirpėja - Aurelija Bogužienė</div>
          <img class="partners__partner-photo" src="../assets/DSC_2216.jpg" />
          <div class="partners__partner-links">
            <a
              href="https://www.facebook.com/Kirp%C4%97ja-Aurelija-198511614171888/"
              target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </div>
        </div>
        <div class="partners__partner">
          <div class="partners__partner-name">Vizažistė - Kristina Šakienė</div>
          <img class="partners__partner-photo" src="../assets/DSC_5174.jpg" />

          <div class="partners__partner-links">
            <a
              href="https://www.facebook.com/La-Bella-Makeup-artist-2107644632893983/"
              target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners'
}
</script>

<style scoped>
.partners-container {
  display: flex;
  height: 100%;
  margin: auto;
}
.partners-margin {
  margin: auto;
  /*height: 100%;*/
}
.partners-header {
  width: 400px;
  padding: 10px;
  max-width: calc(100vw - 20px);
  margin: auto;
  font-size: 22px;
  color: var(--text-color-on-bg);
}
.partners {
  color: var(--text-color-on-bg);
  display: flex;
  justify-content: center;
}
.partners__partner-photo {
  width: 200px;
  min-width: 200px;
  display: block;
  margin: auto;
  padding: 5px;
  background-color: white;
}
.partners__partner-name {
  font-size: 20px;
}
.partners__partner {
  text-align: center;
  padding: 20px;
}
.partners__partner-links {
  margin-top: 10px;
}
@media only screen and (max-width: 768px) {
  .partners {
    flex-direction: column;
    width: auto;
  }
}
</style>
