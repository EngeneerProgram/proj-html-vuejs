<template>
  <div class="container-fluid best-service">
    <div class="background"></div>
    <div class="container icon-section">
      <div class="col1 col">
        <font-awesome-icon class="font-siz" icon="fa-solid fa-link-slash" />
        <h3 class="pt-3">Strenght & Conditioning</h3>
        <img src="../assets/img/divider-x-red.png" alt="" />
        <p class="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius
          vero incidunt aspernatur impedit cumque, porro consectetur rem
          perferendis mollitia non? Debitis totam autem dolores.
        </p>
      </div>
      <div class="col2 col">
        <font-awesome-icon class="font-siz" icon="fa-solid fa-bicycle" />
        <h3 class="pt-3">Fitness & Cardio</h3>
        <img
          src="../assets/img/divider-x-red.png"
          alt="immagine contentente x rossa"
        />
        <p class="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius
          vero incidunt aspernatur impedit cumque, porro consectetur rem
          perferendis mollitia non? Debitis totam autem dolores.
        </p>
      </div>
      <div class="col3 col">
        <font-awesome-icon class="font-siz" icon=" fa-solid fa-cloud" />
        <h3 class="pt-3">Flexsibility & rest</h3>
        <img
          src="../assets/img/divider-x-red.png"
          alt="immagine contentente x rossa"
        />
        <p class="pt-3"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius
          vero incidunt aspernatur impedit cumque, porro consectetur rem
          perferendis mollitia non? Debitis totam autem dolores.
        </p>
      </div>
      <div class="col4 col">
        <font-awesome-icon class="font-siz" icon="fa-solid fa-heart-pulse" />
        <h3 class="pt-3">Helt & Diet</h3>
        <img
          src="../assets/img/divider-x-red.png"
          alt="immagine contentente x rossa"
        />
        <p class="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius
          vero incidunt aspernatur impedit cumque, porro consectetur rem
          perferendis mollitia non? Debitis totam autem dolores.
        </p>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  name: "BestServiceGymComponent",
};
</script>

<style lang="scss" scoped>
.best-service {
  position: relative;
  height: 70vh;

  display: Flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/blog4-600x433.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(0.2);
  }

  .icon-section {
    position: absolute;
    display: Flex;
    justify-content: space-between;
    top:30%;
    

    .col {
      text-align: center;
      h3 {
        color: white;
      }
      p{
          color:white;
      }
    }
  }
}

.font-siz {
  padding: 30px;
  width: 80px;
  height: 80px;
  object-fit: 1/1;
  border-radius: 100%;
  //font-size: 80px;
  color: #d5625f;
  border: 1px solid red;
}
</style>