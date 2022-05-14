<template>
  <div class="container-fluid reviews">
    <div class="container result pt">
      <h2>Real World Result</h2>
      <img
        width="35px"
        class="ridimens text-center"
        src="../assets/img/divider-xx-red.png"
        alt=""
      />
    </div>

    <div class="container pt-3">
      <div class="row">
        <div class="col">
          <div class="container-review">
            <img class="review_img" src="../assets/img/blog1-400x208.jpg" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="container-review">
            <img src="" alt="" />
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <div class="container-review">
            <img src="" alt="" />
          </div>
        </div>
        <div class="col">
          <div class="container-review">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ReviewsComponent",
};
</script>


<style lang="scss" scoped>
.reviews {
  height: 90vh;
  background-color: #6b6b6b;
}
.pt {
  padding-top: 100px;
}
.result {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
  }
}

.col {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: red;
  margin: 20px;

  .container-review {
    width: 573px;
    height: 161px;
    background-color: blue;
    .review_img {
      width: 174px;
      height: 160px;
    }
  }
}
</style>