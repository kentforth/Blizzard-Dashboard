<template>
  <div class="heartstone">
    <!--TOP CONTENT-->
    <div class="top-content">
      <slide-left-animation>
        <div class="cards-type">
          <h2>Cards Type</h2>
          <heartstone-cards-type />
        </div>
      </slide-left-animation>

      <slide-right-animation>
        <div class="top-decks">
          <h2>Top Deck Games</h2>
          <heartstone-top-decks />
        </div>
      </slide-right-animation>

      <slide-up-animation>
        <heartstone-games-today class="games-today" />
      </slide-up-animation>
    </div>

    <!--MIDDLE CONTENT-->
    <slide-up-animation>
      <div class="middle-content">
        <div class="winrates">
          <div class="winrate-header">
            <h2>Class Winrates</h2>
          </div>
          <heartstone-winrates />
        </div>

        <div class="played-cards">
          <heartstone-cards-played />
        </div>
      </div>
    </slide-up-animation>
  </div>
</template>

<script>
import HeartstoneGamesToday from "../components/heartstone/heartstone-games-today";
import HeartstoneCardsType from "../components/heartstone/heartstone-cards-type";
import HeartstoneTopDecks from "../components/heartstone/heartstone-top-decks";
import HeartstoneWinrates from "../components/heartstone/heartstone-winrates";
import HeartstoneCardsPlayed from "../components/heartstone/heartstone-cards-played";
import SlideLeftAnimation from "../components/animations/slide-left-animation";
import SlideRightAnimation from "../components/animations/slide-right-animation";
import SlideUpAnimation from "../components/animations/slide-up-animation";
export default {
  name: "heartstone",
  components: {
    SlideUpAnimation,
    SlideRightAnimation,
    SlideLeftAnimation,
    HeartstoneCardsPlayed,
    HeartstoneWinrates,
    HeartstoneTopDecks,
    HeartstoneCardsType,
    HeartstoneGamesToday,
  },
};
</script>

<style scoped lang="scss">
.heartstone {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("../assets/images/heartstone-background.png") center center;
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

.cards-type,
.top-decks {
  width: 100%;
  background-color: $heartstone-card-bg;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
}

.top-content {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
  }
}

.games-today {
  @include responsive(tab-port) {
    order: 1;
  }
}

.cards-type {
  @include responsive(tab-port) {
    order: 2;
    margin-top: 25%;
  }

  @include responsive(phone) {
    order: 2;
    margin-top: 50%;
  }
}

.top-decks {
  @include responsive(tab-port) {
    order: 3;
  }
}

.middle-content {
  margin-top: 2em;
  display: grid;
  grid-gap: 1.7em;
  grid-template-columns: 1fr 1fr;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
  }
}

.winrates {
  background-color: $heartstone-card-bg;
  border-radius: 5px;
  padding: 3%;
}
</style>
