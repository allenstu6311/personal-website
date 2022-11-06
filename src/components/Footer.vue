<template>
    <div class="footer-container" :class="{cardColor:count}">
        <div class="footer-copyright">
            <p>©2023by allen write</p>
        </div>
        <div class="footer-connection">
            <div class="connection-cellphone">
                <p>Call</p>
                <small>09-75-119-303</small>
            </div>
            <div class="connection-email">
                <p>Mail</p>
                <small>stuallen6311@gmail.com</small>
            </div>
            <div class="connection-community">
                <p>Follow</p>
                <ul>
                    <li><a href="https://www.facebook.com/"><img src="../assets/image/facebook.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/allenstu6311/"><img src="../assets/image/instagram.png" alt=""></a></li>
                    <li><a href=""><img src="../assets/image/line.png" alt=""></a></li>
                </ul>
            </div>   
        </div>      
    </div>
</template>
<style lang="scss">
@import"../assets/style.scss";
.cardColor{
    p{
        color: white !important;
    }
    small{
        color: white !important;
    }   
    
}
.footer-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: center;
    background-color: white;
    padding-top:20px ;
    .footer-copyright{
        width: 80%;
        text-align: left;
        padding-bottom: 40px;
        p{
            font-size: 18px;
            letter-spacing: 2px;
            color: gray;
        }
    }

    .footer-connection{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .connection-cellphone{
            text-align: left;
            width: 40%;
            padding: 10px;
            p{
                margin-bottom: 10px;
            }
            small{
                font-size: 14px;
                color: gray;
            }
        }
        .connection-email{
            text-align: left;
            width: 40%;
            padding: 10px;
            p{
                margin-bottom: 10px;
            }
            small{
                font-size: 14px;
                color: gray;
            }
        }
        .connection-community{
            width: 85%;
            padding:10px;
            margin-bottom: 20px;
           
            p{
                margin-bottom: 10px;
            }
            ul{
                display: flex;
                li{
                    width: 30px;
                    height: 30px;
                    margin: 0 10px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

    }
   
}


@media screen and (min-width:1024px) {
    .footer-container{
    display: flex;
    flex-direction: row;
    
    align-items: center;
    background-color: white;
    padding-top:20px ;
    .footer-copyright{
        width: 50%;
        text-align:left;
        padding-bottom: 0px;
        p{
            font-size: 20px;
            padding: 0 20px;
        }
    }

    .footer-connection{
        width: 50%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;
        .connection-cellphone{
            text-align: left;
            width:30%;
            padding: 10px;
            p{
                margin-bottom: 10px;
            }
            small{
                font-size: 14px;
                color: gray;
            }
        }
        .connection-email{
            text-align: left;
            width: 30%;
            padding: 10px;
            p{
                margin-bottom: 10px;
            }
            small{
                font-size: 14px;
                color: gray;
            }
        }
        .connection-community{
            width: 30%;
            padding:10px;
      
           
            p{
                margin-top:10px ;
                margin-bottom: 10px;
            }
            ul{
                display: flex;
                
                li{
                    width: 20px;
                    height: 20px;
                    margin: 0;
                    margin-right: 15px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

    }
   
}
}
</style>
<script setup>
import{computed}from"vue"
import { useStore } from "vuex";
const store = useStore();
const count = computed(() => {
  return store.state.viewsColor;
});
</script>