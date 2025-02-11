<template>
  <section>
    <div class="heading">
      <h2>Welcome</h2>  
      <p>Sign in</p>
    </div>
    <form action="HomeView.vue">
      <div class="input">
        <div class="label">
          <label for="email">Email</label>
          <p class="requirement">*</p>
        </div>
        <input id="email" type="text" name="email" placeholder="name@example.com" required>
      </div>
      <div class="input">
        <div class="label">
          <label for="password">Password</label>
          <p class="requirement">*</p>
        </div>
        <input id="password" type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="*****" required>
      </div>
      <div class="btn input">
        <a href="#">Back to homepage</a>
        <button id="btnSignIn">Sign In</button>  
      </div>
    </form> 
  </section>
</template>



<style scoped>
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  text-decoration: none;
}

body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

section{
  position: relative;
  width: 300px;
  height: 490px;
  padding: 2rem 1.2rem;
  background: #ffffff;
  font-family: sans-serif;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  overflow:hidden;
}

section:after{
  content: "";
  position:absolute;
  top:-20%;
  right: -20%;
  width: 200px;
  height: 200px;
  background:#fdb813;
  border-radius: 50%;
  
}

.required{
  color:#e34
}

.heading p{
  font-size: 0.8rem;
}

form{
  height: 270px;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  font-size: 0.9rem;
}

.input{
  position: relative;
  display: flex;
  flex-direction: column;
}

.label{
  display:flex;
  align-items: center;
}

.label .requirement{
  margin-left:8px;
  color: #e34;
  font-size: 1.2rem;
}

.input input{
  position: relative;
  height:40px;
  margin:0.8rem 0;
  outline: none;
  border-radius: 4px;
  border: 3px solid #5d329f;
  background:#eae9e9;
  padding:0. 2rem;
  transition: .5s ease;
}

.input input:focus{
  background: transparent;
  border-color: #4f2722
}

.btn button{
  height: 40px; 
  margin: 0.8rem 0;
  cursor: pointer;
  font-family: sans-serif;
  color: #ffffff;   
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 4px;
}
</style>