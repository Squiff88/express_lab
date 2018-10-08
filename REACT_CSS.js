.App {
  text-align: center;
  margin:0;
  padding:0;
}


.wrapper{
  margin-top:3%;
  border-bottom:1px dotted #2e282a;
  border-right: 1px dotted #2e282a;

}

.navbar{
  background-color:#EEDDC3;
  border-bottom:3px solid dimgray;
  border-radius: 5px;

}

.navName{
  margin-top:20px;
  color:#6C757D;
  font-weight: 700;
  font-size: 1.4em !important; 
  font-family: Lato;

}

.containerListGroup{
  width:100%;
  padding:4%;
  height: 500px;
   /*background-image: linear-gradient(to right, #919eec, #919eec, #84afee, #84afee, #aad3df);*/
   /*background-image: linear-gradient(to right, #fbecd7, #f8e7da, #f3e4de, #eae1df, #e0dfdf);*/
   background-image: linear-gradient(to right, #fbecd7, #feecde, #feece4, #fbedea, #f7efef);
  -webkit-box-shadow: inset 10px 11px 19px -16px rgba(0,0,0,0.39);
-moz-box-shadow: inset 10px 11px 19px -16px rgba(0,0,0,0.39);
box-shadow: inset 10px 11px 19px -16px rgba(0,0,0,0.39);


transition:box-shadow 1s;
  
}

.containerListGroup:hover{
  transition:box-shadow 1s;
-webkit-box-shadow: inset 30px 27px 32px -34px rgba(0,0,0,0.6);
-moz-box-shadow: inset 30px 27px 32px -34px rgba(0,0,0,0.6);
box-shadow: inset 30px 27px 32px -34px rgba(0,0,0,0.6);
}


.listText:hover{
     background-color: rgba(195, 70, 24, 0.4)!important;
     border-bottom:1px solid lightgray !important;
     transition:all 0.5s;
}

.listGroup{
  margin:1% 0%;
  box-sizing: border-box;
}

.markerAnim{
  animation-name: blinking;
  animation-delay: 2s;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 5;
}

.firstNameOne{
  display:inline;
  color:black;
  padding-left:5px;
}


@keyframes blinking{
  from{
    opacity:1;
  }
  50%{
    opacity:0.3;
  }
  to{
    opacity: 1;
  }
}

.listText{
  background-color: rgba(195, 70, 24, 0.2)!important;
  border-radius: 4px !important;
  color:#6C757D;
  font-weight: 700;
  font-size:1.25em;
  transition:all 1.2s;
  transition-timing-function:ease-in-out;
  cursor: pointer;
}