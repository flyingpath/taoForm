import React, { Component } from 'react' 
import _ from 'lodash' 
import styled from 'styled-components'
import { DatePicker } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.min.css'
import locale from './antLocale'

const { RangePicker } = DatePicker

class Datetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.data,
        }
        this.handleChange = this.handleChange.bind(this)
        this.firePreOnchange = this.firePreOnchange.bind(this)

        const nowM = moment()

        this.ouputData = {
            data: [
                {
                    start: nowM.format('YYYYMMDDHHmm'),
                    end: nowM.format('YYYYMMDDHHmm')
                }
            ]
        }
    }

    componentDidMount(){
        _.delay(this.firePreOnchange, 500)
    }

        // -- onChange 時送出資料
    firePreOnchange(){
        this.props.onChange(this.ouputData, this.props.order)
    }

    handleChange(value, dateString) {
        const withRange = this.props.withRange
        if(withRange){
            this.ouputData.data[0].start = moment(dateString[0], 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
            this.ouputData.data[0].end   = moment(dateString[1], 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        }else{
            this.ouputData.data[0].start = moment(dateString, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
            this.ouputData.data[0].end   = moment(dateString, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        }
        this.firePreOnchange()
    }

    render() {
        const data = this.data
        const label = this.props.label
        const withRange = this.props.withRange

        const OutterDiv = this.styledComponent.outterDiv
        const TitleDiv = this.styledComponent.titleDiv

        let dateComp = (
            <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm"
                placeholder="Select Time"
                onChange={this.handleChange}
                locale={locale}
            />
        )
        if(withRange){
            dateComp = (
                <RangePicker
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    onChange={this.handleChange}
                    locale={locale}
                />
            )
        }

        return (
            <OutterDiv>
                <TitleDiv>{label}</TitleDiv>
                {dateComp}
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
        `
    }
}

Datetime.defaultProps = {
    label: '姓名:',
    data: '',
    withRange: false,
    onChange: ()=>{}
}

export default Datetime