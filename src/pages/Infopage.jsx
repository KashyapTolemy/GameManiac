import { useParams } from "react-router-dom"
import data from "../mock.json"
import "../App.css"
export default function Infopage({slides}){
    // console.log(name);
    const params = useParams();
    const info = data[params.id]
  return (
    <div className="text">
      {info.name}
    </div>
  )
}

