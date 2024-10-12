/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-10-12 11:35:35
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-12 16:26:32
 * @FilePath: \hooks\useImgPre.ts
 */
import cloneImageWithoutReload from "~/utils/cloneImageWithoutReload";

const useImgPre = () => {
  onMounted(() => {
    let imgs = document.querySelectorAll("img");

    // 14，预览图片前页面滚动距离初始值
    let lastPositon = 0;
    imgs.forEach((pic) => {
      pic.addEventListener("click", function () {
        // 15，计算预览图片前页面滚动距离
        lastPositon = window.scrollY;
        // 1，克隆元素
        // 使用这种方式图片不会重新加载，但是会变模糊
        // const pic2 = cloneImageWithoutReload(pic) as HTMLImageElement;
        // 使用这种方式浏览器开启缓存图片偶尔会重新加载，导致页面看上去卡顿一下，但是不会降低图片质量
        const pic2 = pic.cloneNode() as HTMLImageElement;
        console.log(pic2);

        // 4，创建蒙层
        const mask = document.createElement("div");
        mask.classList.add("mask");
        // 5，将元素添加到body中
        mask.appendChild(pic2);
        document.body.appendChild(mask);

        // 2，计算原图距离窗口left，top的距离
        let picToTop = pic.getBoundingClientRect().y;
        let picToLeft = pic.getBoundingClientRect().x;
        // 11，计算原图宽度
        let picWidth = pic.width;
        let picHeight = pic.height;
        let aspectRatio = picWidth / picHeight;

        // 3，设置克隆图片初始位置
        pic2.style.position = "absolute";
        pic2.style.left = `${picToLeft}px`;
        pic2.style.top = `${picToTop}px`;
        pic2.style.width = `${picWidth}px`;
        pic2.style.height = `${picHeight}px`;

        // 6，使用setTimeout是为了触发`transition`，产生动画
        // 7，隐藏原图片
        pic.style.visibility = "hidden";
        Promise.resolve().then(() => {
          setTimeout(() => {
            // 8，设置预览图片展示宽度以及位置
            pic2.style.position = "absolute";
            pic2.style.transition = "all .5s";
            if (
              picHeight > picWidth &&
              window.innerHeight * aspectRatio < window.innerWidth
            ) {
              pic2.style.height = "100%";
              console.log(window.innerHeight * aspectRatio);
              console.log(window.innerWidth);

              pic2.style.width = window.innerHeight * aspectRatio + "px";
              pic2.style.transform = "translateX(-50%)";
              pic2.style.left = "50%";
              pic2.style.top = `0`;
            } else {
              pic2.style.width = "100%";
              pic2.style.height =
                window.innerWidth * (picHeight / picWidth) + "px";
              pic2.style.transform = "translateY(-50%)";
              pic2.style.top = "50%";
              pic2.style.left = `0`;
            }
          }, 0);
        });
        // 9，点击蒙层关闭预览
        mask.addEventListener("click", function () {
          // 10，预览图回到原图位置
          pic2.style.width = `${picWidth}px`;
          pic2.style.height = `${picHeight}px`;
          pic2.style.left = `${picToLeft}px`;
          pic2.style.top = `${picToTop}px`;
          pic2.style.transform = "";
          // 12，显示原图
          const mask = document.querySelector(".mask") as HTMLDivElement;
          mask.style.animation = "fadeInOut 0.5s";
          mask.style.backgroundColor = "rgba(0, 0, 0, 0)";
          setTimeout(() => {
            pic.style.visibility = "visible";
            // 13，删除蒙层以及预览图
            this.remove();
          }, 500);
        });
      });
    });
  });
};

export default useImgPre;
