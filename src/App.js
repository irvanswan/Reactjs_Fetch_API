import './App.css';
import React, { Component } from "react";//class component dari react

class App extends Component {
state ={
  data: []
}
componentDidMount(){// tahap setelah component di render. pada tahap ini proses pemanggilan ajax dan perubahan isi state setelah proses ajax di panggil.
  const urlFetch = fetch('http://jsonplaceholder.typicode.com/photos');
  urlFetch.then(res => {
      if( res.status === 200 )
          return res.json()
  }).then( resJson => {
      this.setState({
          data: resJson 
      })
  })
}
render(){
  return (
    <div className="App">
    <p>2. Fetch Data Dari API, Kemudian Kalian Tampilkan data tersebut memakai html, Saya menggunakan Fetch</p>
    <div class='card card-body'>
    <table class='table table-hover'>
      <thead>
        <tr>
          <th>Album Id</th>
          <th>Id</th>
          <th>Judul</th>
          <th>Image</th>
          <th>ThumbNail</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map((item,index)=>{
            return (
              <tr>
              <td>
                <span>{item.albumId}</span>
              </td>
              <td>
                <span>{item.id}</span>
              </td>
                <td width='100'>
                  <p>{item.title}</p>
                </td>
                <td>
                  <img src={item.url} width='100'/>
                </td>
                <td>
                  <img src={item.thumbnailUrl} width='100'/>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      </div>
    </div>
  )
  }
}

export default App;
