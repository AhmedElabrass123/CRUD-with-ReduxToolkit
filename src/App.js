import React from 'react';
import Posts from './components/Posts';
const App = () => {
  return (
   <div className='text-center'>
    <h2 className='text-[17px] font-semibold mb-[40px]
    bg-slate-500 text-white p-[10px] capitalize sm:text-[25px]'>CRUD APP WITH REDUX TOOLKIT</h2>
     <Posts/>
   </div>
  )
}

export default App