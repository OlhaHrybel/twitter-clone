/*__________________            BLOCK 2            __________________*/

/* For You / Settings*/

function block2_top_for_you_button_appearance_of_strip(){
    block2_top_for_you_button_blue_stripe.style.display = 'flex';
    block2_top_following_button_blue_stripe.style.display = 'none';
}

function block2_top_following_button_appearance_of_strip(){
    block2_top_for_you_button_blue_stripe.style.display = 'none';
    block2_top_following_button_blue_stripe.style.display = 'flex';
}

/* Post*/

function hide_block2_main_happening_2_blue() {
    let post = document.getElementById("what_is_happening").value;
    let block = document.getElementById('block2_main_happening_2_blue');
    if (document.activeElement == document.getElementById('what_is_happening') || !post==" "){
        block.style.display = 'flex';
       
    } else {
        block.style.display = 'none';
    }
}

function show_block2_main_happening_2_blue(){
    var block = document.getElementById('block2_main_happening_2_blue');
    block.style.display = 'flex';
}

function button_1_block2_main_search(){
    let post = document.getElementById("what_is_happening").value;
    let block = document.getElementById('block2_main_happening_2_blue');
    if (!post==" "){
        button_block2_blue.style.background="rgb(28,156,244)";
    } else{
        button_block2_blue.style.background="rgba(142,205,247,255)";
    }
}

function button_2_block2_main_search(){
    let post = document.getElementById("what_is_happening").value;
    let block = document.getElementById('block2_main_happening_2_blue');
    if (!post==" "){
        button_block2_blue.style.background="rgba(142,205,247,255)";
    } 
    
}

function post(){
    let post = document.getElementById("what_is_happening").value;
    if (!post == " "){
        console.log(post);
        block2_all_post.insertAdjacentHTML('afterend','<div class="block2_post"><div class="block2_post_photo"><img src="./assets/img/10.png" class="img_block2_type6"/></div><div class="block2_post_main"><div class="block2_post_main_profile"><div class="block2_post_main_profile_1"><div class="block2_post_main_profile_text_1">Olha Hrybel  ☑️</div><div class="block2_post_main_profile_text_2">@OlhaHrybel</div></div><div class="block2_post_main_profile_2"><img src="./assets/img/11.png" class="img_block2_type4"/></div></div><div class="block2_post_main_text">'+post+'</div><div class="block2_post_main_text"></div></div></div>');
        document.getElementById("what_is_happening").value=null;
        var block = document.getElementById('block2_main_happening_2_blue');
        block.style.display = 'flex';
    } 
}

/* searcht*/

function search_1_block3_button1(){
    block3_button1.style.background="white";
    block3_button1.style.border = "0.8px solid black";
}

function search_2_block3_button1(){
    block3_button1.style.background="rgba(239,243,244,255)";
    block3_button1.style.border = "none";
}
