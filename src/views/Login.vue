<template>
  <div>
    <!-- <iframe
      name="simple_form"
      src="http://fleet.novatrack.biz/login.html?client_id=Dashboard&access_type=0X100&activation_time=0&duration=2592000&lang=en&flags=0&user=novademo&redirect_uri=http://localhost:8080/dashboard&response_type=token"
      scrolling="no"
      style="width: 100%; height: 500px; border: 0; margin: 10px;"
    ></iframe> -->
    <!-- <iframe
      name="simple_form"
      src="http://fleet.novatrack.biz/login.html?client_id=Dashboard&access_type=0X100&activation_time=0&duration=2592000&lang=en&flags=0&user=novademo&redirect_uri=http://localhost:8080/dashboard&response_type=token"
      scrolling="no"
      style="width: 100%; height: 500px; border: 0; margin: 10px;"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  created(){
    // window.location = "http://fleet.novatrack.biz/login.html?client_id=Dashboard&access_type=0X100&activation_time=0&duration=2592000&lang=en&flags=0&redirect_uri=https://test-b21ad.firebaseapp.com/dashboard&response_type=token"

    // window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=https://test-b21ad.firebaseapp.com/dashboard"
    window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=http://103.6.245.78:3200/dashboard"
    // window.location = "http://fleet.novatrack.biz/login.html?access_type=-1&redirect_uri=http://localhost:8081/dashboard"
  }
};
</script>

<style>
</style>