<template>
  <div class="users-choice">
    <div class="choice__text">
      <h2>Users Choice</h2>
      <img
        src="../../assets/images/icons/choice.svg"
        alt="choice"
        class="svg-icon"
      />
    </div>

    <div class="hero-types">
      <div class="tanks">
        <div class="heroes__text">
          <h3>Tank</h3>
          <img src="../../assets/images/overwatch/tank.svg" alt="tank" />
        </div>

        <div class="chart">
          <apexchart
            type="polarArea"
            :options="tanksOptions"
            :series="tanksSeries"
          ></apexchart>
          <div class="heroes-list">
            <img
              src="../../assets/images/overwatch/tanks/diva.png"
              alt="diva"
            />
            <img
              src="../../assets/images/overwatch/tanks/orisa.png"
              alt="orisa"
            />
            <img
              src="../../assets/images/overwatch/tanks/rein.png"
              alt="rein"
            />
            <img
              src="../../assets/images/overwatch/tanks/roadhog.png"
              alt="roadhog"
            />
            <img
              src="../../assets/images/overwatch/tanks/sigma.png"
              alt="sigma"
            />
            <img
              src="../../assets/images/overwatch/tanks/winston.png"
              alt="winston"
            />
            <img
              src="../../assets/images/overwatch/tanks/ball.png"
              alt="ball"
            />
            <img
              src="../../assets/images/overwatch/tanks/zarya.png"
              alt="zarya"
            />
          </div>
        </div>
      </div>
      <div class="line"></div>

      <div class="dps">
        <div class="heroes__text">
          <h3>Damage</h3>
          <img src="../../assets/images/overwatch/damage.svg" alt="damage" />
        </div>

        <div class="chart">
          <apexchart
            type="polarArea"
            :options="dpsOptions"
            :series="dpsSeries"
          ></apexchart>
          <div class="heroes-list">
            <img
              src="../../assets/images/overwatch/damage/ashe.png"
              alt="ashe"
            />
            <img
              src="../../assets/images/overwatch/damage/bastion.png"
              alt="bastion"
            />
            <img
              src="../../assets/images/overwatch/damage/doomfist.png"
              alt="doomfist"
            />
            <img
              src="../../assets/images/overwatch/damage/echo.png"
              alt="echo"
            />
            <img
              src="../../assets/images/overwatch/damage/genji.png"
              alt="genji"
            />
            <img
              src="../../assets/images/overwatch/damage/hanzo.png"
              alt="hanzo"
            />
            <img
              src="../../assets/images/overwatch/damage/junkrat.png"
              alt="junkrat"
            />
            <img
              src="../../assets/images/overwatch/damage/mcree.png"
              alt="mcree"
            />
            <img src="../../assets/images/overwatch/damage/mei.png" alt="mei" />
            <img
              src="../../assets/images/overwatch/damage/pharah.png"
              alt="pharah"
            />
            <img
              src="../../assets/images/overwatch/damage/reaper.png"
              alt="reaper"
            />
            <img
              src="../../assets/images/overwatch/damage/soldier.png"
              alt="soldier"
            />
            <img
              src="../../assets/images/overwatch/damage/sombra.png"
              alt="sombra"
            />
            <img
              src="../../assets/images/overwatch/damage/symmetra.png"
              alt="symmetra"
            />
            <img
              src="../../assets/images/overwatch/damage/torb.png"
              alt="torb"
            />
            <img
              src="../../assets/images/overwatch/damage/tracer.png"
              alt="tracer"
            />
            <img
              src="../../assets/images/overwatch/damage/widow.png"
              alt="widow"
            />
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="healers">
        <div class="heroes__text">
          <h3>Healer</h3>
          <img src="../../assets/images/overwatch/healer.svg" alt="healer" />
        </div>

        <div class="chart">
          <apexchart
            type="polarArea"
            :options="healersOptions"
            :series="healersSeries"
          ></apexchart>
          <div class="heroes-list">
            <img
              src="../../assets/images/overwatch/healers/ana.png"
              alt="ana"
            />
            <img
              src="../../assets/images/overwatch/healers/baptiste.png"
              alt="baptiste"
            />
            <img
              src="../../assets/images/overwatch/healers/brigitte.png"
              alt="brigitte"
            />
            <img
              src="../../assets/images/overwatch/healers/lucio.png"
              alt="lucio"
            />
            <img
              src="../../assets/images/overwatch/healers/mercy.png"
              alt="mercy"
            />
            <img
              src="../../assets/images/overwatch/healers/moira.png"
              alt="moira"
            />
            <img
              src="../../assets/images/overwatch/healers/zen.png"
              alt="zen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "users-choice",
  data: () => ({
    socket: null,
    connection: null,
    sockets: {
      connect() {
        console.log("socket connected");
      },
    },
    tanksSeries: [42, 47, 52, 58, 65, 45, 12, 54],
    tanksOptions: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: [
        "D.Va",
        "Orisa",
        "Reinhartd",
        "Roadhog",
        "Sigma",
        "Winston",
        "Wrecking Ball",
        "Zarya",
      ],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          useSeriesColors: true,
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      dataLabels: {
        dropShadow: {
          enabled: true,
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          color: "#EB222E",
          shadeIntensity: 0.6,
        },
      },
      tooltip: {},
    },
    dpsSeries: [
      42,
      47,
      52,
      58,
      65,
      45,
      12,
      54,
      72,
      73,
      95,
      22,
      18,
      62,
      73,
      38,
      14,
    ],
    dpsOptions: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: [
        "Ashe",
        "Bastion",
        "Doomfist",
        "Echo",
        "Genji",
        "Hanzo",
        "Junkrat",
        "Macree",
        "Mei",
        "Pharah",
        "Reaper",
        "Soldier",
        "Sombra",
        "Symmetra",
        "Torbjorn",
        "Tracer",
        "Widow",
      ],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          useSeriesColors: true,
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      dataLabels: {
        dropShadow: {
          enabled: true,
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          color: "#2E51A3",
          shadeIntensity: 0.6,
        },
      },
      tooltip: {},
    },
    healersSeries: [42, 52, 65, 45, 12, 54, 73],
    healersOptions: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: [
        "Ana",
        "Baptiste",
        "Brigitte",
        "Lucio",
        "Mercy",
        "Moira",
        "Zenyatta",
      ],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          useSeriesColors: true,
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      dataLabels: {
        dropShadow: {
          enabled: true,
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          color: "#95CA1A",
          shadeIntensity: 0.6,
        },
      },
      tooltip: {},
    },
  }),
  created() {
    this.$socket.client.on("usersChoiceTanks", (data) => {
      this.tanksSeries = data;
    });

    this.$socket.client.on("usersChoiceDPS", (data) => {
      this.dpsSeries = data;
    });

    this.$socket.client.on("usersChoiceHealers", (data) => {
      this.healersSeries = data;
    });
  },
  beforeDestroy() {
    this.$socket.client.off("usersChoiceTanks");
    this.$socket.client.off("usersChoiceDPS");
    this.$socket.client.off("usersChoiceHealers");
  },
};
</script>

