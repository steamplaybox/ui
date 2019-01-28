import React from 'react';
import './welcome.scss';
import fetchData from '../../helpers/fetchData';

export default class WelcomePage extends React.Component {
  constructor() {
    super();
    this.searchTerm = this.searchTerm.bind(this);
  }
  searchTerm(e) {
    let result = fetchData('https://randomuser.me/api/', '').then(
      data => console.log(data)
    );
  }
  render() {
    return (
      <React.Fragment>
      <div className='pb--welcome-page-searchbox'>
        <input type="text" id='pb--welcome-page-searchbar' placeholder="steam name.."/>
      </div>
      </React.Fragment>
    );
  }
}