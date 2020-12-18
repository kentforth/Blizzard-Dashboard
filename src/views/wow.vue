<template>
  <div class="wow">
    <!--TOP CONTENT-->
    <div class="top-content">
      <div class="character-distribution">
        <h2>
          Distribution of World of Warcraft characters in U.S. and EU realms by
          class
        </h2>
        <hr class="line" />
        <wow-character-distribution />
      </div>

      <div class="top-players-rating">
        <h2>Top Player Ratings</h2>

        <div class="top-players">
          <div
            class="rating-names"
            v-for="player in playerRatings"
            :key="player.name"
          >
            <p>{{ player.name }}</p>
            <hr class="line" />
            <p>{{ player.class }}</p>
            <img :src="player.img" alt="" />
          </div>
        </div>
        <wow-players-rating />
      </div>
    </div>
  </div>
</template>

<script>
import WowCharacterDistribution from "../components/wow/wow-character-distribution";
import WowPlayersRating from "../components/wow/wow-players-rating";
export default {
  name: "wow",
  components: { WowPlayersRating, WowCharacterDistribution },
  data: () => ({
    playerRatings: [
      {
        name: "Smxn",
        class: "Shaman",
        img: require("../assets/images/wow/icons/shaman.png"),
      },
      {
        name: "Drizzy",
        class: "Monk",
        img: require("../assets/images/wow/icons/monk.png"),
      },
      {
        name: "Gekz",
        class: "Priest",
        img: require("../assets/images/wow/icons/priest.png"),
      },
      {
        name: "Cluti",
        class: "Paladin",
        img: require("../assets/images/wow/icons/paladin.png"),
      },
      {
        name: "Bluegator",
        class: "Shaman",
        img: require("../assets/images/wow/icons/shaman.png"),
      },
      {
        name: "Cream",
        class: "Mage",
        img: require("../assets/images/wow/icons/mage.png"),
      },
      {
        name: "Mooncucumber",
        class: "Druid",
        img: require("../assets/images/wow/icons/druid.png"),
      },
      {
        name: "Pals",
        class: "Priest",
        img: require("../assets/images/wow/icons/paladin.png"),
      },
      {
        name: "Olimpics",
        class: "Priest",
        img: require("../assets/images/wow/icons/priest.png"),
      },
      {
        name: "Stabww",
        class: "Monk",
        img: require("../assets/images/wow/icons/monk.png"),
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.wow {
  background: url("../assets/images/wow-background.jpg") center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 3% 2% 2% $nav-width + 2.2%;
  overflow-x: hidden;

  @include responsive(phone) {
    padding: 3% 5% 5% 5%;
    margin-top: 20%;
  }
}

.top-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

.line {
  border: 1px solid #e39f78;
}

.character-distribution,
.top-players-rating {
  background: rgba(173, 63, 31, 0.6);
  border-radius: 5px;
  padding: 2%;
}

.top-players {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin: 5px;
    font-size: 1rem;
  }

  p:first-child {
    font-weight: 700;
    color: #e37434;
  }
}
</style>
