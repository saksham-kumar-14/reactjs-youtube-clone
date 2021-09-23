/* importing youtube channel images*/
import threeb1b from "../../assets/Images/channels/3b1b.jpg"; 
import mkbhd from "../../assets/Images/channels/mkbhd.jpg"; 
import coding_train from "../../assets/Images/channels/coding_train.jpg"; 
import lex_fridman from "../../assets/Images/channels/lex_fridman.jpg"; 
import smartereveryday from "../../assets/Images/channels/smarter_everyday.jpg"; 


/*importing thumbnails*/
import linear_transformations_3b1b from "../../assets/Images/thumbnails/3b1b_linear_transformations.jpg";
import neural_networks_3b1b from "../../assets/Images/thumbnails/3b1b_neural_networks.jpg"; 
import max_tegmark_podcast from "../../assets/Images/thumbnails/max_tegmark_podcast.jpg"; 
import mkbhd_tesla_bot from "../../assets/Images/thumbnails/mkbhd_tesla_bot.jpg";
import smartereveryday_carburettor from "../../assets/Images/thumbnails/smarter_everyday_carburettor.jpg"
import coding_train_astar from "../../assets/Images/thumbnails/astar_coding_train.jpg";

const available_vids = [
    {
        "title" : "Tesla Bot explained! | MKBHD", 
        "channel_img" : mkbhd,   
        "views" : "2M", 
        "posted" : "3 weeks ago", 
        "thumbnail" : mkbhd_tesla_bot, 
        "channel_name" : "Marques Brownlee",
    },{
        "title" : "But what is a neural network? | Chapter 1, Deep learning", 
        "channel_img" : threeb1b, 
        "views" : "9.7M", 
        "posted" : "3 years ago", 
        "thumbnail" : neural_networks_3b1b, 
        "channel_name" : "3Blue1Brown",  
    },{
        "title" : "Linear transformations and matrices | Chapter 3, Essence of linear algebra", 
        "channel_img" : threeb1b, 
        "views" : "2.8M", 
        "posted" : "5 years ago", 
        "thumbnail" : linear_transformations_3b1b, 
        "channel_name" : "3Blue1Brown",  
    },{
        "title" : "How carburettors work?", 
        "channel_img" : smartereveryday, 
        "views" : "2.5M", 
        "posted" : "1 month ago", 
        "thumbnail" : smartereveryday_carburettor, 
        "channel_name" : "SmarterEveryDay",  
    },{
        "title" : "Max Tegmark: AI and Physics | Lex Fridman Podcast #155", 
        "channel_img" : lex_fridman, 
        "views" : "787K", 
        "posted" : "7 months ago", 
        "thumbnail" : max_tegmark_podcast, 
        "channel_name" : "Lex Fridman",  
    },{
    
        "title" : "Coding Challenge 51.1: A* Pathfinding Algorithm - Part 1", 
        "channel_img" : coding_train, 
        "views" : "3.1M", 
        "posted" : "4 years ago", 
        "thumbnail" : coding_train_astar, 
        "channel_name" : "The Coding Train", 
    }
] 

export default available_vids