try {
    (() => {
      var n = __$$hmAppManager$$__.currentApp;
      const g = n.current,
        { px: p } =
          (new DeviceRuntimeCore.WidgetFactory(
            new DeviceRuntimeCore.HmDomApi(n, g)
          ),
          n.app.__globals__),
        e = Logger.getLogger("watchface6");
      
      const BigNum = ["BigNum/0.png","BigNum/1.png","BigNum/2.png","BigNum/3.png","BigNum/4.png","BigNum/5.png","BigNum/6.png","BigNum/7.png","BigNum/8.png","BigNum/9.png"]
      const Small = ["Small/0.png","Small/1.png","Small/2.png","Small/3.png","Small/4.png","Small/5.png","Small/6.png","Small/7.png","Small/8.png","Small/9.png",]
      const Month = ["months/1.png","months/2.png","months/3.png","months/4.png","months/5.png","months/6.png","months/7.png","months/8.png","months/9.png","months/10.png","months/11.png","months/12.png"]
      const Days = ["days/0.png","days/1.png","days/2.png","days/3.png","days/4.png","days/5.png","days/6.png",]

      g.module = DeviceRuntimeCore.WatchFace({
        init_view() {
          hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 192,
            h: 490,
            src: "rdr2.png",
            show_level: hmUI.show_level.ONLY_NORMAL
          }),
            hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 18,
              y: 125,
              week_en: Days,
              week_tc: Days,
              week_sc: Days,
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 15,
              hour_startY: 47,
              hour_array: BigNum,
              hour_space: 3,
              hour_zero: true,
              hour_align: hmUI.align.RIGHT,

              minute_startX: 106,
              minute_startY: 47,
              minute_zero: 1,
              minute_array: BigNum,
              minute_follow: 0,
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 110,
              month_startY: 125 ,
              month_is_character: true,
              month_sc_array: Month,
              month_tc_array: Month,
              month_en_array: Month,
              month_align: hmUI.align.RIGHT,
              month_follow: 0,
              month_space: 1,
              
              day_startX: 155,
              day_startY: 125,
              day_sc_array: Small,
              day_tc_array: Small,
              day_en_array: Small,
              day_zero: 1,
              day_follow: 0,
              day_is_character: !1,
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG, {
              x: 90,
              y: 60,
              src: "BigNum/doispontos.png",
              show_level: hmUI.show_level.ONLY_NORMAL
            }),

            hmUI.createWidget(hmUI.widget.IMG,{
              x: 105,
              y: 443,
              src: "bat.png",
              show_level: hmUI.show_level.ONLY_NORMAL
            })

            hmUI.createWidget(hmUI.widget.TEXT_IMG,{
              x: 80, 
              y: 445,
              font_array: Small,
              image_lenght: 10, 
              type: hmUI.data_type.BATTERY, 
              h_space: 1, 
              align_h: hmUI.align.RIGHT, 
              show_level: hmUI.show_level.ONLY_NORMAL
            })

            hmUI.createWidget(hmUI.widget.IMG_STATUS,{
              x : 87,
              y : 17,
              type : hmUI.system_status.DISCONNECT,
              src : "blue.png"
            })

            hmUI.createWidget(hmUI.widget.IMG_STATUS,{
              x : 62,
              y : 155,
              type : hmUI.system_status.DISTURB,
              src : "disturb.png"
            })

            const lightmask0 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 1,
              y: 1,
              w: 80,
              h: 80,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });
            //创建抬起事件监听-跳转调整亮度界面
            lightmask0.addEventListener(hmUI.event.CLICK_UP, function () {
              hmApp.startApp({ url: 'Settings_lightAdjustScreen', native: true })
            })
            hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_zero: true,
              hour_startX: 20,
              hour_startY: 170,
              hour_array: BigNum,
              hour_space: 0,
              hour_align: hmUI.align.RIGHT,
              minute_zero: 1,
              minute_array: BigNum,
              minute_follow: 1,
              show_level: hmUI.show_level.ONLY_AOD
            });
        },
        onInit() {
          e.log("index page.js on init invoke");
        },
        build() {
          this.init_view(), e.log("index page.js on ready invoke");
        },
        onDestory() {
          e.log("index page.js on destory invoke");
        }
      });
    })();
  } catch (n) {
    console.log(n);
  }
  