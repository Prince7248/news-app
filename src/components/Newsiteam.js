import React, { Component } from 'react'

export class Newsiteam extends Component {
  render() {
    let { title,description,imageUrl,newsUrl,author,date} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width:"15rem"}}>
        <img src={!imageUrl?"https://www.mediaite.com/wp-content/uploads/2024/10/Screenshot-2024-10-06-at-1.45.03%E2%80%AFPM.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title} <span class="badge badge-light">9</span></h5>
        <p className="card-text">{description}</p>
        <p class="card-text"><small className="text-muted">By {!author?"unkonw": author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
</div>
  
      </div>
    )
  }
}

export default Newsiteam
