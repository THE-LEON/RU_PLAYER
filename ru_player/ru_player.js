let arr = document.getElementsByTagName("audio");
function setBar2(elem) {
    let fill = elem.parentNode.children[0].children[1];

    slv = elem.value / (elem.max / 100);
    
	fill.style.width = slv + "%";
    fill.style.marginLeft = (((slv /10)-5)*-1) + "px";
    
}

function setBar(elem) {
    aud_track = localStorage.getItem("aud_track");
    
    for(let i = 0;i<arr.length;i++){
        if((!arr[i].paused) || aud_track){
            j = i
            if(arr[i].paused){i = parseInt(aud_track);}
    
            let fill = arr[i].parentNode.children[3].children[0].children[1];
            let slider = arr[i].parentNode.children[3].children[1];
    
    if(elem){
        fill = elem.parentNode.children[0].children[1];
        slider = elem;
    }
    slv = slider.value / (slider.max / 100);
    
	fill.style.width = slv + "%";
    fill.style.marginLeft = (((slv /10)-5)*-1) + "px";
    i = j;
    }}
}

setBar();

            let aud_p = document.getElementById("aud_p");
            function curtime(time){
                time = parseInt(time);
                m = ((time - (time%60))/60);
                if(m<10){m= "0" + m;}
                let s =time%60;
                
                if(s<10){s= "0" + s;}
                time = m + ":" + s;
                return time;
            }
            function aud_prog(elem,val){
                elem.currentTime = val;
            }
            let r1;
            function set_time(rg,tim,elem){
                if(!elem.paused){
            r1 = setInterval(()=>{
                rg.value = elem.currentTime;
                tim.innerText = curtime(Math.floor(elem.currentTime)) + "/" + curtime(Math.floor(elem.duration));
                setBar();
            },100);}}
            
            function aud_play_pause(elem2){
               if(!elem2){
                    if(!localStorage.getItem("aud_track")){return;}
                    elem2 = arr[parseInt(localStorage.getItem("aud_track"))].parentNode.children[2];}
                    elem = elem2.parentNode.children[1];
                if(!elem.paused){
                    for(let i = 0;i<arr.length;i++){
                        if(!arr[i].paused){       
                    localStorage.setItem("aud_track",i);
                        }
                    elem.pause();
                    }
                    aud_p.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                    elem2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                clearInterval(r1);
                }else{
                    for(let i = 0;i<arr.length;i++){
                        arr[i].pause();
                        aud_p.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                        arr[i].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                    }
                    elem.play();
                    for(let i = 0;i<arr.length;i++){
                        if(!arr[i].paused){       
                    localStorage.setItem("aud_track",i);
                        }
                    }
                    aud_p.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                    elem2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                }
            }
            function aload(elem){
                console.log("%cVALUES IS LOADED","color: green;font-family: 'Courier New';");
                elem.parentNode.children[3].children[1].max = elem.duration;
                elem.parentNode.children[3].children[1].value = 0;
                elem.parentNode.children[6].value = 1;
                elem.parentNode.children[4].innerText = curtime(Math.floor(elem.currentTime)) + "/" + curtime(Math.floor(elem.duration));
                elem.parentNode.children[7].innerText = "100%";
                
            let a_rep = document.getElementById("a_rep");
            let a_que = document.getElementById("a_que");
            let a_q = localStorage.getItem("queue");
                if(a_q === "1"){
                a_que.style.fill = '#ff0000';
            }
            if(a_q === "0"){
                a_que.style.fill = '#969696';
            }
            let a_r = localStorage.getItem("replay");
                if(a_r === "1"){
                a_rep.style.fill = '#ff0000';
            }else if(a_r === "0"){
                a_rep.style.fill = '#969696';
            }
        }
            function aud_vol(elem){
                elem.parentNode.parentNode.children[1].volume = elem.value;
                elem.parentNode.parentNode.children[7].innerText = Math.floor(elem.value*100) + "%";
                if(elem.value >= 0.5){
                    elem.parentNode.parentNode.children[5].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>';
                }else if(elem.value >= 0.2){
                    elem.parentNode.parentNode.children[5].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/></svg>';
                }else{
                    elem.parentNode.parentNode.children[5].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"/></svg>';
                }
            }
            function aud_next(){
                for(let i = 0;i < arr.length;i++){
                    if((!arr[i].paused) && arr[i+1]){
                        let aud_track = localStorage.getItem("aud_track");
                        localStorage.setItem("aud_track",(parseInt(aud_track)+1));
                        arr[i+1].play();
                        arr[i+1].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                        arr[i].pause();
                        arr[i].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                    }
                }
            }
            function aud_prev(){
                for(let i = arr.length-1;i >= 0;i--){
                if(arr[i].currentTime < 3){
                    if((!arr[i].paused) && arr[i-1]){
                        
                        let aud_track = localStorage.getItem("aud_track");
                        localStorage.setItem("aud_track",(parseInt(aud_track)-1));
                        arr[i-1].play();
                        arr[i-1].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
                        arr[i].pause();
                        arr[i].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                    }
                
            }else{
                arr[i].currentTime = 0;
            }}}
            function aud_off(elem){
                if(elem.parentNode.children[1].volume !== 0){
                elem.parentNode.children[1].volume = 0;
                elem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/></svg>';
                }else{
                    elem.parentNode.children[1].volume = elem.parentNode.children[6].value;
                    if(elem.parentNode.children[6].value >= 0.5){elem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>'/*made by RAL*/;
                }else if(elem.parentNode.children[6].value >= 0.2){
                    elem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/></svg>';
                }else{
                    elem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"/></svg>';
                }
                }
            }
