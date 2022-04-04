import './style.css';

const Tabs = props =>{
    return (
     <div  className="tab-cotainer">
         {/*Tab header*/}
           <div className="tab-header flex">
               <a className="active" href="#commercial">
                   Commercial
               </a>
               <a href="#freeLicense">
                   Free License
               </a>
           </div>
        {/*Tab Content*/}
           <div className="tab-contents"> 
              <div className="tab-content" id="commercial"> 
                <div className="Content-wrapper flex justify-sb m-20">
                    <div className="content-item">
                       <img />
                    </div>
                    <div className="content-item">
                       <img />
                    </div>

                </div>
               </div>
               <div className="tab-content" id="freeLicense"> 
                Free Licence
               </div>
              
           </div>
     </div>
         );
}
export default Tabs;