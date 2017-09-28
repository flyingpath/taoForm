import React, { Component } from 'react'
import _ from 'lodash'

import Checkboxes from './Checkboxes'
import Textbar from './Textbar'
import Datetime from './Datetime'
import Textfield from './Textfield'
import SelectAdd from './SelectAdd'

import dataset from './data'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.outputData = []
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.outputData = this.makeOutputData(this.dataset)
    }

    onChange(data, order){
        let item = this.outputData
        
        for ( let i=0; i<order.length; i++){
            if(i == order.length-1){
                item = item[order[i]]
            }else{
                item = item[order[i]].children
            }
        }
        item.data = data
        console.log(this.outputData);
    }

    dataset = dataset

    render() {
        return (
            <div style={{padding: '0px 40px', fontFamily:'標楷體'}}>
                {this.makeTaoForm(this.dataset)}
            </div>
        )
    }

    returnComponent({comp, data='', title, onChange, key, order}){
        switch(comp){
            case 'textbar':
                return <Textbar 
                            data = {data} 
                            label={title} 
                            onChange={onChange}
                            order = {order}
                            key={key}
                        />
            case "checkboxesWithOtherWithMemo":
                return <Checkboxes 
                            data = {data} 
                            label={title} 
                            onChange={onChange}
                            withOther
                            withMemo
                            key={key}
                            order = {order}
                        />
            case "checkboxes":
                return <Checkboxes 
                            data = {data} 
                            label={title} 
                            onChange={onChange}
                            key={key}
                            order = {order}
                        />
            case "checkboxesUni":
                return <Checkboxes 
                            data = {data} 
                            label={title} 
                            onChange={onChange}
                            uni
                            key={key}
                            order = {order}
                        />                                
            case "datetime":
                return <Datetime 
                            label={title} 
                            key={key}
                            order = {order}
                            onChange={onChange}
                        />
            case "textfield":
                return <Textfield
                            label={title} 
                            key={key}
                            order = {order}
                            onChange={onChange}
                        />
            case "selectadd":
                return <SelectAdd
                            label={title} 
                            key={key}
                            order = {order}
                            onChange={onChange}
                        />                        
            default:
                return <div key={key}>
                       </div>
        }
    }

    makeTaoFormUni(data, preName, preOrder){
        if (data.children.length>0){

            const hStyle = (preOrder.length==1)?{
                fontSize: '40px', 
                textAlign: 'center'
            }: null

            return (
                <div key= {data.name+preName}>
                    <h1 style={hStyle}>{data.name}</h1>
                    <div>
                    {
                        _.map(
                            data.children,
                            (eachdata, idx)=>{
                                let order = preOrder.slice()
                                order.push(idx)
                                return this.makeTaoFormUni(eachdata, data.name, order)
                            }
                        )
                    }
                    </div>
                </div>
            )
        }else {
            return this.returnComponent(
                {
                    comp: data.component, 
                    data: data.data, 
                    title: data.name, 
                    onChange: this.onChange,
                    key: data.name+preName,
                    order: preOrder
                }
            )
        }
        
    }
    
    makeTaoForm(dataSet){
        return (
            this.makeTaoFormUni(dataSet[0], 'root', [0])
        )
    }

    makeOutputData(dataSet){
        const data = _.map(dataSet, (eachdata)=>{
            return {
                name: eachdata.name,
                value: eachdata.value,
                data: [],
                children: this.makeOutputData(eachdata.children)
            }
        })

        return data
    }
}

export default Home