import '../../@polymer/polymer/polymer-legacy.js';
import '../../@polymer/paper-card/paper-card.js';
import '../../@polymer/paper-button/paper-button.js';
import './components/youtube-videos.js';
import './components/quote-card.js';
import './components/app-link.js';
import './shared-styles.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';

Polymer({
    is: 'cg-lessons',
    properties: {
        apiKey: {
            type: String,
            value: 'AIzaSyCJCokkQUEbcz2hUSzk3CtYU-g2v9CS-uM'
        },
        data: {
            type: Object,
            value: null
        }
    },
    _template: html`    <style include="shared-styles">
    :host {
     display: block;
   }
   :host .inline-quote {
     margin:0;
   }
   :host .read-more {
     justify-content: flex-end;
   }
   :host .lesson-card {
     padding:0 !important;
   }
   :host .p-top {
     padding-top:7px;
     color: var(--app-primary-color);
   }

   :host .bottom-cont {
     text-align: center;
     margin:10px;
   }

   :host .card-top {
     border-bottom: solid 1px #e8e8e8;
     padding: 0px 16px 0 16px;

   }

     :host .card-top p {
       padding-bottom:4px;
     }

     :host .levels {
       margin:0;
       justify-content: flex-start;
     }
     :host .max-card {
       max-width: 620px;
     }

    
     @media (min-width: 1300px) and (orientation:landscape) {
        youtube-videos {
          --youtube-videos-width : 25vw;
          --youtube-videos-height: 25vh;
          --youtube-video-navigator-height:40vh;
        }
     }
     @media (max-width: 650px) {

         
         .card-header {
           font-size: 1.2em;
         }
        
         
       
     }
     @media (min-width: 650px)  and (orientation: landscape) {
       :host .max-card {
         min-width: 400px;
         }
         
       }

       
        #sign {
         --paper-card-header-image : {
           max-height: 240px;
         };
        }
    
   
   
 </style>
 <div class="flex-push-wrap">
   <div class="max-card">
   <paper-card class="big-card" id="sign" image="images/pageimages/lessons.jpg" alt="Group Lessons">
     <div class="card-content">
            <div class="card-header">{{data.lessonCard.name}}</div>
       <p class="card-light" inner-h-t-m-l={{data.lessonCard.text}}></p>
      

     </div>
     <div class="card-actions">
       <div class="horizontal justified">
         <div class="btn-cnt">
         {{data.lessonCard.footer}}
         </div>
         <app-link href="/contact" text="Contact">
         </app-link>
       </div>
     </div>
   </paper-card>
   <youtube-videos has-navigation id="lessons-playlist" search-url="https://www.googleapis.com/youtube/v3/playlistItems" order="viewCount" playlist-id="PLA0cAQ-2uoeo4d-k69kkTkekL300dFIwl" api-key="[[apiKey]]" max-results="10"></youtube-videos>


   
   <div class="flex-push"></div>
   </div>
   <div class="levels">
     <div class="text-flex-cards">
       
       <template is="dom-repeat" items={{data.lessonTypes}} 
         as=item index-as=index>
       <paper-card class="l-card text-card" animated-shadow="false">
             <div class="lesson-card card-content">
               <div class="card-top">
                 <div class="p-top card-header">{{item.name}}</div>
                <p class="card-light" >{{item.text}}</p>
                </div>
                 <template is="dom-repeat" items={{item.testimonials}}  as=testimonial>
                 <quote-card elevation="0" class="inline-quote" image="{{testimonial.image}}" default-image="../../images/default-test.svg" author="{{testimonial.name}}" text="{{testimonial.text}}"></quote-card>
               </template>
 </div>
 <div class="flex-end card-actions">
     <a href="/testimonials">{{data.lessonTypesMore}}</a>

 </div>
 </paper-card>

 </template>


 </div>
 </div>

 </div>
 <p style="text-align:center;margin-top:10px;">
     <span class="quote">
         I'm also available to hire for Session Work, for details please visit the
         <a href="/session">Band/Sessions</a> page.
         </span>
 </p>`
});