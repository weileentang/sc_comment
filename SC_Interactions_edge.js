/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'StatusBar',
            type:'image',
            rect:['0%','0px','640px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"StatusBar.png",'0px','0px']
         },
         {
            id:'Landing',
            type:'image',
            rect:['0%','0px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Landing.png",'0px','0px']
         },
         {
            id:'Select_Play',
            display:'none',
            type:'image',
            rect:['0px','0px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Select%20Play.png",'0px','0px']
         },
         {
            id:'LightboxSlideup',
            display:'none',
            type:'rect',
            rect:['2.3%','135px','640px','991px','auto','auto'],
            fill:["rgba(0,0,0,0.49)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Comments_layer2',
            display:'none',
            type:'image',
            rect:['2.3%','1133px','640px','1027px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Comments%20layer2.png",'0px','0px']
         },
         {
            id:'CommentsScroll',
            display:'none',
            type:'image',
            rect:['0%','467px','640px','1193px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"CommentsScroll3.png",'0px','0px']
         },
         {
            id:'Comments_Top',
            display:'none',
            type:'image',
            rect:['0%','0px','640px','473px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Comments_Top.png",'0px','0px']
         },
         {
            id:'AddedComment_Bottom',
            display:'none',
            type:'image',
            rect:['0%','797px','640px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"AddedComment_Bottom3.png",'0px','0px']
         },
         {
            id:'NewComment',
            display:'none',
            type:'image',
            rect:['0%','508px','640px','120px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"NewComment.png",'0px','0px']
         },
         {
            id:'AddedComment_Top',
            display:'none',
            type:'image',
            rect:['133.8%','283px','640px','377px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"AddedComment_Top.png",'0px','0px']
         },
         {
            id:'LightboxCommenting',
            display:'none',
            type:'rect',
            rect:['2.3%','135px','640px','991px','auto','auto'],
            fill:["rgba(0,0,0,0.49)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Comment_Panel',
            display:'none',
            type:'image',
            rect:['0%','-218px','640px','356px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Comment_Panel.png",'0px','0px']
         },
         {
            id:'Done_Pressed',
            display:'none',
            type:'image',
            rect:['72.6%','369px','144px','74px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Done_Pressed.png",'0px','0px']
         },
         {
            id:'Player',
            display:'none',
            type:'image',
            rect:['0%','990px','640px','146px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Player.png",'0px','0px']
         },
         {
            id:'Add_Comment_Pressed_Nav_Empty',
            display:'none',
            type:'image',
            rect:['0%','0px','640px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Add_Comment_Pressed_Nav_Empty.png",'0px','0px']
         },
         {
            id:'Add_Comment_Pressed_Nav_Bar',
            display:'none',
            type:'image',
            rect:['0%','0px','640px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Add_Comment_Pressed_Nav_Bar2.png",'0px','0px']
         },
         {
            id:'Add_Comment_Pressed',
            display:'none',
            type:'image',
            rect:['84.5%','35px','99px','96px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Add%20Comment%20Pressed.png",'0px','0px']
         },
         {
            id:'Player_230',
            display:'none',
            type:'image',
            rect:['0%','994px','640px','146px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Player_230.png",'0px','0px']
         },
         {
            id:'Keyboard',
            display:'none',
            type:'image',
            rect:['0%','1136px','640px','430px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Keyboard.png",'0px','0px']
         },
         {
            id:'CommentsNavBar',
            type:'image',
            rect:['0%','0px','640px','134px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"CommentsNavBar.png",'0px','0px']
         },
         {
            id:'LaunchScreen',
            type:'image',
            rect:['0%','0px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"LaunchScreen.png",'0px','0px']
         },
         {
            id:'INTERACTOR',
            display:'none',
            type:'ellipse',
            rect:['125.8%','605px','70px','70px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,0.4961)"],
            stroke:[1,"rgba(255,255,255,1.00)","solid"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Comment_Panel}": [
            ["style", "top", '-229px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_StatusBar}": [
            ["style", "left", '0%'],
            ["style", "top", '0px']
         ],
         "${_Done_Pressed}": [
            ["style", "top", '368.75px'],
            ["style", "opacity", '0'],
            ["style", "left", '72.63%'],
            ["style", "display", 'none']
         ],
         "${_LaunchScreen}": [
            ["style", "top", '-9.85px'],
            ["style", "height", '1165.6203125px'],
            ["style", "opacity", '1'],
            ["style", "left", '-1.25%'],
            ["style", "width", '656.6875px']
         ],
         "${_INTERACTOR}": [
            ["color", "background-color", 'rgba(147,147,147,0.50)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "top", '812.94px'],
            ["style", "opacity", '1'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,255,255,0.80)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '104.54%']
         ],
         "${_Add_Comment_Pressed_Nav_Empty}": [
            ["style", "top", '0px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Comments_Top}": [
            ["style", "top", '0px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_CommentsScroll}": [
            ["style", "top", '467px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Add_Comment_Pressed}": [
            ["style", "top", '36px'],
            ["style", "opacity", '0'],
            ["style", "left", '84.53%'],
            ["style", "display", 'none']
         ],
         "${_LightboxSlideup}": [
            ["style", "top", '36.12px'],
            ["style", "height", '955.91650390625px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0.01%'],
            ["color", "background-color", 'rgba(0,0,0,0.00)']
         ],
         "${_Landing}": [
            ["style", "top", '0px'],
            ["style", "left", '0%'],
            ["style", "display", 'block']
         ],
         "${_Comments_layer2}": [
            ["style", "top", '1138px'],
            ["style", "display", 'none'],
            ["style", "left", '0%'],
            ["style", "clip", [0,640,1027,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_NewComment}": [
            ["style", "top", '508px'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_AddedComment_Top}": [
            ["style", "top", '470.34px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Player}": [
            ["style", "top", '990.1px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Add_Comment_Pressed_Nav_Bar}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "top", '0px']
         ],
         "${_CommentsNavBar}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0%']
         ],
         "${_Player_230}": [
            ["style", "top", '994px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Select_Play}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0.35px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px'],
            ["style", "height", '1136px'],
            ["style", "overflow", 'hidden']
         ],
         "${_LightboxCommenting}": [
            ["style", "top", '36.12px'],
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0.01%'],
            ["style", "height", '955.91650390625px']
         ],
         "${_AddedComment_Bottom}": [
            ["style", "top", '798px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ],
         "${_Keyboard}": [
            ["style", "top", '1136px'],
            ["style", "left", '0%'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17483,
         autoPlay: true,
         timeline: [
            { id: "eid282", tween: [ "style", "${_LaunchScreen}", "height", '1165.6203125px', { fromValue: '1165.6203125px'}], position: 0, duration: 0 },
            { id: "eid136", tween: [ "style", "${_LightboxCommenting}", "height", '955.91650390625px', { fromValue: '955.91650390625px'}], position: 6900, duration: 0 },
            { id: "eid418", tween: [ "style", "${_Add_Comment_Pressed}", "opacity", '1', { fromValue: '0'}], position: 13736, duration: 314 },
            { id: "eid114", tween: [ "style", "${_Keyboard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Keyboard}", "display", 'block', { fromValue: 'none'}], position: 13736, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Keyboard}", "display", 'none', { fromValue: 'block'}], position: 16617, duration: 0 },
            { id: "eid283", tween: [ "style", "${_LaunchScreen}", "width", '656.6875px', { fromValue: '656.6875px'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Keyboard}", "left", '0%', { fromValue: '0%'}], position: 13736, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Keyboard}", "left", '0%', { fromValue: '0%'}], position: 14254, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Keyboard}", "left", '0%', { fromValue: '0%'}], position: 16343, duration: 0 },
            { id: "eid213", tween: [ "style", "${_Keyboard}", "left", '0%', { fromValue: '0%'}], position: 16617, duration: 0 },
            { id: "eid49", tween: [ "color", "${_INTERACTOR}", "border-color", 'rgba(255,255,255,0.80)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.80)'}], position: 6900, duration: 0 },
            { id: "eid35", tween: [ "style", "${_INTERACTOR}", "border-width", '4px', { fromValue: '4px'}], position: 6134, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Done_Pressed}", "opacity", '1', { fromValue: '0'}], position: 15923, duration: 136 },
            { id: "eid195", tween: [ "style", "${_Done_Pressed}", "opacity", '0', { fromValue: '1'}], position: 16173, duration: 68 },
            { id: "eid265", tween: [ "style", "${_Add_Comment_Pressed}", "top", '36px', { fromValue: '36px'}], position: 13736, duration: 0 },
            { id: "eid248", tween: [ "style", "${_AddedComment_Bottom}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid247", tween: [ "style", "${_AddedComment_Bottom}", "display", 'block', { fromValue: 'none'}], position: 16241, duration: 0 },
            { id: "eid291", tween: [ "style", "${_INTERACTOR}", "top", '502.62px', { fromValue: '812.94px'}], position: 1937, duration: 631 },
            { id: "eid343", tween: [ "style", "${_INTERACTOR}", "top", '1024px', { fromValue: '655.33px'}], position: 3500, duration: 2250 },
            { id: "eid339", tween: [ "style", "${_INTERACTOR}", "top", '1024px', { fromValue: '1024px'}], position: 5750, duration: 384 },
            { id: "eid56", tween: [ "style", "${_INTERACTOR}", "top", '48.77px', { fromValue: '1024px'}], position: 6209, duration: 691 },
            { id: "eid388", tween: [ "style", "${_INTERACTOR}", "top", '901.59px', { fromValue: '48.77px'}], position: 6900, duration: 2288 },
            { id: "eid389", tween: [ "style", "${_INTERACTOR}", "top", '497.24px', { fromValue: '901.59px'}], position: 9188, duration: 1165 },
            { id: "eid405", tween: [ "style", "${_INTERACTOR}", "top", '892.5px', { fromValue: '497.24px'}], position: 11140, duration: 1049 },
            { id: "eid167", tween: [ "style", "${_INTERACTOR}", "top", '49px', { fromValue: '48.77px'}], position: 13669, duration: 688 },
            { id: "eid190", tween: [ "style", "${_INTERACTOR}", "top", '367.89px', { fromValue: '49px'}], position: 14357, duration: 298 },
            { id: "eid147", tween: [ "style", "${_Add_Comment_Pressed_Nav_Empty}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Add_Comment_Pressed_Nav_Empty}", "display", 'block', { fromValue: 'none'}], position: 13839, duration: 0 },
            { id: "eid377", tween: [ "style", "${_Comments_Top}", "top", '0px', { fromValue: '0px'}], position: 9250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Comments_layer2}", "clip", [0,640,1027,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,1027,0]}], position: 6134, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Add_Comment_Pressed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Add_Comment_Pressed}", "display", 'block', { fromValue: 'none'}], position: 13736, duration: 0 },
            { id: "eid141", tween: [ "style", "${_LightboxCommenting}", "left", '0.01%', { fromValue: '0.01%'}], position: 6900, duration: 0 },
            { id: "eid298", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '1'}], position: 2568, duration: 0 },
            { id: "eid325", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 3341, duration: 159 },
            { id: "eid330", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '0.7708010077476501'}], position: 5750, duration: 459 },
            { id: "eid392", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 7014, duration: 2174 },
            { id: "eid393", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '0'}], position: 9188, duration: 122 },
            { id: "eid412", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 10353, duration: 122 },
            { id: "eid413", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '0'}], position: 11140, duration: 214 },
            { id: "eid415", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 12053, duration: 136 },
            { id: "eid345", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '0'}], position: 13839, duration: 0 },
            { id: "eid152", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 14147, duration: 210 },
            { id: "eid163", tween: [ "style", "${_INTERACTOR}", "opacity", '1', { fromValue: '0'}], position: 15794, duration: 265 },
            { id: "eid164", tween: [ "style", "${_INTERACTOR}", "opacity", '0', { fromValue: '1'}], position: 16059, duration: 456 },
            { id: "eid361", tween: [ "style", "${_CommentsScroll}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid360", tween: [ "style", "${_CommentsScroll}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
            { id: "eid419", tween: [ "style", "${_CommentsScroll}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0 },
            { id: "eid319", tween: [ "style", "${_Select_Play}", "opacity", '1', { fromValue: '0'}], position: 3061, duration: 189 },
            { id: "eid140", tween: [ "style", "${_LightboxCommenting}", "opacity", '1', { fromValue: '0'}], position: 13839, duration: 111 },
            { id: "eid220", tween: [ "style", "${_LightboxCommenting}", "opacity", '0', { fromValue: '1'}], position: 16303, duration: 314 },
            { id: "eid369", tween: [ "style", "${_CommentsScroll}", "top", '-203px', { fromValue: '467px'}], position: 9250, duration: 1250 },
            { id: "eid374", tween: [ "style", "${_CommentsScroll}", "top", '466px', { fromValue: '-203px'}], position: 11302, duration: 948 },
            { id: "eid365", tween: [ "style", "${_CommentsScroll}", "left", '0%', { fromValue: '0%'}], position: 9250, duration: 0 },
            { id: "eid367", tween: [ "style", "${_CommentsScroll}", "left", '0%', { fromValue: '0%'}], position: 10500, duration: 0 },
            { id: "eid372", tween: [ "style", "${_CommentsScroll}", "left", '0%', { fromValue: '0%'}], position: 11302, duration: 0 },
            { id: "eid370", tween: [ "style", "${_CommentsScroll}", "left", '0%', { fromValue: '0%'}], position: 12250, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Comment_Panel}", "top", '127px', { fromValue: '-229px'}], position: 13839, duration: 308 },
            { id: "eid205", tween: [ "style", "${_Comment_Panel}", "top", '-243.25px', { fromValue: '127px'}], position: 16343, duration: 274 },
            { id: "eid285", tween: [ "style", "${_LaunchScreen}", "top", '-9.85px', { fromValue: '-9.85px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Comments_layer2}", "top", '38.1px', { fromValue: '1138px'}], position: 6134, duration: 766 },
            { id: "eid378", tween: [ "style", "${_Comments_layer2}", "top", '38px', { fromValue: '38.1px'}], position: 6900, duration: 6939 },
            { id: "eid79", tween: [ "style", "${_Comments_layer2}", "top", '380.43px', { fromValue: '38px'}], position: 13839, duration: 354 },
            { id: "eid210", tween: [ "style", "${_Comments_layer2}", "top", '40px', { fromValue: '380.43px'}], position: 16303, duration: 274 },
            { id: "eid256", tween: [ "style", "${_NewComment}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_NewComment}", "display", 'block', { fromValue: 'none'}], position: 17184, duration: 0 },
            { id: "eid352", tween: [ "style", "${_Comments_Top}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid351", tween: [ "style", "${_Comments_Top}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
            { id: "eid353", tween: [ "style", "${_Comments_Top}", "display", 'none', { fromValue: 'block'}], position: 13829, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Player_230}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Player_230}", "display", 'block', { fromValue: 'none'}], position: 16241, duration: 0 },
            { id: "eid225", tween: [ "style", "${_CommentsNavBar}", "opacity", '1', { fromValue: '0.000000'}], position: 16241, duration: 376 },
            { id: "eid156", tween: [ "style", "${_Done_Pressed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_Done_Pressed}", "display", 'block', { fromValue: 'none'}], position: 15923, duration: 0 },
            { id: "eid194", tween: [ "style", "${_Done_Pressed}", "display", 'block', { fromValue: 'block'}], position: 16241, duration: 0 },
            { id: "eid284", tween: [ "style", "${_LaunchScreen}", "left", '-1.25%', { fromValue: '-1.25%'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_LaunchScreen}", "opacity", '0', { fromValue: '1'}], position: 1211, duration: 212 },
            { id: "eid259", tween: [ "style", "${_NewComment}", "opacity", '1', { fromValue: '0'}], position: 17184, duration: 299 },
            { id: "eid236", tween: [ "style", "${_AddedComment_Top}", "left", '0%', { fromValue: '0%'}], position: 14193, duration: 0 },
            { id: "eid241", tween: [ "style", "${_AddedComment_Top}", "left", '0%', { fromValue: '0%'}], position: 16241, duration: 0 },
            { id: "eid237", tween: [ "style", "${_AddedComment_Top}", "left", '0%', { fromValue: '0%'}], position: 16617, duration: 0 },
            { id: "eid145", tween: [ "color", "${_LightboxCommenting}", "background-color", 'rgba(0,0,0,0.50)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.50)'}], position: 13839, duration: 0 },
            { id: "eid235", tween: [ "style", "${_AddedComment_Top}", "top", '470px', { fromValue: '470.34px'}], position: 14193, duration: 2048 },
            { id: "eid242", tween: [ "style", "${_AddedComment_Top}", "top", '131px', { fromValue: '470px'}], position: 16241, duration: 376 },
            { id: "eid26", tween: [ "style", "${_LightboxSlideup}", "left", '0.01%', { fromValue: '0.01%'}], position: 6900, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Comment_Panel}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Comment_Panel}", "display", 'block', { fromValue: 'none'}], position: 13839, duration: 0 },
            { id: "eid217", tween: [ "style", "${_Comment_Panel}", "display", 'none', { fromValue: 'block'}], position: 16617, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "top", '0px', { fromValue: '0px'}], position: 13736, duration: 0 },
            { id: "eid107", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "top", '0px', { fromValue: '0px'}], position: 14254, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Player}", "display", 'none', { fromValue: 'none'}], position: 1684, duration: 0 },
            { id: "eid334", tween: [ "style", "${_Player}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid221", tween: [ "style", "${_Player}", "display", 'none', { fromValue: 'block'}], position: 15670, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Landing}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid23", tween: [ "color", "${_LightboxSlideup}", "background-color", 'rgba(0,0,0,0.50)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 6209, duration: 105 },
            { id: "eid305", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.4961)'}], position: 2568, duration: 432 },
            { id: "eid306", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.50)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.85)'}], position: 3000, duration: 341 },
            { id: "eid320", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.50)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.4961)'}], position: 3341, duration: 2409 },
            { id: "eid341", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.80)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.50)'}], position: 5750, duration: 250 },
            { id: "eid321", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.80)'}], position: 6000, duration: 134 },
            { id: "eid397", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.85)'}], position: 6900, duration: 0 },
            { id: "eid401", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.8477)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.8477)'}], position: 9310, duration: 0 },
            { id: "eid403", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.50)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.8477)'}], position: 11140, duration: 0 },
            { id: "eid414", tween: [ "color", "${_INTERACTOR}", "background-color", 'rgba(147,147,147,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(147,147,147,0.4961)'}], position: 11354, duration: 0 },
            { id: "eid24", tween: [ "style", "${_LightboxSlideup}", "height", '955.91650390625px', { fromValue: '955.91650390625px'}], position: 6900, duration: 0 },
            { id: "eid267", tween: [ "style", "${_Comments_layer2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "style", "${_Comments_layer2}", "display", 'block', { fromValue: 'none'}], position: 6134, duration: 0 },
            { id: "eid240", tween: [ "style", "${_Comments_layer2}", "display", 'none', { fromValue: 'block'}], position: 14193, duration: 0 },
            { id: "eid60", tween: [ "style", "${_INTERACTOR}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid286", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'none'}], position: 1937, duration: 0 },
            { id: "eid289", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'block'}], position: 6134, duration: 0 },
            { id: "eid50", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'block'}], position: 6763, duration: 0 },
            { id: "eid58", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'block'}], position: 6900, duration: 0 },
            { id: "eid63", tween: [ "style", "${_INTERACTOR}", "display", 'none', { fromValue: 'block'}], position: 7014, duration: 0 },
            { id: "eid380", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'none'}], position: 9188, duration: 0 },
            { id: "eid409", tween: [ "style", "${_INTERACTOR}", "display", 'none', { fromValue: 'block'}], position: 10654, duration: 0 },
            { id: "eid408", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'none'}], position: 11140, duration: 0 },
            { id: "eid410", tween: [ "style", "${_INTERACTOR}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
            { id: "eid71", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'none'}], position: 13669, duration: 0 },
            { id: "eid184", tween: [ "style", "${_INTERACTOR}", "display", 'none', { fromValue: 'block'}], position: 14357, duration: 0 },
            { id: "eid185", tween: [ "style", "${_INTERACTOR}", "display", 'block', { fromValue: 'none'}], position: 15794, duration: 0 },
            { id: "eid290", tween: [ "style", "${_INTERACTOR}", "left", '38.7%', { fromValue: '104.54%'}], position: 1937, duration: 631 },
            { id: "eid342", tween: [ "style", "${_INTERACTOR}", "left", '86%', { fromValue: '52.55%'}], position: 3500, duration: 2250 },
            { id: "eid55", tween: [ "style", "${_INTERACTOR}", "left", '85.36%', { fromValue: '86%'}], position: 6134, duration: 766 },
            { id: "eid177", tween: [ "style", "${_INTERACTOR}", "left", '84.42%', { fromValue: '85.36%'}], position: 6900, duration: 2288 },
            { id: "eid387", tween: [ "style", "${_INTERACTOR}", "left", '85.99%', { fromValue: '86%'}], position: 9188, duration: 1165 },
            { id: "eid404", tween: [ "style", "${_INTERACTOR}", "left", '86%', { fromValue: '85.99%'}], position: 11140, duration: 1049 },
            { id: "eid385", tween: [ "style", "${_INTERACTOR}", "left", '86%', { fromValue: '85.97%'}], position: 13305, duration: 364 },
            { id: "eid188", tween: [ "style", "${_INTERACTOR}", "left", '78%', { fromValue: '86%'}], position: 14357, duration: 298 },
            { id: "eid112", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "opacity", '1', { fromValue: '0'}], position: 13736, duration: 250 },
            { id: "eid239", tween: [ "style", "${_AddedComment_Top}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_AddedComment_Top}", "display", 'block', { fromValue: 'none'}], position: 14193, duration: 0 },
            { id: "eid262", tween: [ "style", "${_AddedComment_Bottom}", "left", '0%', { fromValue: '0%'}], position: 16241, duration: 0 },
            { id: "eid249", tween: [ "style", "${_AddedComment_Bottom}", "left", '0%', { fromValue: '0%'}], position: 17017, duration: 0 },
            { id: "eid252", tween: [ "style", "${_AddedComment_Bottom}", "left", '0%', { fromValue: '0%'}], position: 17184, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Keyboard}", "top", '706px', { fromValue: '1136px'}], position: 13736, duration: 518 },
            { id: "eid215", tween: [ "style", "${_Keyboard}", "top", '1136px', { fromValue: '706px'}], position: 16343, duration: 274 },
            { id: "eid27", tween: [ "style", "${_LightboxSlideup}", "top", '36.12px', { fromValue: '36.12px'}], position: 6900, duration: 0 },
            { id: "eid125", tween: [ "style", "${_LightboxSlideup}", "opacity", '1', { fromValue: '0'}], position: 6209, duration: 105 },
            { id: "eid95", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "display", 'block', { fromValue: 'none'}], position: 13736, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Add_Comment_Pressed_Nav_Bar}", "display", 'block', { fromValue: 'block'}], position: 14254, duration: 0 },
            { id: "eid13", tween: [ "style", "${_LightboxSlideup}", "display", 'block', { fromValue: 'none'}], position: 6134, duration: 0 },
            { id: "eid261", tween: [ "style", "${_LightboxSlideup}", "display", 'none', { fromValue: 'block'}], position: 6900, duration: 0 },
            { id: "eid264", tween: [ "style", "${_AddedComment_Bottom}", "top", '507.84px', { fromValue: '798px'}], position: 16241, duration: 376 },
            { id: "eid254", tween: [ "style", "${_AddedComment_Bottom}", "top", '628px', { fromValue: '507.84px'}], position: 17017, duration: 167 },
            { id: "eid32", tween: [ "style", "${_Comments_layer2}", "left", '0.01%', { fromValue: '0%'}], position: 6134, duration: 766 },
            { id: "eid33", tween: [ "style", "${_Comments_layer2}", "left", '0.01%', { fromValue: '0.01%'}], position: 6900, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Comments_layer2}", "left", '0%', { fromValue: '0.01%'}], position: 13839, duration: 354 },
            { id: "eid206", tween: [ "style", "${_Comments_layer2}", "left", '0%', { fromValue: '0%'}], position: 16303, duration: 0 },
            { id: "eid208", tween: [ "style", "${_Comments_layer2}", "left", '0%', { fromValue: '0%'}], position: 16577, duration: 0 },
            { id: "eid142", tween: [ "style", "${_LightboxCommenting}", "top", '36.12px', { fromValue: '36.12px'}], position: 6900, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Comment_Panel}", "left", '0%', { fromValue: '0%'}], position: 13839, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Comment_Panel}", "left", '0%', { fromValue: '0%'}], position: 14147, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Comment_Panel}", "left", '0%', { fromValue: '0%'}], position: 16343, duration: 0 },
            { id: "eid203", tween: [ "style", "${_Comment_Panel}", "left", '0%', { fromValue: '0%'}], position: 16617, duration: 0 },
            { id: "eid315", tween: [ "style", "${_Select_Play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_Select_Play}", "display", 'block', { fromValue: 'none'}], position: 3061, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Select_Play}", "display", 'none', { fromValue: 'block'}], position: 6900, duration: 0 },
            { id: "eid137", tween: [ "style", "${_LightboxCommenting}", "display", 'block', { fromValue: 'none'}], position: 13839, duration: 0 },
            { id: "eid260", tween: [ "style", "${_LightboxCommenting}", "display", 'none', { fromValue: 'block'}], position: 16617, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-196114663");
