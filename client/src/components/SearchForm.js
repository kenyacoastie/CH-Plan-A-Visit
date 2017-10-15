import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return(
      <article>
        <h1>Search the Collection</h1>
        <form
          onSubmit={this.props.handleSubmit}
        >
          <input
            className='inputSearchForm'
            type='text'
            value={this.props.inputSearchValue}
            placeholder='Enter your keyword'
            onChange={this.props.handleInputSearchOnCahnge}
          />
          <button className='bottonSearchForm' id='submit'>Search</button>
        </form>
        {this.props.objects.map((object) => {
            return(
              <div className='results'>
              <div className='resultsLeft'>
                <h3 className='resultsTitle'>
                  <a href={object.url} target='_blank'>{object.title}</a>
                </h3>
                {object.images.map((img) => {
                  return(
                    <div className='imgSearchedWraper'>
                      <img width='100%' src={img.b.url} alt='object searched' />
                    </div>
                  )
                })}
                </div>
                <div className='resultsRight'>
                <button
                  className='buttonFormAdd'
                  onClick={(itleExh, urlImg, urlExh) => {
                    this.props.handleAddItem(
                      object.title,
                      object.images[0].b.url,
                      object.url
                      )}
                  }
                >add</button>
              </div>
              </div>
              )
          })}
      </article>

    )
  }
}

export default SearchForm;
