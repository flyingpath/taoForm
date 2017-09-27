import React, { Component } from 'react'
import _ from 'lodash'

import Checkboxes from './Checkboxes'
import Textbar from './Textbar'

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

    dataset = [
        {
            value:"stinSheet",
            name: "針扎單",
            component: "",
            data:[],
            order: [0],
            children: [
                {
                    value:"empInfo",
                    name: "員工資料",
                    children: [
                        {
                            value: "empName",
                            name:"姓名",
                            component: 'textbar',
                            children:[],
                            data: [],
                            order: [0,0,0],
                        },
                        {
                            value: "eventDate",
                            name:"發生時間",
                            component: 'textbar',
                            children:[],
                            data:[],
                            order: [0,0,1],
                        }
                    ],
                    component: '',
                    data: [],
                    order: [0,0],
                },
                {
                    value:"stinEvent",
                    name: "針扎事件",
                    children: [
                        {
                            value:"objectType",
                            name:"扎傷物種類",
                            component: 'checkboxesWithOtherWithMemo',
                            children:[],
                            data:[
                                {
                                    value:"generalStin",
                                    name:"一般注射針頭",
                                },
                                {
                                    value:"knife",
                                    name:"手術刀",                                    
                                }
                            ],
                            order: [0,1,0],
                        },
                        {
                            value:"objectUse",
                            name:"尖銳物用途",
                            component: 'checkboxesWithOtherWithMemo',
                            children:[],
                            data:[
                                {
                                    value:"generalStin",
                                    name:"一般注射針頭",
                                },
                                {
                                    value:"knife",
                                    name:"手術刀",                                    
                                }
                            ],
                            order: [0,1,1],
                        }
                    ],
                    component: "",
                    data:[],
                    order: [0,1],
                },
            ]
        }
    ]

    render() {
        return (
            <div>
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
            default:
                return <div key={key}>
                       </div>
        }
    }

    makeTaoFormUni(data, preName){
        if (data.children.length>0){
            return (
                <div key= {data.name+preName}>
                    <h1>{data.name}</h1>
                    {
                        _.map(
                            data.children,
                            (eachdata)=>{
                                return this.makeTaoFormUni(eachdata, data.name)
                            }
                        )
                    }
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
                    order: data.order
                }
            )
        }
        
    }
    
    makeTaoForm(dataSet){
        return (
            this.makeTaoFormUni(dataSet[0], 'root')
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