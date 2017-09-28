import React, { Component } from 'react' 
import _ from 'lodash' 
import styled from 'styled-components'
import Select from 'react-select'
import 'react-select/dist/react-select.min.css'

class SelectAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: [],
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

    handleChange(value) {
        this.ouputData.data = [value]
        this.setState({
            value: value
        })
        this.firePreOnchange()
    }

    render() {
        const data = this.props.data
        const label = this.props.label
        const OutterDiv = this.styledComponent.outterDiv
        const TitleDiv = this.styledComponent.titleDiv
        const InputText = this.styledComponent.inputText
        
        return (
            <OutterDiv>
                <TitleDiv>{label}</TitleDiv>
                <Select.Creatable
                    multi={true}
                    options={data}
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    style={{minWidth: '80px'}}
                />
            </OutterDiv>
        )
    }

    styledComponent = {
        outterDiv: styled.div`
            padding: 5px;
            font-family: 標楷體;
            align-items: center;
            display: flex;
            align-items: center;
        `,
        titleDiv: styled.div`
            font-size: 110%;
            margin-bottom: 5px;
            margin-right: 5px;
        `,
        inputText: styled.input`
            max-width: 120px;
        `,
    }
}

SelectAdd.defaultProps = {
    label: '家族病史:',
    data: [
        { value: 'cancer', label: '癌症' },
        { value: 'hyperBlood', label: '高血壓' },
        { value: 'sugar', label: '糖尿病' },
        { value: 'heartBlood', label: '心血管' }
    ],
    onChange: ()=>{}
}

export default SelectAdd