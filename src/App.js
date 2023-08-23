import { Checkbox } from "@material-tailwind/react";
import React, { useState, useRef } from 'react';
import './App.css';
import { Select, Option } from "@material-tailwind/react";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function App() {

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionL, setSelectedOptionL] = useState(null);
  const [selectedOptionR1, setSelectedOptionR1] = useState(null);
  const [selectedOptionR2, setSelectedOptionR2] = useState(null);
  const [selectedOptionR3, setSelectedOptionR3] = useState(null);

  const handleCheckboxChange = (index) => {
    setSelectedOption(index === selectedOption ? null : index);
  };
  const handleCheckboxChangeL = (index) => {
    setSelectedOptionL(index === selectedOptionL ? null : index);
  };
  const handleCheckboxChangeR1 = (index) => {
    setSelectedOptionR1(index === selectedOptionR1 ? null : index);
  };
  const handleCheckboxChangeR2 = (index) => {
    setSelectedOptionR2(index === selectedOptionR2 ? null : index);
  };
  const handleCheckboxChangeR3 = (index) => {
    setSelectedOptionR3(index === selectedOptionR3 ? null : index);
  };

  const MCQoptions = ['Option 1', 'Option 2', 'Option 3'];
  const Lineroptions = ['1', '2', '3','4','5'];

  return (
    <div className="App">
      <header className="App-header items-center ">
        <div className='rounded-lg bg-purple-800 items-right justify-start lg:w-1/2 sm:w-[80%] text-black pt-2 mb-4 mt-4'>
          
          <div className='bg-white rounded-b p-4'>
           <span className='text-[30px]'>Assignment Task</span> 
            <hr className='mt-3'/>
            <div className='  flex flex-col mt-2'>
            <span className='mb-2 text-[14px] text-gray-700 font-bold'>Example@gmail.com <span className="text-blue-700 font-normal">Switch accounts</span></span>
            <span className='text-[14px] text-gray-600'>The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Your email address is not part of your response.</span>
            </div>
           
            <hr className='mt-3'/>
           <span className='text-red-600 text-[13px] mt-3'>* Indicates required question</span> 
          </div>
        </div>
        
        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
          <div className='text-[15px] mb-3'>
              MCQ <span className="text-red-600">*</span>
          </div>
          <div className='text-[14px]'>
          {MCQoptions.map((item, index)=>
          <p className="items-center  flex">  <Checkbox  checked={selectedOption === index}
          onChange={() => handleCheckboxChange(index)} color="purple" className="rounded-full  active:bg-white  focus:bg-white bg-white focus:outline-none checked:bg-white "
          icon={
            <svg width="99px" height="99px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a23ad9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#a23ad9"></path> </g></svg>}
            
        />{item}</p>)}
          
          </div>
        </div>
        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
          <div className='text-[15px] mb-3'>
              Checkbox <span className="text-red-600">*</span>
          </div>
          <div className='text-[14px]'>
         {MCQoptions.map(item=><p className="items-center  flex">  <Checkbox color="purple"   />{item}</p>)}
         
          </div>
          
        </div>
        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
          <div className='text-[15px] mb-3'>
              Short Answer <span className="text-red-600">*</span>
          </div>
          <div className='text-[14px]'>
          <input className="border-b-2 focus:border-b-3 w-1/2 border-gray-300 focus:outline-none focus:border-purple-900" />

          </div>
          
        </div>
        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
          <div className='text-[15px] mb-3'>
              ParaGraph <span className="text-red-600">*</span>
          </div>
          <div className='text-[14px]'>
          <input className="border-b-2 focus:border-b-3 w-full border-gray-300 focus:outline-none focus:border-purple-900" />

          </div>
          
        </div>
        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
        <div className='text-[15px] mb-3'>
              Drop down <span className="text-red-600">*</span>
          </div>
        <div className="w-1/5 rounded-0">
      <Select label="Choose" className="justify-center items-center flex rounded-0">
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
      </Select>
    </div>
          
        </div>
        

        <div className='rounded-lg bg-white items-end justify-start lg:w-1/2 sm:w-[80%] text-black p-4 mb-4'>
  <div className='text-base mb-6 '>
    File upload <span className="text-red-600">*</span>
  </div>
  <div className='text-sm '>
        <button
          type="button"
          className=" p-1 px-3 border-2 focus:border-b-3 border-gray-300 focus:outline-none focus:border-gary-300"
          onClick={handleButtonClick}
        >
        <FileUploadOutlinedIcon className="text-xs text-blue-700"/> <span className="text-xs text-blue-800">Add file</span> 
        </button>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          accept=".pdf,.doc,.docx,.txt"
        />
      </div>
</div>




        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
        <div className='text-base mb-6 '>
             Linear scale <span className="text-red-600">*</span>
           </div>
        <div className="w-full text-sm flex justify-between">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        
       {Lineroptions.map(item=><p>{item}</p>)}
        <p>&nbsp;&nbsp;</p>

         </div>
         <div className="w-full text-sm flex justify-between items-center">
        <p>worst</p>
        
       {Lineroptions.map((item, index)=><Checkbox  checked={selectedOptionL === index}
          onChange={() => handleCheckboxChangeL(index)} color="purple" className="rounded-full active:bg-white focus:bg-white bg-white focus:outline-none checked:bg-white "
      icon={
        <svg width="99px" height="99px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a23ad9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#a23ad9"></path> </g></svg>}
      
    />)}
        <p>best</p>

         </div>
          
        </div>

        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
        <div className='text-base mb-6 '>
             Multi choise Grid <span className="text-red-600">*</span>
           </div>
        <div className="w-full text-sm flex justify-between">
        
        <p>&nbsp;&nbsp;&nbsp;&nbsp; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Column 1</p>
        <p>Column 2</p>
        <p>Column 3</p>
        

         </div>
         <div className="bg-gray-100 mb-1 mt-2 w-full text-sm flex justify-between items-center">
        
        
       <p className="ml-4  sm:mr-12 lg:mr-20 ">Row 1</p>
       {MCQoptions.map((item,index)=>
            <Checkbox checked={selectedOptionR1 === index}
            onChange={() => handleCheckboxChangeR1(index)} color="purple" className="rounded-full active:bg-white focus:bg-white bg-white focus:outline-none checked:bg-white "
          icon={
            <svg width="99px" height="99px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a23ad9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#a23ad9"></path> </g></svg>}
          
        />)}
          
       

         </div>
         <div className="bg-gray-100 w-full mb-1 text-sm flex justify-between items-center">
        
        
       <p className=" ml-4  sm:mr-12 lg:mr-20">Row 2</p>
       {MCQoptions.map((item,index)=>
            <Checkbox checked={selectedOptionR2 === index}
            onChange={() => handleCheckboxChangeR2(index)} color="purple" className="rounded-full active:bg-white focus:bg-white bg-white focus:outline-none checked:bg-white "
          icon={
            <svg width="99px" height="99px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a23ad9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#a23ad9"></path> </g></svg>}
          
        />)}
       

         </div>
         <div className="bg-gray-100 mb-2 w-full text-sm flex justify-between items-center">
        
        
       <p className=" ml-4  sm:mr-12 lg:mr-20">Row 3</p>
       {MCQoptions.map((item,index)=>
            <Checkbox checked={selectedOptionR3 === index}
            onChange={() => handleCheckboxChangeR3(index)} color="purple" className="rounded-full active:bg-white focus:bg-white bg-white focus:outline-none checked:bg-white "
          icon={
            <svg width="99px" height="99px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a23ad9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#a23ad9"></path> </g></svg>}
          
        />)}

         </div>
          
        </div>


        <div className='rounded-lg bg-white items-right justify-start bg-white lg:w-1/2 sm:w-[80%] text-black  p-4 mb-4'>
        <div className='text-base mb-6 '>
             Tick box grid <span className="text-red-600">*</span>
           </div>
        <div className="w-full text-sm flex justify-between">
        
        <p>&nbsp;&nbsp;&nbsp;&nbsp; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Column 1</p>
        <p>Column 2</p>
        <p>Column 3</p>
        

         </div>
         <div className="bg-gray-100 mb-1 mt-2 w-full text-sm flex justify-between items-center">
        
        
       <p className=" ml-4 sm:mr-12 lg:mr-20 ">Row 1</p>
       {MCQoptions.map(item=><Checkbox color="purple" />)}
       

         </div>
         <div className="bg-gray-100 w-full mb-1 text-sm flex justify-between items-center">
        
        
       <p className="ml-4  sm:mr-12 lg:mr-20 ">Row 2</p>
       {MCQoptions.map(item=><Checkbox color="purple" />)}
       

         </div>
         <div className="bg-gray-100 mb-2 w-full text-sm flex justify-between items-center">
        
        
       <p className="ml-4  sm:mr-12 lg:mr-20 ">Row 3</p>
       {MCQoptions.map(item=><Checkbox color="purple"  />)}
       

         </div>
          
        </div>

        <div className=" items-right justify-start  items-center justify-between flex lg:w-1/2 sm:w-[80%] text-black  mb-4">
          <button className="bg-purple-800 text-white text-xs font-bold rounded py-2 px-6">Submit</button>
          <div className="flex items-center justify-center ">
           <hr className="h-[8px] w-[150px] rounded-full bg-green-600 mr-3"/>
           <p className="text-xs">Page 1 of 1</p>
          </div>
          <p className="text-purple-600 text-xs ">Clear form</p>
        </div>
       <p className="items-right justify-start text-xs  items-center justify-between flex lg:w-1/2 sm:w-[80%] text-gray-600  mb-4">Never submit passwords through Google Forms.</p>
       <p className=" text-xs  items-center justify-center flex lg:w-1/2 sm:w-[80%] text-gray-600  mb-4">
        This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
        <p className="   items-center justify-center flex lg:w-1/2 sm:w-[80%] text-gray-600  mb-4">
        Google Forms</p>
      </header>
    </div>
  );
}

export default App;
