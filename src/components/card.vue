<template>
  <div class="card-container">
    <div class="card">
      <div class="card-front">
        <slot></slot>
      </div>
      <div class="card-back">
        <div class="units">
          <div class="unit-item" slot="unitOneImage">
            <img :src="unitIcon1" alt="hellion" />
            <div class="unit-text" slot="unitOneTitle">
              <h3>{{ unitTitle1 }}</h3>
            </div>
          </div>

          <div class="unit-item">
            <img :src="unitIcon2" alt="hellion" />
            <div class="unit-text">
              <h3>{{ unitTitle2 }}</h3>
            </div>
          </div>

          <div class="unit-item">
            <img :src="unitIcon3" alt="hellion" />
            <div class="unit-text">
              <h3>{{ unitTitle3 }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    unitIcon1: {
      type: String,
    },
    unitIcon2: {
      type: String,
    },
    unitIcon3: {
      type: String,
    },
    unitTitle1: {
      type: String,
    },
    unitTitle2: {
      type: String,
    },
    unitTitle3: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  width: 270px;
  height: 370px;
  position: relative;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: all 0.7s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.card-container:hover > .card {
  transform: rotateY(180deg) translateY(-20px);
}

.card-front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  position: relative;
  top: 10px;
  left: 12px;
  width: 93%;
  height: 93%;
  backface-visibility: hidden;
  background-color: $starcraft-secondary;
  border-radius: 5px;
  transform: rotateY(180deg);
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.5);
}

.units {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 10px;
}

.unit-item {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: start;
  padding: 0 0 0 20px;

  img {
    width: 100%;
    height: 100%;
  }

  .unit-text {
    h3 {
      color: $starcraft-gold;
    }

    p {
      font-size: 0.7rem;
      color: $white;
    }
  }
}
</style>
