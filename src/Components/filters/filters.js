import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './filters.css'
import { connect } from 'react-redux'
import { addFilter } from '../../store/actions/actions'

class Filters extends Component {
    state = {
        filters: this.props.data.map(el => { return { ...el, Liste: [] } })
    }
    render() {
        const addToFilter = (parentIndex, child) => {
            let testTable = this.state.filters
            testTable[parentIndex].Liste.push(child)
            this.setState({ filters: testTable })
        }
        return (
            <div className="filters">
                <Form>
                    {this.props.data.map((element, index) => {
                        return (
                            <div>
                                <Button>
                                    {element.Label}
                                </Button>
                                {element.Liste.map(element0 => {
                                    return (
                                        <Form.Check onChange={(e) => { addToFilter(index, element0) }} type="checkbox" label={element0} />


                                    )
                                })}
                            </div>
                        )
                    })}
                </Form>
                <Button onClick={()=>{this.props.addFilter(this.state.filters)}}> push filter</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilter: (filters) => dispatch(addFilter(filters))
    }
}
export default connect(null, mapDispatchToProps)(Filters)