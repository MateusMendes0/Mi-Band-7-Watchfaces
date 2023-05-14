try {
  (() => {
    const init_view = () => {
      
      let gifs = []
      for (var i = 1; i<=31; i++){
      gifs.push(`anim/division (${i}).png`);
    }




      const BigNum = ["BigNum/0.png","BigNum/1.png","BigNum/2.png","BigNum/3.png","BigNum/4.png","BigNum/5.png","BigNum/6.png","BigNum/7.png","BigNum/8.png","BigNum/9.png"]
      const Small = ["Small/0.png","Small/1.png","Small/2.png","Small/3.png","Small/4.png","Small/5.png","Small/6.png","Small/7.png","Small/8.png","Small/9.png",]
      const Month = ["months/1.png","months/2.png","months/3.png","months/4.png","months/5.png","months/6.png","months/7.png","months/8.png","months/9.png","months/10.png","months/11.png","months/12.png"]
      const Days = ["days/0.png","days/1.png","days/2.png","days/3.png","days/4.png","days/5.png","days/6.png",]

      const bgWidget = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        w: 192,
        h: 490,
        src: "DIVISION.png",
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const imgAnimation = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
        anim_path: 'anim',
        anim_prefix: 'division',
        anim_ext: 'png',
        anim_fps: 15,
        anim_size: 80,
        repeat_count: 5,
        anim_status: 3,
        x: 46,
        y: 100,
      });

      
      const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 45,
              hour_startY: 207,
              hour_array: BigNum,
              hour_space: -9,
              hour_zero: true,
              hour_align: hmUI.align.RIGHT,

              minute_startX: 43,
              minute_startY: 300,
              minute_space: -9,
              minute_zero: 1,
              minute_array: BigNum,
              minute_follow: 0,
              show_level: hmUI.show_level.ONLY_NORMAL
      });

	 const statusbWidget = hmUI.createWidget(hmUI.widget.IMG_STATUS,{
        x : 82,
        y : 30 ,
        type : hmUI.system_status.DISCONNECT,
        src : "blue.png",
        show_level: hmUI.show_level.ONLY_NORMAL
      });
	  
	//  const statusdWidget = hmUI.createWidget(hmUI.widget.IMG_STATUS,{
  //      x : 62,
  //      y : 155,
  //      type : hmUI.system_status.DISTURB,
 //       src : "disturb.png",
 //       show_level: hmUI.show_level.ONLY_NORMAL,
	  
//	  });
	  
//	  const statuslookWidget = hmUI.createWidget(hmUI.widget.IMG_STATUS,{
//	    x: 176,
//        y: 210,
//        src: "disturb.png",
 //       type: hmUI.system_status.LOCK, 
 //       show_level: hmUI.show_level.ONLY_NORMAL,
	  
//	  });
	  
	  const battaryWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG,{
      x: 64, 
      y: 440,
      font_array: Small,
      image_lenght: 10, 
      type: hmUI.data_type.BATTERY, 
      h_space: 1, 
      align_h: hmUI.align.RIGHT, 
      show_level: hmUI.show_level.ONLY_NORMAL,
	  
      
	  });
	  
    const mes = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      month_startX: 84,
      month_startY: 79 ,
      month_is_character: true,
      month_sc_array: Month,
      month_tc_array: Month,
      month_en_array: Month,
      month_align: hmUI.align.RIGHT,
      month_follow: 0,
      month_space: 1,
      
      day_startX: 90,
      day_startY: 78,
      day_sc_array: Small,
      day_tc_array: Small,
      day_en_array: Small,
      day_zero: 1,
      day_follow: 0,
      day_is_character: !1,
      show_level: hmUI.show_level.ONLY_NORMAL
    });
    
    const week = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
      x: 30,
      y: 77,
      week_en: Days,
      week_tc: Days,
      week_sc: Days,
      show_level: hmUI.show_level.ONLY_NORMAL
    });

    }

    __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
      onInit() {},
      build () { init_view() },
      onDestory () {}
    })
  })()
} catch (error) {
  console.log(error)
}
