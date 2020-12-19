<template>
  <div class="mounts">
    <h2>Mounts distribution against percentage of players owning them</h2>
    <hr class="line" />

    <table class="table">
      <thead>
        <tr>
          <th>Mount</th>
          <th>%</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(mount, index) in playersMounts" :key="index">
          <td>
            <div class="mount-item">
              <img
                :src="mount.img"
                :alt="mount.title"
                class="icon"
                ref="icon"
                @mouseover="showTooltip(mount.title, mount.description, index)"
                @mouseleave="hideTooltip"
              />
              <span>{{ mount.title }}</span>
            </div>
          </td>
          <td>{{ mountsPercentage[index] }}%</td>
        </tr>
      </tbody>
    </table>

    <transition name="slide">
      <div class="tooltip" :style="tooltipStyle" v-if="isTooltip">
        <wow-tooltip>
          <div class="tooltip-info">
            <h4>{{ tooltipTitle }}</h4>
            <p>{{ tooltipDescription }}</p>
          </div>
        </wow-tooltip>
      </div>
    </transition>
  </div>
</template>

<script>
import WowTooltip from "./wow-tooltip";
export default {
  name: "wow-mounts",
  components: { WowTooltip },
  data: () => ({
    isTooltip: false,
    tooltipStyle: {
      top: 0,
      left: "10%",
    },
    tooltipTitle: "Default Title",
    tooltipDescription: "Default Description",
    mountsPercentage: [
      23,
      45,
      54,
      72,
      54,
      32,
      74,
      51,
      32,
      53,
      27,
      62,
      47,
      72,
      38,
    ],
    playersMounts: [
      {
        title: "Acherus Deathcharger",
        img: require("../../assets/images/wow/icons/mounts/Acherus Deathcharger.webp"),
        description:
          "Summons and dismisses your rideable Acherus Deathcharger.\n" +
          "\n" +
          '"Some horses merely adopt the dark. This horse was born in it, molded by it."\n' +
          "Trainer: Death Knight",
      },
      {
        title: "Albino Drake",
        img: require("../../assets/images/wow/icons/mounts/Albino Drake.webp"),
        description:
          '"Even the Draconic Native Association tests proved inconclusive in determining if the albino drake is related to a known dragonflight. -Breanni"\n' +
          "Achievement: Leading the Cavalry\n" +
          "Category: General",
      },
      {
        title: "Black Drake",
        img: require("../../assets/images/wow/icons/mounts/Black Drake.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses a rideable Black Drake.  This is a flying mount.\n" +
          "\n" +
          '"It never pays to leave a live dragon out of the equation."\n' +
          "Drop: Sartharion",
      },
      {
        title: "Blue Qiraji Battle Tank",
        img: require("../../assets/images/wow/icons/mounts/Blue Qiraji Battle Tank.webp"),
        description:
          "1.5 sec cast\n" +
          "Emits a high frequency sound, forcing a silithid tank to burrow out from its home beneath the Temple of Ahn'Qiraj. The silithid is obedient to the summoner and can be used as a mount within the Temple of Ahn'Qiraj. Any hostile action towards the rider forces the tank underground.\n" +
          "\n" +
          '"This (relatively) domesticated silithid is at home only in the desert sands of Ahn\'Qiraj."\n' +
          "Drop: World Drop\n" +
          "Location: Temple of Ahn'Qiraj",
      },
      {
        title: "Bronze Drake",
        img: require("../../assets/images/wow/icons/mounts/Bronze Drake.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses a rideable Bronze Drake.  This is a flying mount.\n" +
          "\n" +
          '"Lost time is never found again. Oh, never mind I found it. -Chronormu"\n' +
          "Drop: Infinite Corruptor\n" +
          "Zone: The Culling of Stratholme",
      },
      {
        title: "Coalfist Gronnling",
        img: require("../../assets/images/wow/icons/mounts/Coalfist Gronnling.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses your Coalfist Gronnling.\n" +
          "\n" +
          '"This little gronnling is well-known for smashing his way into garrison inns and making a mess of the pots and pans."\n' +
          "Garrison Mission: Breaker Two",
      },
      {
        title: "Dark Phoenix",
        img: require("../../assets/images/wow/icons/mounts/Dark Phoenix.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses a rideable Dark Phoenix.  This is a flying mount.\n" +
          "\n" +
          '"Despite their name, Dark Phoenixes are known to have a warm and cheerful disposition."\n' +
          "Vendor: Guild Vendors\n" +
          "Cost: 3000",
      },
      {
        title: "Dreadsteed",
        img: require("../../assets/images/wow/icons/mounts/Dreadsteed.webp"),
        description:
          "1.5 sec cast\n" +
          "Requires Warlock\n" +
          "Summons a Dreadsteed, which serves as a mount.",
      },
      {
        title: "Felsteed",
        img: require("../../assets/images/wow/icons/mounts/Felsteed.webp"),
        description:
          "1.5 sec cast\n" +
          "Requires Warlock\n" +
          "Summons a Felsteed, which serves as a mount.\n",
      },
      {
        title: "Garn Nighthowl",
        img: require("../../assets/images/wow/icons/mounts/Garn Nighthowl.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses your Garn Nighthowl.\n" +
          "\n" +
          '"The garn are the most fierce predators on Draenor, and always hunt in packs."\n' +
          "Drop: Nok-Karosh\n" +
          "Location: Frostfire Ridge",
      },
      {
        title: "Green Qiraji Battle Tank",
        img: require("../../assets/images/wow/icons/mounts/Green Qiraji Battle Tank.webp"),
        description:
          "1.5 sec cast\n" +
          "Emits a high frequency sound, forcing a silithid tank to burrow out from its home beneath the Temple of Ahn'Qiraj. The silithid is obedient to the summoner and can be used as a mount within the Temple of Ahn'Qiraj. Any hostile action towards the rider forces the tank underground.\n" +
          "\n" +
          '"This (relatively) domesticated silithid is at home only in the desert sands of Ahn\'Qiraj."\n' +
          "Drop: World Drop\n" +
          "Location: Temple of Ahn'Qiraj",
      },
      {
        title: "Hearthsteed",
        img: require("../../assets/images/wow/icons/mounts/Hearthsteed.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses a Hearthsteed.  This mount changes depending on your Riding skill and location.\n" +
          "\n" +
          '"Each step echoes with the rage of your three opponents."\n' +
          "Promotion: Hearthstone",
      },
      {
        title: "Sky Golem",
        img: require("../../assets/images/wow/icons/mounts/Sky Golem.webp"),
        description:
          "1.5 sec cast\n" +
          "Mount a Sky Golem, allowing you to fly very fast. The claws are surprisingly delicate and herbalists can use them to pick herbs!  This is a flying mount.\n" +
          "\n" +
          '"A glorious feat of engineering, the sky golem takes traditional shredder technology to a whole new level (and altitude!)."\n' +
          "Profession: Engineering",
      },
      {
        title: "Swift Purple Wind Rider",
        img: require("../../assets/images/wow/icons/mounts/Swift Purple Wind Rider.webp"),
        description:
          "1.5 sec cast\n" +
          "Faction: Horde\n" +
          "Summons and dismisses a rideable Swift Purple Wind Rider mount.  The capabilities of this mount depend on your Riding skill and location.\n" +
          "\n" +
          '"I still don\'t get why they fly faster when you put armor on them. -Drakma"\n' +
          "Vendor: Drakma\n" +
          "Zone: Orgrimmar\n" +
          "Cost: 100",
      },
      {
        title: "Twilight Drake",
        img: require("../../assets/images/wow/icons/mounts/Twilight Drake.webp"),
        description:
          "1.5 sec cast\n" +
          "Summons and dismisses a rideable Twilight Drake.  This is a flying mount.\n" +
          "\n" +
          '"But the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs, never feed him after midnight."\n' +
          "Drop: Sartharion\n" +
          "Location: The Obsidian Sanctum",
      },
    ],
  }),
  methods: {
    showTooltip(title, description, index) {
      this.tooltipTitle = title;
      this.tooltipDescription = description;

      this.isTooltip = true;
      switch (index) {
        case 0:
          this.tooltipStyle.top = "16.5%";
          break;
        case 1:
          this.tooltipStyle.top = "22%";
          break;
        case 2:
          this.tooltipStyle.top = "27.5%";
          break;
        case 3:
          this.tooltipStyle.top = "33%";
          break;
        case 4:
          this.tooltipStyle.top = "38.5%";
          break;
        case 5:
          this.tooltipStyle.top = "44%";
          break;
        case 6:
          this.tooltipStyle.top = "49.5%";
          break;
        case 7:
          this.tooltipStyle.top = "55%";
          break;
        case 8:
          this.tooltipStyle.top = "60%";
          break;
        case 9:
          this.tooltipStyle.top = "65.5%";
          break;
        case 10:
          this.tooltipStyle.top = "66%";
          break;
        case 11:
          this.tooltipStyle.top = "77%";
          break;
        case 12:
          this.tooltipStyle.top = "64%";
          break;
        case 13:
          this.tooltipStyle.top = "70%";
          break;
      }
    },
    hideTooltip() {
      this.isTooltip = false;
    },
  },
  created() {
    this.$socket.client.on("wowPlayersMounts", (playersMounts) => {
      this.mountsPercentage = playersMounts;
    });
  },
  beforeDestroy() {
    this.$socket.client.off("wowPlayersMounts");
  },
};
</script>

<style scoped lang="scss">
.mounts {
  position: relative;
  margin-top: 2em;
  width: 100%;
  background: rgba(173, 63, 31, 0.6);
  border-radius: 5px;
  padding: 2%;
}

.table {
  width: 100%;
  margin-top: 2em;
  border-collapse: collapse;
}

.mount-item {
  display: flex;
  align-items: center;

  img {
    width: 40px;
  }
}

.line {
  border: 1px solid #e39f78;
}

thead {
  font-size: $font-size * 1.5;
  background-color: #1783ad;
  color: #00bf8d;
  text-shadow: 1px 1px black;
}

th,
td {
  padding: 10px;
}
th:last-child {
  border-left: 2px solid #00bf8d;
}

td {
  border-bottom: 2px solid #00bf8d;
}

td:first-child {
  border-right: 2px solid #00bf8d;
}

td:last-child {
  text-align: center;
  font-weight: 800;
  font-size: $font-size * 1.7;
  color: $white;
  text-shadow: 1px 1px black;
}

span {
  margin-left: 10px;
  font-size: $font-size * 1.2;
}

.icon {
  cursor: pointer;
}

.tooltip {
  position: absolute;
  z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