<style scoped lang="scss">
.users-choice {
  background-color: rgba(60, 55, 66, 0.5);
  border-radius: 5px;
  padding: 1.5%;

  @include responsive(phone) {
    padding: 5%;
  }
}

h2 {
  text-align: center;
}

h3 {
  display: inline-block;
  @include responsive(tab-port) {
    font-size: $font-size * 2;
  }
}
.hero-types {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 0.5fr 1fr 0.5fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @include responsive(tab-port) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  @include responsive(phone) {
  }
}

.choice__text {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
}

.choice__text img {
  margin-left: auto;
  display: inline-block;
  width: 2.5%;

  @include responsive(tab-port) {
    width: 5%;
  }

  @include responsive(phone) {
    width: 7%;
  }
}

.choice__text > h2 {
  text-align: center;
  width: 100%;
  margin-left: 5%;
  margin-top: 0;
}

.tanks,
.dps,
.healers {
  width: 100%;
  height: 100%;
}

.tanks-chart {
  width: 100%;
}

.heroes__text {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: auto;
}

.heroes__text img {
  margin-left: auto;
  width: 20px;
}

.heroes-list {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.heroes-list img {
  height: 100px;
  width: 100px;
  margin: 0 20px 10px 0;
  object-fit: contain;

  @include responsive(tab-port) {
    height: 70px;
    width: 70px;
  }
}

.line {
  width: 1px;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.1);

  @include responsive(tab-port) {
    height: 1px;
    width: 100%;
    margin: 20px 0;
  }
}
</style>
