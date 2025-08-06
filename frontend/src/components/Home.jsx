import Index from "./Hero"
import ThirdPage from "./Hero2/ThirdPage";
import FirstPage from "./FirstPage/FirstPage";

const Home = () => {

  return (
    <>
    <div className="h-screen  w-full  ">
      <FirstPage/>
    </div>
    <div className="h-fit w-full xl:px-10 ">
      <Index/>
    </div>
    <div className="h-screen w-full   xl:px-10">
      <ThirdPage/>
    </div>
    </>
  )
}
export default Home;