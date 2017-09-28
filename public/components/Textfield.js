import React, { Component } from 'react' 
import _ from 'lodash' 
import styled from 'styled-components'

class Textfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.data,
        }
        this.handleChange = this.handleChange.bind(this)
        this.firePreOnchange = this.firePreOnchange.bind(this)
        this.ouputData = {
            data: [],
        }
    }

    componentDidMount(){
        _.delay(this.firePreOnchange, 500)
    }

        // -- onChange 時送出資料
    firePreOnchange(){
        this.props.onChange(this.ouputData, this.props.order)
    }

    handleChange(e) {
        const v = e.target.value 
        this.ouputData.data = [v]
        this.setState({
            value: v
        })
        this.firePreOnchange()
    }

    render() {
        const data = this.data
        const label = this.props.label
        const OutterDiv = this.styledComponent.outterDiv
        const TitleDiv = this.styledComponent.titleDiv
        const Textarea = this.styledComponent.textarea
        
        return (
            <OutterDiv>
                <div className='optionTitleLabel'>{label}</div>
                <Textarea 
                    value = {this.state.value}
                    onChange = {this.handleChange}
                />
            </OutterDiv>
        )
    }

    styledComponent = {
        outterDiv: styled.div`
            padding: 5px;
            font-family: 標楷體;
        `,
        titleDiv: styled.div`
            font-size: 110%;
            margin-bottom: 5px;
            margin-right: 5px;
        `,
        textarea: styled.textarea`
        `,
    }
}

Textfield.defaultProps = {
    label: '姓名:',
    data: '',
    onChange: ()=>{}
}

export default Textfield