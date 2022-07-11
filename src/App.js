import { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    console.log('Hello from Contructor')
    this.state = {
      giffy: []
    }
  }

  componentDidMount() {
    console.log('Hello from Component did mount')

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=kcZXEZbYiUw8B0PNOUcO1FIayqcbA54q&limit=25&rating=g')
      .then(response => response.json()) // parse the request
      // .then(json => console.log(json));
      .then(giffyData => this.setState({ giffy: giffyData.data })) // get the data
  }

  componentDidUpdate() {
    console.log('Hello from component did update')
  }

  render() {
    console.log('Hello from Render')
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        {this.state.giffy.map(data => <img src={data.images.original.url}/>)}
      </div>
    )
  }
}

export default App