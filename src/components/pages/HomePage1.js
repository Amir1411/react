import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class HomePage extends Component {
  	state = {
		showList: false,
		list: ""
	}
	onChange = e => {
		let file = e.target.files[0];
	    let formData = new FormData();
	    formData.append('file', file);
		axios.post("http://localhost:3001/user/uploadFile", formData).then(res => {
			let responseData = res.data.response;
			let listItem = '<div class="media text-muted pt-3">\
				<div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">\
					<div class="d-flex justify-content-between align-items-center w-100">\
						<strong class="text-gray-dark">'+responseData.content+'</strong>\
						<a href="#">X</a>\
					</div>\
				</div>\
			</div>';
			this.setState({showList: true});
			this.setState({list: listItem});
			// e.target.value = null;
		});
	};
	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="container">
						<form>
							<div className="form-group">
								<label for="exampleFormControlFile1">Example file input</label>
								<input 
								type="file" 
								className="form-control-file uploadFile" 
								id="exampleFormControlFile1" 
								onChange={this.onChange} 
								/>
							</div>
						</form>
					</div>
				</div>
				{this.state.showList && <div className="container showList">
					<div className="my-3 p-3 bg-white rounded shadow-sm">
						<h6 className="border-bottom border-gray pb-2 mb-0">Your uploaded data</h6>
						<div dangerouslySetInnerHTML={{__html: this.state.list}}></div>
					</div>
				</div>}
			</div>
		);
	}
}

export default HomePage;
