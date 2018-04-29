import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import { Target } from 'react-popper';
import {uploadFile} from '../../actions/index';
import DataTable from './DataTable';
import dateformat from 'dateformat';
import {Row, Col } from 'reactstrap';

class Dashboard extends Component {
  constructor(props){
    super(props)
   
    this.state ={
      
      FileDetails: []
    }
    this.click= this.click.bind(this)
  }
  componentWillReceiveProps(nextProps){
    // console.log("nextProps",nextProps.fileData.data.allFilesDetail); return false;
    let fileData = []
    nextProps.fileData.data.allFilesDetail.forEach((element,index) => {
      // console.log("nextProps",element); return false;
      fileData[index] = [element.fileName,element.uploader,dateformat(element.updatedAt, "mmm dd, yyyy")]
  })
  this.setState({FileDetails: fileData})
  }
  click(e){
    this.setState({file:e.target.files[0]})
    this.props.uploadFile({file:e.target.files[0]})
  }
  render() {
    // console.log(this.props.fileData)
    return (<div>
<Row>
<Col xs={3} md={3}>
     <p>Project Files</p>
     </Col>
     <Col  xs={3} md={3}>
     <p>Name of the current folder</p>
     </Col>
<Col  xs={3} md={3}>
        <FormGroup>
          <Input type="text" name="folderName" placeholder="create new folder"/>
        </FormGroup> 
    </Col>

     <Col  xs={3} md={3}>
        <FormGroup>
          <Input  type="file" name="filePath" onChange={this.click} />
          
        </FormGroup> 
    </Col>
</Row>      

        {this.state.FileDetails.length && <DataTable data={this.state.FileDetails} column={this.column}/>}       
      </div>);
  }
  column = [
    { title: "File Name" },    
    { title: "Owner" },
    { title: "Last modified date" },
    
  ]
}

function mapStateToProps(state) {
  return {
    
    fileData: state.user.fileData
    // fileData: state.fileData
  };
}

export default connect(mapStateToProps, {uploadFile})(Dashboard);
