<template>
  <div class="races">
    <!--MODAL OVERLAY-->
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isPopupVisible"
        @click="closePopup"
      ></div>
    </transition>

    <!--MODAL WINDOW-->
    <transition name="slide" appear>
      <popup class="popup" v-if="isPopupVisible" @closePopup="closePopup">
        <template v-slot:title>
          <h1>{{ raceTitle }}</h1>
        </template>
        <template v-slot:description>
          <p>{{ raceDescription }}</p>
        </template>
      </popup>
    </transition>

    <h2>Players Races</h2>
    <hr class="line" />

    <div class="alliance">
      <h3>Alliance</h3>
      <img src="../../assets/images/wow/alliance.png" alt="" />
      <div class="race-items">
        <div
          class="race"
          v-for="(race, raceIndex) in allianceRaces"
          :key="race.name"
        >
          <div
            @click="showPopup(race.title, race.description)"
            class="image"
            v-bind:style="{ 'background-image': 'url(' + race.img + ')' }"
          ></div>
          <p>{{ race.name }}</p>
          <img
            src="../../assets/images/wow/icons/alliance-icon.png"
            alt=""
            class="race-icon"
          />
          <span>{{ alliancePercentage[raceIndex] }}%</span>
        </div>
      </div>
    </div>

    <hr class="race-line" />

    <div class="horde">
      <h3>Horde</h3>
      <img src="../../assets/images/wow/horde.png" alt="" />
      <div class="race-items">
        <div
          class="race"
          v-for="(race, raceIndex) in hordeRaces"
          :key="race.name"
        >
          <div
            @click="showPopup(race.title, race.description)"
            class="image"
            v-bind:style="{ 'background-image': 'url(' + race.img + ')' }"
          ></div>
          <p>{{ race.name }}</p>
          <img
            src="../../assets/images/wow/icons/horde-icon.png"
            alt=""
            class="race-icon"
          />
          <span>{{ hordePercentage[raceIndex] }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "../popup";

export default {
  name: "wow-races",
  components: { Popup },
  data: () => ({
    isPopupVisible: false,
    raceTitle: "",
    raceDescription: "",
    alliancePercentage: [34, 42, 17, 82, 16, 22, 82],
    hordePercentage: [34, 42, 17, 82, 16, 22, 82],
    allianceRaces: [
      {
        name: "Human",
        img: require("../../assets/images/wow/races/alliance/human.webp"),
        title: "Defenders of the Kingdom",
        description:
          "Recent discoveries have shown that humans are descended from the barbaric vrykul, half-giant warriors who live in Northrend. Early humans were primarily a scattered and tribal people for several millennia, until the rising strength of the troll empire forced their strategic unification. Thus the nation of Arathor was formed, along with its capital, the city-state of Strom.",
      },
      {
        name: "Dwarf",
        img: require("../../assets/images/wow/races/alliance/dwarf.webp"),
        title: "Resilient Explorers",
        description:
          "The bold and courageous dwarves are an ancient race descended from the earthen—beings of living stone created by the titans when the world was young. Due to a strange malady known as the Curse of Flesh, the dwarves’ earthen progenitors underwent a transformation that turned their rocky hides into soft skin. Ultimately, these creatures of flesh and blood dubbed themselves dwarves and carved out the mighty city of Ironforge in the snowy peaks of Khaz Modan.",
      },
      {
        name: "Night Elf",
        img: require("../../assets/images/wow/races/alliance/night-elf.webp"),
        title: "Venerable Guardians",
        description:
          "The ancient and reclusive night elves have played a pivotal role in shaping Azeroth’s fate. The night elves of today still remember the War of the Ancients over ten thousand years ago, when they halted the Burning Legion’s first invasion of Azeroth. When the Legion’s remnants rallied together with the vile satyrs centuries later, the night elves again opposed the threat, ultimately vanquishing the forces that set out to wreak havoc on their world. ",
      },
      {
        name: "Gnome",
        img: require("../../assets/images/wow/races/alliance/gnome.webp"),
        title: "Curious Tinkerers",
        description:
          "The clever, spunky, and oftentimes eccentric gnomes present a unique paradox among the civilized races of Azeroth. Brilliant inventors with an irrepressibly cheerful disposition, this race has suffered treachery, displacement, and near-genocide. It is their remarkable optimism in the face of such calamity that symbolizes the truly unshakable spirit of the gnomes.​",
      },
      {
        name: "Draenei",
        img: require("../../assets/images/wow/races/alliance/draenei.webp"),
        title: "Spiritual Exiles",
        description:
          "Long before the fallen titan Sargeras unleashed the Legion on Azeroth, he conquered the world of Argus and its inhabitants, the eredar. Believing that this gifted race would be crucial in his quest to undo all of creation, Sargeras contacted the eredar’s leaders – Kil’jaeden, Archimonde, and Velen, offering them knowledge and power in exchange for their loyalty.",
      },
      {
        name: "Worgen",
        img: require("../../assets/images/wow/races/alliance/worgen.webp"),
        title: "Cursed Recluses",
        description:
          "Behind the formidable Greymane Wall, a terrible curse transformed some of the stalwart citizens of the isolated kingdom of Gilneas into nightmarish lupine beasts known as worgen. Human scholars intensely debated the origins of the curse, until it was revealed that the original worgen were not—as previously believed—nightmares from another dimension, but cursed night elf druids.",
      },
      {
        name: "Pandaren",
        img: require("../../assets/images/wow/races/alliance/pandaren.webp"),
        title: "Harmonious Nomads",
        description:
          "Couched in myth and legend, rarely seen and even more rarely understood, the enigmatic pandaren have long been a mystery to the other races of Azeroth. The noble history of the pandaren people stretches back thousands of years, well before the empires of man and before even the sundering of the world.",
      },
    ],
    hordeRaces: [
      {
        name: "Orc",
        img: require("../../assets/images/wow/races/horde/orc.webp"),
        title: "Fierce Conquerors",
        description:
          "Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor. They abandoned their peaceful culture when Kil’jaeden, a demon lord of the Burning Legion, corrupted the orcs and used them in his vengeful plot against the draenei, who were exiles from Kil’jaeden’s homeworld.",
      },
      {
        name: "Undead",
        img: require("../../assets/images/wow/races/horde/undead.webp"),
        title: "Cadaverous Endurers",
        description:
          "Death offered no escape for the scores of humans killed during the Lich King’s campaign to scour the living from Lordaeron. Instead, the kingdom’s fallen were risen into undeath as Scourge minions and forced to wage an unholy war against everything… and everyone… that they once held dear.",
      },
      {
        name: "Tauren",
        img: require("../../assets/images/wow/races/horde/tauren.webp"),
        title: "Honorable Conservationists",
        description:
          "The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Until recently, the tauren lived as nomads scattered throughout the Barrens, hunting the great kodo beasts native to the arid region.",
      },
      {
        name: "Troll",
        img: require("../../assets/images/wow/races/horde/troll.webp"),
        title: "Mystical Conspirators",
        description:
          "The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races. Yet one exception among the trolls is the Darkspear tribe. Plagued by a history of subservience and exile, this proud tribe was on the brink of extinction when Warchief Thrall and his mighty Horde forces were driven to the trolls’ remote island home in the South Seas during a violent storm.",
      },
      {
        name: "Blood Elf",
        img: require("../../assets/images/wow/races/horde/blood-elf.webp"),
        title: "Vengeful Outsiders",
        description:
          "For nearly 7,000 years, high elven society centered on the sacred Sunwell, a magical fount that was created using a vial of pure arcane energy from the first Well of Eternity. Nourished and strengthened by the Sunwell’s potent energies, the high elves’ enchanted kingdom of Quel’Thalas prospered within the verdant forests north of Lordaeron.",
      },
      {
        name: "Goblin",
        img: require("../../assets/images/wow/races/horde/goblin.webp"),
        title: "Covetous Schemers",
        description:
          "Originally the slaves of jungle trolls on the Isle of Kezan, goblins were forced to mine kaja’mite ore out of the volcanic bowels of Mount Kajaro. The trolls used this potent mineral for their voodoo rituals, but it had an unexpected effect on the slaves who were in constant contact with it: kaja’mite generated new cunning and intelligence in the goblin race.",
      },
      {
        name: "Pandaren Horde",
        img: require("../../assets/images/wow/races/horde/pandaren.webp"),
        title: "Harmonious Nomads",
        description:
          "Couched in myth and legend, rarely seen and even more rarely understood, the enigmatic pandaren have long been a mystery to the other races of Azeroth. The noble history of the pandaren people stretches back thousands of years, well before the empires of man and before even the sundering of the world.",
      },
    ],
  }),
  created() {
    this.$socket.client.on("wowPlayersRaces", (races) => {
      this.alliancePercentage = races[0];
      this.hordePercentage = races[1];
    });
  },
  beforeDestroy() {
    this.$socket.client.off("wowPlayersRaces");
  },

  methods: {
    showPopup(title, description) {
      this.isPopupVisible = true;

      this.raceTitle = title;
      this.raceDescription = description;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  z-index: 999;
  top: 35%;
  left: 40%;
}

.modal-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 888;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;
}

.races {
  margin-top: 2em;
  width: 100%;
  background: rgba(173, 63, 31, 0.6);
  border-radius: 5px;
  padding: 2%;
}

.alliance,
.horde {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  h3 {
    margin-top: 0;
    font-size: $font-size * 2;
    font-weight: 600;
  }

  img {
    max-width: 100px;
  }
}

.race {
  justify-self: center;
  position: relative;

  .image {
    width: 170px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border: 2px solid #0078ff;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    cursor: pointer;
  }

  .image:hover {
    background-size: 110%;
  }

  p {
    font-size: $font-size * 1.2;
    font-weight: 700;
    color: #00bf8d;
    margin-bottom: 0;
    margin-top: 30px;
  }

  span {
    font-size: $font-size * 2.3;
    font-weight: 800;
    color: #bf735c;
    text-shadow: 1px 1px #242424;
  }
}

.race-items {
  margin: 2em auto 2em auto;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.line {
  width: 100%;
  border: 1px solid #e39f78;
}

.race-line {
  width: 50%;
  border: 1px solid rgba(191, 115, 92, 0.4);
  margin-bottom: 1em;
}

.race-icon {
  position: absolute;
  bottom: 26%;
  left: 34%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
