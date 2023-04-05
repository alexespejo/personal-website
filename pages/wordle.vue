<script setup>
import { ref, reactive, watch, computed } from "vue";

let words = [
 "apple",
 "beach",
 "candy",
 "dance",
 "egret",
 "fable",
 "gloom",
 "honey",
 "image",
 "jolly",
 "knock",
 "lemon",
 "mango",
 "naval",
 "oasis",
 "piano",
 "quilt",
 "risky",
 "shark",
 "tulip",
 "baker",
 "cable",
 "drone",
 "eagle",
 "hazel",
 "merry",
 "noble",
 "ocean",
 "queen",
 "rider",
 "sable",
 "tiger",
 "chair",
 "earth",
 "flame",
 "grape",
 "knife",
 "melon",
 "olive",
 "peach",
 "river",
 "silly",
 "table",
];
let query = ref("");

let table = reactive({
 matrix: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
 ],
 position: 0,
 limit: 5,
 target: words[Math.floor(Math.random() * words.length)],
 gameEnd: false,
 win: false,
});

const letterChecker = (nodeIndex, rowIndex, node) => {
 const str = table.target.toUpperCase().split("");
 if (rowIndex === table.position && !table.gameEnd) {
  return "";
 }
 if (str[nodeIndex] === node) {
  return "green-pos";
 }
 if (table.target.toUpperCase().includes(node)) {
  return "yellow-pos";
 }
};

const tableDisplay = computed(() => {
 return table.matrix;
});

const pushToMatrix = () => {
 if (query.value === table.target) {
  table.win = true;
 }
 if (
  query.value === table.target ||
  table.position === table.matrix.length - 1
 ) {
  table.matrix[table.position] = query.value.toUpperCase().split("");
  table.gameEnd = true;
  return;
 }
 if (query.value.length === table.limit) {
  table.matrix[table.position] = query.value.toUpperCase().split("");
  query.value = "";
  table.position += 1;
 }
};

watch(query, () => {
 if (query.value === "") {
  table.matrix[table.position] = [0, 0, 0, 0, 0];
 }
 if (query.value !== "") {
  let refTable = table.matrix[table.position];
  let refQuery = query.value.toUpperCase().split("");
  for (let i = 0; i < refTable.length; ++i) {
   table.matrix[table.position][i] = refQuery[i];
  }
 }
 if (query.value.length > table.limit) {
  query.value = query.value.substr(0, table.limit);
 }
});
</script>

<template>
 <main>
  <span v-show="table.gameEnd" class="modal">
   <span v-if="table.win">WINNER</span>
   <span v-else>LOSER</span>
   <a href="/wordle" style="border: 2px white solid; color: white"
    >Play Again</a
   >
  </span>
  <div class="table">
   <span style="text-align: center"
    >{{ table.gameEnd ? table.target : "..." }}
   </span>
   <div
    v-for="(row, rowIndex) in tableDisplay"
    class="table-rows"
    :key="rowIndex"
   >
    <span
     v-for="(node, nodeIndex) in row"
     class="table-node"
     :key="nodeIndex"
     :class="letterChecker(nodeIndex, rowIndex, node)"
    >
     <span v-if="node !== 0">{{ node }}</span>
    </span>
   </div>
  </div>
  <input
   v-model="query"
   @keyup.enter="pushToMatrix"
   id="query-input"
   :disabled="table.gameEnd"
  />
  <NuxtLink to="/" v-show="table.gameEnd">Reset</NuxtLink>
 </main>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
:root {
 font-family: "Poppins", sans-serif;
}
a {
 font-size: 25px;
}

main {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 50px;
}
#query-input {
 margin-top: 10px;
 height: 50px;
 width: 250px;
 font-size: 25px;
 border-radius: 1rem;
 padding: 0.5rem auto auto 0.5rem;
 text-align: center;
}
.modal {
 position: absolute;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: rgba(0, 0, 0, 0.8);
 color: white;
 width: 100%;
 height: 100vh;
 a {
  margin-top: 2rem;
 }
}
.table {
 display: flex;
 flex-direction: column;
 width: 350px;
 border: 0.5px solid black;
}
.table-rows {
 display: flex;
}
.table-node {
 background-color: rgb(211, 211, 211);
 color: rgb(247, 247, 247);
 display: flex;
 align-items: center;
 justify-content: center;
 border: 0.5px solid black;
 width: 70px;
 height: 70px;
}
.green-pos {
 background-color: rgb(74 222 128);
}
.yellow-pos {
 background-color: rgb(252 211 77);
}
</style>
