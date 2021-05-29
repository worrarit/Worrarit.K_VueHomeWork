<template>
  <body>
    <div class="container">
      <h1>Contact</h1>
      <br />
    </div>
    <p>Twitter :{{ Twitter }}</p>
    <p>Instagram :{{ Instagram }}</p>
    <p>Email :{{ Email }}</p>
    <h2>
      <div class="container">
        <div>
          <router-link :to="{ name: 'Main' }"
            ><button>Main</button></router-link
          >
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'Profile' }"
            ><button>Profile</button></router-link
          >
        </div>
      </div>
    </h2>
  </body>
</template>

<script>
export default {
  data: () => ({
    Twitter: "@PaeAwp",
    Instagram: "@PaeAwp",
    Email: "kh.worrarit_st@tni.ac.th",
  }),
};
</script>

<style scoped>
h1,
h2 {
  font-size: 3em;
  text-align: center;
}
p {
  font-size: 3em;
  margin: 20px 0px 0px 20px;
}
body {
  text-align: center;
  background-color: rgba(199, 218, 30, 0.651);
}
button {
  margin: 20px 20px 20px 20px;
  width: 200px;
  height: 100px;
  font-size: 0.6cm;
  color: red;
}
</style>