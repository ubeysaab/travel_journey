
import "./Jorney.css"
export default function Jorney(props) {
  // if (props.startDate > props.endDate) {
  //   let tem = props.startDate;
  //   props.startDate = props.endDate;
  //   props.endDate = tem;

  // }

  // console.log(tem)

//  console.log(props.endDate.toLocaleDateString())
//  console.log(props.startDate.toString() > props.endDate.toString())

let isBigger = props.startDate.getFullYear() > props.endDate.getFullYear();
  return (
    
    <div className="jorneyCon">
      <img src={props.imgUrl} alt="" className="postImg" />
      <div className="textCon">
  
        <div className="informations">
         <div className="logoCon">
          {/* <img src="../public/images/placeholder.png" alt="" className="logo" /> */}
         </div>
          <h4 >{props.location}</h4>
         {/* <h3> {props.key == 1 && ( "im number one")}</h3> */}

          <a className="link" href=""> View on Google Maps</a>

        </div>
        <h1 className="title"> {props.title} </h1>

    

        {isBigger ?
          <h4 className="date">
            {
               props.endDate.toLocaleDateString() +"  -  "+ props.startDate.toLocaleDateString()
            }
          </h4> : 
          <h4 className="date">
            {
               props.startDate.toLocaleDateString() +"  -  "+ props.endDate.toLocaleDateString()
            }
          </h4>  
        
        
        }
       
        <p>{props.desc}</p>
      </div>

    </div>
  )


}