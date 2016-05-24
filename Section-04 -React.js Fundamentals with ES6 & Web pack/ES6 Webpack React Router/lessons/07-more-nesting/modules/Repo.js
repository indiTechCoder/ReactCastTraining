import React from 'react'

const app =  function(props) {
  render() {
    return (
      <div>
           <h2>{this.props.params.repoName}</h2>
           <h2>{this.props.params.userName}</h2>
      </div>
    )
  }
}
export default app ;
