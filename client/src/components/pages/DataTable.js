import React, { Component } from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

export class DataTable extends Component{
    componentDidMount(){
        this.$el = $(this.el)
        this.$el.DataTable({
           data: this.props.data,
           columns: this.props.column
        })
    }
    render(){
        return (
        <div>
            <table className="display table table-striped table-hover" width="100%" ref={el => this.el=el}></table>
        </div>
        )
    }

}

export default DataTable;