import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-yellow-400 absolute overflow-hidden">



<div className=" relative top-0  w-full h-[110px] bg-black rounded-bl-[35px] rounded-br-[35px] ">
 <div className="flex justify-between items-center">
 <div>
<div className="w-[64px] h-[64px] rounded-[50%] border border-black z-10  bg-yellow-400 relative top-[25px] left-[35px] justify-center flex items-center font-montserrat font-extrabold text-[45px]  leading-10 text-center tracking-normal">
A
</div>
<div className="w-[64px] h-[64px] rounded-[50%]  bg-white relative top-[-35px] left-[40px]  "></div>
  </div>
<div className="hidden  md:flex text-white font-monserrat text-[30px]  items-center mr-6 space-x-10 ">
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact Us</a>
  <a href="">Team</a>
</div>
<button className="md:hidden    flex flex-col justify-between items-center w-8 h-6 bg-transparent border-none mr-8 ">
  <span className="block w-8 h-1 bg-white rounded-sm"></span>
  <span className="block w-8 h-1 bg-white  rounded-sm"></span>
  <span className="block w-8 h-1 bg-white  rounded-sm"></span>
</button>
  </div>
  </div>

  









  



  
   
  <div className="relative top-0 left-10 md:top-[250px]  lg:top-[120px]     xl:top-[120px]">

  <div className="flex flex-col justify-start items-start md:space-y-3 sm:mt-0  sm:space-y-0"> 
<div className="font-montserrat font-extrabold md:text-6xl text-[45px]  sm:text-[45px] sm:leading-0 leading-10 text-center tracking-normal">Hello,
</div>
<div className=" font-montserrat font-extrabold md:text-6xl text-[45px]  sm:text-[35px]  leading-10 text-center tracking-normal">I'm</div>
<div className="lg:flex pt-5 sm:pt-0">
<p className="font-montserrat font-semibold text-[25px] md:text-[25px] sm:text-[15px] leading-[28px] tracking-normal text-[#474A57]">UI/UX Designer ,</p>
<p className="font-montserrat font-semibold text-[25px] md:text-[25px] sm:text-[15px] leading-[28px] tracking-normal text-[#474A57]">Front End Developer ,</p>
  
</div>

</div>
</div>

<div className="relative xl:left-[40px]  md:left-[10px] md:top-[-25px]  top-[155px] xl:top-[-100px]  sm:top-[-120px]  lg:top-[-90px] lg:left-[40px]     left-10">
<div className="relative top-[150px]     lg:top-[290px]     xl:top-[290px]    z-10 space-x-3 md:top-[290px]  sm:top-[149px] ">
<button className="bg-black  w-[134px]  h-[30px]    sm:h-[30px] sm:w-[134px]     sm:text-xl   md:w-[134px] md:h-[43px] font-montserrat font-bold md:text-2xl leading-[39.01px] tracking-normal text-white rounded-[15px] ">Hire me</button>
<button className="bg-black  w-[134px]  h-[30px]   sm:h-[30px] sm:w-[134px]       sm:text-xl  md:w-[164px] md:h-[43px] font-montserrat font-bold md:text-2xl leading-[39.01px] tracking-normal text-white rounded-[15px]">Dowload Cv</button>
</div>  
<div className="relative top-[124px] left-1  space-x-3 md:top-[250px]  sm:top-[122px] ">
<button className="bg-[#00C6AE] w-[134px]  h-[30px]    sm:h-[30px] sm:w-[134px]     sm:text-xl   md:w-[134px] md:h-[43px] font-montserrat font-bold md:text-2xl leading-[39.01px] tracking-normal text-white rounded-[15px] "></button>
<button className="bg-[#00C6AE]  w-[134px]  h-[30px]  sm:h-[30px] sm:w-[134px]       sm:text-xl  md:w-[164px] md:h-[43px] font-montserrat font-bold md:text-2xl leading-[39.01px] tracking-normal text-white rounded-[15px]"></button>
</div>


</div>






<div className=" relative md:left-[330px]  lg:left-[600px]    md:top-[-80px]    lg:top-[-200px] sm:left-[400px] sm:top-[-220px]    top-[-30px] left-10  xl:left-[1350px] xl:top-[-200px]">
<div className=" flex mr-0">
<div>
<img className=" xl:w-[400px]   xl:h-[450px]   mb-10 sm:mt-6 h-[250px]  w-[240px]   lg:h-[300px] lg:w-[300px]  md:h-[350px]  md:w-[350px] sm:w-[200px]  sm:h-[190px]   mr-4 " src="/images/avatar.png" />
</div>
<div className=" xl:w-[120px]  lg:w-[60px]  lg:mt-[80px] mt-[50px] sm:mt-[25px] md:w-[70px] w-[50px]   sm:w-12">
 <a href="">
<img src="/images/Component 2.png" />
  </a>
  <a href="">
<img src="/images/Component 1.png" />
    </a>
 <a href="" >
<img src="/images/Component 3.png" />
  </a>
  <a href="">
<img src="/images/Component 4.png" />
    </a>    
</div>
</div>
</div>







    </div>
  );
}
