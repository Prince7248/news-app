import React, { Component } from 'react'
import Newsiteam from './Newsiteam'
import { Spinner } from '../spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
      country: 'us',
      pageSize: 5,
      category: 'general',
    }
    static propTypes ={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }



    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }



        constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: true,
            page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} -- About news`;

    }


     async componentDidMount(){
      let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7e139481d4a425b99cc2863c04ff91f&page=1&pageSize=${this.props.pageSize}`;
      this.setState({settings:true})
      let data =  await fetch(url);
      let parsedDate  =await data.json()
      console.log(parsedDate);
      this.setState({articles:parsedDate.articles,
        totalResults:parsedDate.totalResults,
        settings:false
      
      
      })
  
    }

    handlePrevClick=async()=>{
      console.log("Previous");
      let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7e139481d4a425b99cc2863c04ff91f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data =  await fetch(url);
      this.setState({settings:true})
      let parsedDate  = await data.json()
      console.log(parsedDate);
      this.setState({
            page: this.state.page - 1,
            articles:parsedDate.articles,
            settings:false
      })

    }
    handleNextClick =async()=>{
      console.log("Next");
      if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
              let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7e139481d4a425b99cc2863c04ff91f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
              this.setState({settings:true})
              let data =  await fetch(url);
              let parsedDate  = await data.json()
              console.log(parsedDate);
              this.setState({
                page: this.state.page + 1,
                articles:parsedDate.articles,
                settings:false
          })

   
        }
  }



  render() {
    return (
      <div className='container my - 4'>
        <h1 className='text-center ' style={{margin:'27px 0px'}}>About News --Top Headline {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.settings && <Spinner/>}
        <div className='row'>
            { ! this.state.settings && this.state.articles.map((element)=>{
                return <div className='col-md-4'  key={element.url}>
                <Newsiteam  title={element.title?element.title.slice(0,45): " "} description={element.description?element.description.slice(0,45) :" "}imageUrl={element.urlToImage}
                   newsUrl={element.url}  author={element.author} date={element.publishedAt}/>
    
                </div>
                

            })}
            
             
        

        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  &larr;Previous</button>
        <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>

        </div>
         
       



      </div>
    )
  }
}

export default News
