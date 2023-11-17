import { useState } from "react";
import Birthday from "./data.js";
import Birthdaylist from "./components/Birthdaylist.jsx";
import Title from "./components/Title.jsx";

function App() {
  const boshqiymat = Birthday
  const [birthday, setBirthday] = useState(boshqiymat);

   const  handleDelete = (id) =>{
    const birthdayRemove = birthday.filter((prev)=> prev.id !== id)
    setBirthday(birthdayRemove)
   }
   const handleClear = () =>{
    setBirthday([])
   }

   const handleReset = ()=>{
    setBirthday(boshqiymat)
   }

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-5">
      <div className="w-[500px] flex flex-col items-center justify-center bg-white py-4">
      <Title userLenght={birthday.length} />
      <Birthdaylist birthday={birthday} handleDelete={handleDelete} />
      <div>
        {birthday.length > 0 ? (
          <button className="btn btn-primary" onClick={handleClear}>Clear All</button>
        ) : (
          <button className="btn btn-success" onClick={handleReset}>Reset</button>
        )}
      </div>
      </div>

    </div>
  );
}

export default App;
