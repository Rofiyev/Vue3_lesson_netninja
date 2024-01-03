<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" required v-model="email" />

      <label for="password">Password</label>
      <input type="password" minlength="8" id="password" required v-model="password" />

      <label for="role">Role</label>
      <select name="role" id="role" v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label for="skills">Skills</label>
      <input type="text" name="skills" id="skills" v-model="tempSkill" @keyup.alt="addSkill" />
      <ul>
        <li v-for="skill in skills" :key="skill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>
        </li>
      </ul>

      <div class="terms">
        <input id="term" type="checkbox" required v-model="term" />
        <label for="term">Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create an Account</button>
      </div>
    </form>
    <hr />
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Term accepted: {{ term }}</p>
    <p>Skills: {{ skills }}</p>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      email: 'rof1yev@gmail.com',
      password: 'dilshod0717',
      role: 'developer',
      term: false,
      tempSkill: '',
      skills: []
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === 'Enter' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) this.skills.push(this.tempSkill)
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      console.log(skill)
      this.skills = this.skills.filter((item) => item !== skill)
    },
    handleSubmit() {
      if (this.email && this.password.length > 8) {
        const data = {
          email: this.email,
          password: this.password,
          skills: this.skills,
          role: this.role,
          accepet: this.term
        }
        console.log(data)
        this.email = ''
        this.password = ''
        this.role = 'developer'
        this.skills = []
        this.term = false
      }
    }
  }
}
</script>

<style>
form {
  max-width: 500px;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
ul {
  list-style-type: none;
}
ul li {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.submit button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}
</style>
