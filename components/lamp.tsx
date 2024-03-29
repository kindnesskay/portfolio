export default function Lamp() {
  return (
    <div className="w-full h-full flex flex-col absolute items-center ">
      <div className=" w-3/4 h-16 bg-black lamp shadow-2xl shadow-blue-800 rounded-lg "></div>
      <div className="h-full bg-blue-800 lamprays shadow-3xl shadow-blue-800 rounded-lg -translate-y-3" style={{width:"72%"}}></div>
    </div>
  );
}