function aud_space(){
    if(event.keyCode === 32) {
        aud_play_pause();
    }
}
            let cc =0;
            a_rep = document.getElementById("a_rep");
            a_que = document.getElementById("a_que");

            function aud_queue(){
                console.log("богдан")
            let a_rep = document.getElementById("a_rep");
            let a_que = document.getElementById("a_que");
            let a_q = localStorage.getItem("queue");
                if(a_q === "1"){
                localStorage.setItem("queue","0");
                a_que.style.fill = '#969696';
            }else{
                localStorage.setItem("queue","1");
                localStorage.setItem("replay","0");
                a_que.style.fill = '#ff0000';
                a_rep.style.fill = '#969696';
            }
            }
            function aud_replay(){
            let a_rep = document.getElementById("a_rep");
            let a_que = document.getElementById("a_que");
            let a_r = localStorage.getItem("replay");
                if(a_r === "1"){
                localStorage.setItem("replay","0");
                a_rep.style.fill = '#969696';
            }else{
                localStorage.setItem("replay","1");
                localStorage.setItem("queue","0");
                a_que.style.fill = '#969696';
                a_rep.style.fill = '#ff0000';
            }}
            function autonext(){
                let a_q = localStorage.getItem("queue");
            let aud_track = localStorage.getItem("aud_track");
            let a_r = localStorage.getItem("replay");
            if(a_r === "1"){

                arr[parseInt(aud_track)].play();
                arr[parseInt(aud_track)].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            }else if(a_q === "1"){
                arr[parseInt(aud_track)].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
                arr[parseInt(aud_track)+1].play();
                arr[parseInt(aud_track)+1].parentNode.children[2].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            localStorage.setItem("aud_track",(parseInt(aud_track)+1));

            }
            }
            function auto_onload(){
                for(let i = 0;i < arr.length;i++){
                aload(arr[i]);
                }
            }
            function sizing(){
                let arr = document.getElementsByClassName("aud_player")
                for(let i = 0;i<arr.length;i++){
                    let h = arr[i].scrollHeight;
                    let w = arr[i].scrollWidth;
                    let o = arr[i].style.overflow;
                    if(o === "hidden"){
                    if(!arr[i].children[0].children[0].src){
                    if(w < h*13){
                        arr[i].children[7].style.display = "none";
                    }
                    if(w < h*10){
                        arr[i].children[4].style.display = "none";
                    }
                }else{
                    if(w < h*15){
                        arr[i].children[7].style.display = "none";
                    }
                    if(w < h*12){
                        arr[i].children[4].style.display = "none";
                    }
                }
            }else{
                if(!arr[i].children[0].children[0].src){
                if(w < h*17){
                    arr[i].children[7].style.display = "none";
                }
                if(w < h*13){
                    arr[i].children[4].style.display = "none";
                }
            }else{
                if(w < h*15){
                    arr[i].children[7].style.display = "none";
                }
                if(w < h*12){
                    arr[i].children[4].style.display = "none";
                }
            }
            }
        
        }}
            sizing()

            //document.addEventListener("DOMContentLoaded", auto_onload); 
