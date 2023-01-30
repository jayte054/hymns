import {Component} from "react"
import "./hymnlist.css"

// class CardList extends Component{
//     render() {
//         return(
//             <div>
//                 <p>I am a list of cards</p>
//             </div>
//         )
//     }
// }

// class CardList extends Component<{hymns:any}>{
//     render() {
//         const {hymns} = this.props
//         return(
//             <div>
//                {hymns.map((hymn:any) => {
//                 return <h2 key={hymn.id}>{hymn.title}</h2>
//                })}
//             </div>
//         )
//     }
// }

// class HymnList extends Component<{hymns:any}>{
//     render() {
//         const {hymns} = this.props
//         return(
//             <>
//                 {hymns.map((hymn:any) => {
//                     return <h2 key={hymn.id}>{hymn.title}</h2>
//                 })}
//             </>
//         )
//     }
// }

class HymnList extends Component<{hymns: any}>{
    render() {
       const {hymns} = this.props
        return(
            <div className="hymn-list">
            {hymns.map((hymn: any) => {
       const {id, title} = hymn

                return (
                <div className="hymn-Container" key={id}>
                <img src = {`https://robohash.org/${id}?set=set5&size200%C3%97200`}
                        alt = {`hymn, ${title}`}
                />
                <h2>{title}</h2> 
                </div>
            )})}
            </div>
        )
    }
}

export default HymnList