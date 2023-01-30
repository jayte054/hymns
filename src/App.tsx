/* eslint-disable react/no-direct-mutation-state */
import React, {Component} from 'react';
// import { ArrayBindingElement, ArrayBindingPattern } from 'typescript';
// import CardList from './components/card_list.component';
import './App.css';
import HymnList from './components/hymn_list.component';
import SearchBox from './components/search/search_box.component';

// class  App extends Component<{}, {hymns:any}> {
//   constructor(props:any) {
//     super(props)
//     this.state = {
//       hymns:[]
//     }

//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(songs => {
//       this.setState(() => {
//         return {hymns:songs}
//       })
//     })
//   }

//   render() {
//   return (
//     <div className="App">
//       <input className="search"
//               type="search"
//               placeholder="find hymn"
//               onChange={(e) => {
//                 console.log(e.target.value)
//                 // const searchString = e.target.value.toLocaleLowerCase()
//                 const filterednames = this.state.hymns.filter((hymn:any) => {
//                  return hymn.title.inlcudes(e.target.value)
//                 })
//                 this.setState(()=> {
//                   return {hymns:filterednames}
//                 })
//               }}
//       />
//      <h1>Hymn Titles</h1>
//      {this.state.hymns.map((hymn:any) => {
//       return <h2 key={hymn.id}>{hymn.title}</h2>
//      })}
//     </div>
//   );
// }
// }

// class App extends Component<{}, {hymns:any, searchField:any}>{
//   constructor(hymns:any) {
//     super(hymns)
//     this.state = {
//       hymns : [],
//       searchField:""
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(song => {
//       this.setState(() => {
//         return {hymns:song}
//       })
//     })
//   }

//   render() {
//     const filteredhymns = this.state.hymns.filter((hymn:any) => {
//       return hymn.title.includes(this.state.searchField)
//     })
//     return (
//       <div className="App">
//         <h1>Hymn Titles</h1>
//         <input className="search"
//                 type = "search"
//                 placeholder = "search"
//                 onChange = {e => {
//                   const searchField = e.target.value
//                   this.setState(()=> {
//                     return {searchField:searchField}
//                   })
//                 }}
//         />
//         {filteredhymns.map(((hymn:any) => {
//           return <h2 key ={hymn.id}>
//             {hymn.title}
//             </h2>
//         }))}
//       </div>
//     )
//   }
// }

// class App extends Component<{}, {hymns: any, searchField: any}>{

//   constructor(hymn:any) {
//     super(hymn)
//     this.state = {
//       hymns : [],
//       searchField: ""
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(song => {
//       this.setState(() => {
//         return {hymns: song}
//       })
//     })
//   }

//   searchForTitle = (e: any) => {
//     const searchField = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return {searchField:searchField}
//     })
//   }

//   render() {
//     const {hymns, searchField} = this.state
//     const {searchForTitle} = this
//     const filteredHymns = hymns.filter((hymn: any) => {
//       return hymn.title.includes(searchField)
//     })
    
//     return(
//       <div className="App">
//         <h1>Hymn Titles</h1>
//         <input className = "search"
//                 type="search"
//                 placeholder="search"
//                 onChange={searchForTitle}
//                 />
//           {filteredHymns.map((hymn:any) => {
//             return <h2 key={hymn.id}>{hymn.title}</h2>
//           })}
//       </div>
//     )
//   }
// }

// class App extends Component<{}, {hymns:any, searchField:any}>{
//   constructor(props:any) {
//     super(props)
//     this.state = {
//       hymns : [],
//       searchField : ""
//     }
//   }

//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then((songs: any) => {
//       this.setState(() => {
//         return {hymns : songs}
//       })
//     })
//   }

//    searchHymn = (e: any) => {
//     const searchString = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return {searchField:searchString}
//     })
//   }

//   render() {
//     const {hymns, searchField} = this.state
//     const {searchHymn} = this
//     const filteredHymns = hymns.filter((hymn:any) => {
//       return hymn.title.includes(searchField)
//     })
//     return(
//       <div className="App">
//         <h1>Hymn Titles</h1>
//         <input className = "search"
//                 type = "search"
//                 placeholder = "find hymn"
//                 onChange = {searchHymn}
//         />
//         {/* {filteredHymns.map((hymn:any) => {
//           return <h2 key={hymn.id}>{hymn.title}</h2>
//         })} */}
//         <CardList />
//       </div>
//     )
//   }
// }

// class App extends Component<{}, {hymns:any, searchField: any}>{
//   constructor(props:any) {
//     super(props)
//     this.state = {
//       hymns : [],
//       searchField : ""
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then((songs:any) => {
//      this.setState(() => {
//       return {hymns:songs}
//      })
//     })
//   }

//    searchHymn = (e:any) => {
//     const searchString = e.target.value.toLocaleLowerCase()
//       this.setState(() => {
//         return {searchField:searchString}
//       })
//   }

//   render() {
//     const {hymns, searchField} = this.state
//     const {searchHymn} = this 

//     const filteredHymns = hymns.filter((hymn: any) => {
//       return hymn.title.includes(searchField)
//     })
//     return(
//       <div className="App">
//         <h1>Hymn Titles</h1>
//         <input className ="search"
//                 type = "search"
//                 placeholder = "search"
//                 onChange={searchHymn}
//                 />
//           {/* {filteredHymns.map((hymn:any) => {
//             return <h2 key={hymn.id}>{hymn.title}</h2>
//           })} */}
//           <CardList hymns = {filteredHymns} />
//       </div>
//     )
//   }
// }

// class App extends Component<{}, {hymns:any, searchField:any}>{
//   constructor(props:any) {
//     super(props)
//     this.state= {
//       hymns: [],
//       searchField: ""
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(user => {
//       this.setState(() => {
//         return {hymns:user}
//       })
//     })
//   }

//   searchForHymn = (e: any) => {
//     const SearchString = e.target.value.toLocaleLowerCase()
//       this.setState(() => {
//         return {searchField:SearchString}
//       })
//   }

//   render() {
//     const {hymns, searchField} = this.state
//     const {searchForHymn} = this
//     const filteredHymns = hymns.filter((hymn:any)=> {
//        return hymn.title.includes(searchField)

//       })
  
//     return(
//       <div className="App">
//         <h1>Hymn Titles</h1>
         
//         <SearchBox className = "search"
//                     placeholder = "find Hymn"
//                     changeHandler = {searchForHymn}
//         />
//         <HymnList hymns = {filteredHymns}/>
//       </div>
//     )
//   }
// }

class App extends Component<{}, {hymns:any, searchField: string}>{
  constructor(props: any) {
    super(props)
    this.state ={
      hymns: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(song => {
      this.setState(() => {
        return {hymns : song}
      })
    })
  }

  SearchForHymn = (e: any) => {
    const searchString = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField: searchString}
    })
  }

  render () {
    const {hymns, searchField} = this.state
    const {SearchForHymn} = this
    const filteredHymns = hymns.filter((hymn: any) => {
      return hymn.title.toLocaleLowerCase().includes(searchField)
    })
    return(
      <div className = "App">
        <h1>Hymn Titles</h1>
        
        <SearchBox className = "search"
                  placeholder = "search"
                  changeHandler={SearchForHymn}
                  />
        <HymnList hymns = {filteredHymns}/>
      </div>
    )
  }

}

export default App;
