import { Link } from "react-router-dom";

function ReservationInfo({info}){

  const maskingName = (name) => {
    if(name.length <= 2){     
      return name.replace(name.substring(1),"*");
    };
    return name[0] + "*".repeat(name.substring(1,name.length -1).length) + name[name.length -1] ;
  };

  const maskingNumber = (num) => {
    return num.substring(0,3) + "*".repeat(4) + num.substring(7,11) 
  };

  return(
    <tr>
      <td>{info.id}</td>
      <td>
        <Link to={`/post/${info.id}`}>
          {maskingName(info.name)}
        </Link>
      </td>
      <td>{maskingNumber(info.phone)}</td>
    </tr>           
  )
}

export default ReservationInfo;