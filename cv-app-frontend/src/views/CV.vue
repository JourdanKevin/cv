<template>
    <div>
        <div ref="content" class="cv-content ">
            <div class="header">
                <div class="circle-photo">
                    <div class="photo-content">
                        <img src="../assets/images/Photo cv 2.jpg" alt="" class="profile-photo">
                    </div>    
                </div>            
                <div class="header-info">
                    <div>
                        <p class="name">{{ cv.name }}</p>
                        <p class="poste">{{ cv.poste }}</p>
                        <p class="soft">{{ cv.soft }}</p>
                    </div>                    
                    <div class="contact-info">
                        <div class="contact-info-1" >
                            <div>
                                <img src="../assets/images/Picto maison.png" alt="">
                                <p>{{ cv.adresse }} <br> {{ cv.postalCode }}</p>
                            </div>
                            <div>
                                <img class="tel" src="../assets/images/Picto tel.png" alt="">
                                <p>{{ cv.tel }}</p>
                            </div>
                            <div>
                                <img src="../assets/images/Picto voiture.png" alt="">
                                <p>{{ cv.permis }}</p>
                            </div>
                            <div>
                                <img src="../assets/images/Picto perso.png" alt="">
                                <p>{{cv.birth}} <br> {{ age(cv.birth) }}</p>
                            </div>
                        </div>
                        <div class="contact-info-2">
                            <div>
                                <img src="../assets/images/Picto mail.png" alt="">
                                <p>{{ cv.email }}</p>
                            </div>
                            <a :href="cv.github_link">
                                <div>                                    
                                    <img src="../assets/images/Picto github.png" alt="">
                                    <p>{{ cv.github_show}}</p>                                
                                </div>
                            </a>
                        </div>                    
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="sections">
                    <div class="section">
                        <h2>Expériences Professionnelles</h2>
                        <div class="arrow-right"></div>
                        <div class="experience section-content" v-for="xp in cv.xps" :key="xp.name">
                            <p v-if="xp.names"><strong>{{ xp.year }} :</strong> <span v-for="(name, index) in xp.names" :key="name">{{ name }}<br v-if="index < xp.names.length -1"></span></p>
                            <ul>
                                <li v-for="description in xp.descriptions" :key="description">
                                    <p>{{ description.description }}</p>
                                    <ul>
                                        <li v-for="info in description.info" :key="info">
                                            <p>{{ info }}</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="section formations">
                        <h2>Formation</h2>
                        <div class="arrow-right"></div>
                        <div class="education section-content" v-for="formation in cv.formations" :key="formation.names">
                            <p v-if="formation.names"><strong>{{ formation.year }} :</strong> <span v-for="(name, index) in formation.names" :key="name">{{ name }}<br v-if="index < formation.names.length -1"></span></p>
                            <ul>
                                <li v-for="description in formation.descriptions" :key="description">
                                    <p v-if="description.description">{{ description.description }}</p>
                                    <ul>
                                        <li v-for="info in description.info" :key="info">
                                           <p v-if="info">{{ info }}</p> 
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>            
                <div class="skills">              
                    <div class="skills-section" v-for="skill in cv.skills" :key="skill.name">
                        <h2>{{ skill.title }}</h2>                        
                        <div class="arrow-right-white"></div>
                        <template v-if="skill.title == 'Loisirs'">
                        <div class="" v-for="lskill in skill.skills" :key="lskill">
                            <p class="loisir">{{ lskill.name }}</p>
                        </div>
                        </template>
                        <template v-else>
                        <div class="listSkill" v-for="lskill in skill.skills" :key="lskill">
                            <p class="skillName">{{ lskill.name }}</p>
                            <Dot v-if="lskill.note" class="note" :note="lskill.note"/>
                        </div>
                        </template>

                        
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
  import { CV } from '@/js/api/CV';
  import Dot from '@/components/Dot.vue';
  export default {
    name: 'CV',
    components: {
        Dot
    },
    data(){
        return {
            name : this.$route.params.name,
            cv : new CV()
        }
    },
    async mounted(){
        await this.cv.get(this.name)
        console.log(this.cv)
    },
    methods:{
        technique(techs){
            return techs.join(', ')
        },
        age(birthdate){
            if (birthdate){
                const today = new Date();
                const bdate = birthdate.split("/");
                let age = today.getFullYear() - bdate[2];
                if (today.getMonth() + 1 < bdate[1] || (today.getMonth() + 1 == bdate[1] && today.getDate() < bdate[0])){
                    age--
                }
                return `${age} ans`
            }    
        }
    }
  }
  </script>
  
