<template>
  <body>
    <div class="container">
      <h1>Profile</h1>
      <br />
    </div>
    <p>ชื่อ : {{ Name }}</p>
    <p>ชื่อเล่น : {{ NickName }}</p>
    <p>อายุ : {{ Age }}</p>
    <p>งานอดิเรก : {{ Hobby }}</p>
    <p>ทักษะ : {{ Skill }}</p>
    <h2>
      <div class="container">
        <div>
          <router-link :to="{ name: 'Main' }"
            ><button>Main</button></router-link
          >
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'Contact' }"
            ><button>Contact</button></router-link
          >
        </div>
      </div>
    </h2>
  </body>
</template>

<script>
export default {
  data: () => ({
    Name: "วรฤทธิ์ ควรผดุงศักดิ์",
    NickName: "เป้",
    Age: "22 ปี",
    Hobby: "เล่นรูบิค, ฟังเพลง, ฟังพอดแคสต์, เรียนภาษาญี่ปุ่น",
    Skill:
      "Power BI,C#,JAVA,SQL,HTML,PHP,Config Cisco,Japanese Language Proficiency Test N3 Level",
  }),
};
</script>

<style scoped>
h1,
h2 {
  font-size: 5em;
  text-align: center;
}
p {
  font-size: 1.5em;
  margin: 25px 0px 0px 0px;
}
body {
  text-align: center;
  background-color: rgb(200, 242, 248);
}
button {
  margin: 20px 20px 20px 20px;
  width: 200px;
  height: 100px;
  font-size: 0.6cm;
  color: red;
}
</style>