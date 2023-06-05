import './App.css';
import React, { useEffect } from 'react';
import { Extract } from 'langsync'
import { languages } from './languages'

function App() {

  //main code from translation---only this code you required
  const extractor = async (e) => {
    
    document.getElementById("fiels").innerHTML = "Loading........... (only print below 5000 characters)";

    //this is for knowing in which language you want to convert
    const outputLanguage = document.getElementsByClassName("selected")[0].dataset.value;
    const file = e.target;

    //this is where i call fileTranslate method
    // extract.fileTranslate(outputLanguage, file.files[0]).then((data)=>{
    //   document.getElementById("fiels").innerHTML = data.result;
    // });
    const fileContent=await Extract.fileTranslate(outputLanguage,file.files[0]);
    document.getElementById("fiels").innerHTML = fileContent.result;
  }


  //---------below all code is for just for look cool in fronted side----------

  //populate all langagues in dropdown
  function populateDropdown(options) {
    document.querySelector("#input-language").querySelector("ul").innerHTML = "";
    options.forEach((option) => {
      const li = document.createElement("li");
      const title = option.name + " (" + option.native + ")";
      li.innerHTML = title;
      li.dataset.value = option.code;
      li.classList.add("option");
      document.querySelector("#input-language").querySelector("ul").appendChild(li);
    });
  }

  //when page rendered then it is of calling populate langagues in drop down
  useEffect(() => {
    populateDropdown(languages);
  }, [])


  //after clicking select one of language 
  const toggle = () => {
    const dropdown = document.getElementsByClassName("dropdown-container");
    console.log(dropdown[0].classList.contains('active'))
    if (dropdown[0].classList.contains('active')) dropdown[0].classList.remove('active');
    else dropdown[0].classList.add("active");

    dropdown[0].querySelectorAll(".option").forEach((item) => {
      item.addEventListener("click", (e) => {
        //remove active class from current dropdowns
        dropdown[0].querySelectorAll('.option').forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        const selected = document.getElementsByClassName("selected");
        selected[0].innerHTML = item.innerHTML;
        selected[0].dataset.value = item.dataset.value;

      });
    });

  }

  return (
    <div className="App">
      <div className="contains">
        <input type="file" id="upload-document" onChange={(e) => extractor(e)} />
        <div className="dropdown-container" id="input-language" onClick={toggle}>
          <div className="dropdown-toggle">
            <span className="selected" data-value="auto">choose languages</span>
          </div>
          <ul className="dropdown-menu">
            <li className="option active">DropDown Menu Item 1</li>
            <li className="option">DropDown Menu Item 2</li>
          </ul>
        </div>
      </div>
      <div className="textExtract">
        <textarea name="textarea" id="fiels" cols="80" rows="20"></textarea>
      </div>
    </div>
  );
}

export default App;