<style scoped>
a{
    text-decoration: none;
    color: white;
}

.underline{
    text-decoration: underline;
}

.arrow-right-white{
    position: relative;
    top: -11px;
    width: 0px;
    height: 0px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid white;
    z-index: 100;
}
.arrow-right{
    position: relative;
    top: -17px;
    left: 20px;
    width: 0px;
    height: 0px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #f3f4e3;
}

.cv-content {
    display: grid;
    grid-template-rows: 1fr 3fr;
    width: 210mm;
    height: 297mm;
    margin: 0 auto;
    box-sizing: content-box;
    font-family: 'Constantia';
    
}

@media print {
    .cv-content {
        width: 210mm;
        height: 297mm;
        padding: 0;
        margin: 0;
    }
    body, html {
        margin: 0;
        padding: 0;
    }
}

.content{
    margin-bottom: 1%;
    font-size: 14px;
}
ul{
    padding-left: 25px;
    width: 90%;
}
ul li{
    padding-left: 0px;
    
}
ul li ul{
    list-style: none;
    padding-left: 10px;
    display: block;
}
ul li ul li::before{
    content: '-';
    margin-right: 5px;
}
ul li ul li{
    display: flex;
}
.header {
    display: grid;
    grid-template-columns: 1fr 3fr;    
    background-image: url('../assets/images/LW008F.jpg');
    z-index: -1;
    color: black;
    border: #6699ff 1px;
    clip-path: polygon(
                1% 0%, 99% 0%,
                100% 3%, 100% 97%,
                99% 100%, 1% 100%,
                0% 97%, 0% 3%
            );
    margin: 0.5%;
    color: white;

    
}

.circle-photo{
    border: #fff 3px solid;
    border-radius: 50%;
    padding: 3%;
    margin: auto;
}
.photo-content{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    background-color: white;
    text-align: center;
    
}
.profile-photo{
    width: 100%;
    height: auto;
    transform: translateX(-1px);
    
    
}
.header-info{
    display: grid;
    grid-template-rows: 120px 150px;
}
.contact-info{
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    z-index: 1;
}
.contact-info div div{
    text-align: center;
}

.contact-info div div img{
    width: auto;
    height: 25px;
}
.contact-info div div p{
    margin: 0;
}
.tel{
    width: 17px !important;
}

.contact-info-1{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: flex-start;
    
}
.contact-info-2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
}
.content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-top: 4px solid;
    border-image: linear-gradient(to right, #ADBAD7, #1E6CC5) 1;
    padding-top: 0.5% ;
    
}
.name{
    font-family: 'Sylfaen';
    font-size: 70px;
    margin: 0;
}
.poste{
    position: relative;
    top: -25px;
    left: 5px;
}
.soft{
    position: relative;
    top: -61px;
    left: 290px;
}
.sections{
    margin-top: 3%;
}
.section {
    margin-bottom: 0px;
    text-align: center;

}
.formations{
    margin-top: -5px;
}
.section h2 {
    color: black;
    font-size: 24px;
    padding-bottom: 0.5% ;
    border-bottom: #f3f4e3 4px solid;
    width: 90%;
    margin: auto;
}
.section-content{
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
}

.education{
    margin-bottom: 15px;
}
.experience{
    margin-top: -7px;
    
}
.section-content p, ul{
    margin: 0;
}
.skills{
    background-image: url('../assets/images/LW008FR.jpg');
    color: white;
    clip-path: polygon(
                6% 0%, 100% 0%,
                100% 0%, 100% 100%,
                100% 100%, 6% 100%,
                0% 98%, 0% 2%
            );
    z-index: -1;
    border-left: white 1px solid;
}
.loisir{
    margin: auto auto 5px 10px;
}

.listSkill{
    display: grid;
    grid-template-columns: 3fr 1fr; 
}
.skillName{
    margin: auto auto auto 10px;
}
.note{
    margin: auto 10px auto auto;
}
.skills-section h2 {
    border-bottom: 5px solid #fff;
    padding-bottom: 5px;
    margin-bottom: -6px;
    font-size: 20px;
    text-align: right;
    margin-right: 9%;
}
</style>