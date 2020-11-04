import { useRouter } from 'next/router';

const getBannerData = (text, height, img) => {

	const router = useRouter();
	console.log(router.pathname);

	let bd = {banner: true};
    switch (router.pathname) {
      case "/":
        bd.img = "/images/slides/whole-foods-cauliflower-bros.jpg";
        //bd.banner = true
        break;
      case "/about":
        bd.img = "/images/slides/whole2-foods-cauliflower-bros.jpg";
        break;
      default:
      	bd.banner = false;
        break;
    }
  
  return bd;
}

/*getDefaultProps() {
    return {
      text: "Hello",
      height: "Button Text"
    };
  }*/

export default getBannerData;