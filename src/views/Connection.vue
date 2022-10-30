<template>
<div class="back-color"></div>
<div class="page-title">
  <div class="title-squire"></div>
  <h1>聯絡我</h1>
</div>
    <div class="email-container col-4">
    
        <form  @submit="sendEmail($event)">
          <label>公司名稱</label>
          <input 
            type="text" 
            v-model="name"
            name="name"

          >
          <label>電子信箱</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            >
            <label>主旨</label>
          <input 
            type="text" 
            v-model="subject"
            name="subject"
            >
        
         <textarea name="post" id="" cols="30" rows="10" placeholder="請輸入內容" v-model="post"></textarea>
         <!-- <input 
            type="text" 
            v-model="post"
            name="post"
            > -->
          <input type="submit" value="送出">
        </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      post:'',
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_04o2qxo', 'template_rn4wtkf', e.target,
        '5Kf-stUoOn39GwVx8', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          post:this.post,
        })

      } catch(error) {
          console.log({error})
      }
    },
  }
}
</script>
<style lang="scss"  scoped>
@import"../assets/style.scss";
@include cellphone();

* {box-sizing: border-box;}

.back-color{
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:$secondColor;
  z-index: -1;
}
.page-title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:150px;
  margin-bottom: 40px;
  .title-squire{
      width: 15px;
      height: 15px;
      background-color: $hoverColor;
      margin:0 10px;
    }
    h1{
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
}

.email-container {
  position: relative;
  z-index: 3;
  display: block;
  margin:auto;
  text-align:left;
  border-radius: 5px;
  background-color: white;
  padding: 30px 20px;
  margin-bottom: 100px;
  font-weight: 700;
 
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=password], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  display: block;
  margin: auto;
  @include button_1(150px);
}

</style>