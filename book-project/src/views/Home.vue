<template>
    <div>
        <h1 id="header">ZIGALPA</h1>
        <h1 id="welcome">Welcome to Library</h1> 
        <router-link id="btn" to="/books" tag="button">Enter library</router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style lang="scss" scoped>
#header {
    font-size: 120px;
    text-shadow: 8px 8px black;
    animation-name: header;
    animation-duration: 4s;
    animation-iteration-count: 15;
}
@keyframes header {
  0%   {color: red;}
  25%  {color: yellow;}
  50%  {color: blue;}
  100% {color: green;}
}
#welcome {
font-style: italic;
font-size: 56px;
position: relative;
animation-name: welcome;
animation-duration: 4s;
animation-iteration-count: 15;
}
@keyframes welcome {
0% {left:0px; right:0px;}
10% {left:10px; right:0px;}
20% {left:20px; right:0px;}
30% {left:30px; right:0px;}
40% {left:40px; right:0px;}
50% {left:50px; right:0px;}
60% {left:0px; right:10px;}
70% {left:0px; right:20px;}
80% {left:0px; right:30px;}
90% {left:0px; right:40px;}
100% {left:0px; right:50px;}
}
#btn {
position: relative;
  background-color: #4CAF50;
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  padding: 20px;
  position: relative;
  color: #FFFFFF;
  width: 600px;
  text-align: center;
  cursor: pointer;
}

</style>