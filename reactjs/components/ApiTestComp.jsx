import React from "react"

export default class ApiTestComp extends React.Component {
  render() {
      let {result} = this.props;
      let nodes = []
      for(let key in result){
        if (result.hasOwnProperty(key)) {
            nodes.push(
                <div key={key}>
                    <p>Email: {result[key].email}</p>
                    <p>URL: {result[key].url}</p>
                    <p>Username: {result[key].username}</p>
                    <p>Groups: not provided</p>
                    <hr/>
                </div>
            )
        }
      }
      return (
          <div>
              {nodes}
          </div>
      )
    }
}