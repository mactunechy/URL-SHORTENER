import React, { Component } from 'react';
import "./main.css"
import loader from './images/loader.gif'
import axios from 'axios'

const url = 'http://localhost:8000/api/create'

class Main extends Component {
    state = {
        longUrl : '',
        loading :false,
        showAlert: true,
        results : null
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let { longUrl} = this.state
        this.setState({ loading :  true,showAlert : false})
        axios.post(url,{longUrl}).then( res => {
            this.setState({ loading :  false,longUrl:''})
            let results = {
                error : false,
                shortUrl : res.data.shortUrl,
                className:'alert-light'
            }
            return this.setState({results,showAlert :true})

        })
        .catch( e => {
            this.setState({ loading :  false})
            console.log(e)
            let results = {
                error : true,
                className : 'aler-warning',
                message :'An error has occures please try again!'
            }
            return this.setState({results,showAlert : true})
        })

    }

    render(){
        let { loading,showAlert,results,longUrl } = this.state
        console.log(results)
        console.log(showAlert)
        return (
            <div className="row container-fluid justify-content-center " style={{height : '100%',paddingTop:'7%'}}>
                <h1 className="mb-5">Create a short link Here</h1>
                <form onSubmit={this.handleSubmit} className="form-inline col-md-12 col-10 justify-content-center">
                    <input 
                     required
                     className="form-control mr-sm-2"
                     type="text"
                     placeholder="Paste your link.."
                     name="longUrl"
                     onChange={ (e) => this.setState({longUrl : e.target.value })}
                     value={longUrl}
                     style ={{
                         height : '70px',
                         width : '500px'
                     }}
                      />
                    {loading ? (
                        <div >
                            <img 
                            src={loader}
                             alt="loader"
                             style={{
                                height : '68px',
                                width :'auto',
                                marginLeft:'20px'
                            }}
                              />
                        </div>
                    ): (
                        <button 
                    className="btn btn-secondary my-2 my-sm-0" 
                    type="submit"
                    style={{
                        height : '68px',
                        width :'120PX'
                    }}
                    >
                        Create
                    </button>
                    )}
                </form>
                <div className="col-md-6 mt-5 col-10">
                {
                    showAlert && results ? (
                        <div className={`alert alert-dismissible ${results.className}`} style={{height:'70px'}}>
                    <button type="button" className="close" onClick={ () => this.setState({showAlert : false })}>&times;</button>
                    {results.error ? (
                        <React.Fragrament>
                            <strong>Error!</strong> {results.message}
                        </React.Fragrament>

                    ) : (
                        <React.Fragment>
                            <strong>Success!</strong> Here is the short Link <a href={results.shortUrl} target="_blank" className="alert-link text-primary">{results.shortUrl}</a>
                        </React.Fragment>
                    )}
                    </div>
                    ) : null
                    
                }
                </div>
        </div>
        )
    }
}



export default Main