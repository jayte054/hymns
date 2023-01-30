import {Component} from "react"
import "./search_box.css"

// class SearchBox extends Component<{changeHandler:any, placeholder:any, className:any}>{
//     render() {
//         const {className, placeholder, changeHandler} = this.props
//         return(
//             <>
//                  <input className = {className}
//                   type = "search"
//                   placeholder = {placeholder}
//                   onChange = {changeHandler}
//                     />
//             </>
//         )
//     }
// }

class SearchBox extends Component<{className:any, placeholder: any, changeHandler: any}>{
    render() {
        const {className, placeholder, changeHandler} = this.props
        return(
            <div className = "search-box">
                 <input className={className}
                        placeholder = {placeholder}
                        type = "search"
                        onChange = {changeHandler}
                />
            </div>
               
        )
    }
}

export default SearchBox