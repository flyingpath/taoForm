import _ from 'lodash'

const data = [
    {
        value:"stinSheet",
        name: "針扎單",
        component: "",
        data:[],
        children: [
            {
                value:"empInfo",
                name: "員工資料",
                children: [
                    {
                        value: "empName",
                        name:"姓名",
                        component: 'selectadd',
                        children:[],
                        data: [],
                    },
                    {
                        value: "empDept",
                        name:"部門",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "empTitle",
                        name:"職稱",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "eventPlace",
                        name:"發生地點",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "eventDate",
                        name:"發生時間",
                        component: 'datetime',
                        children:[],
                        data:[],
                    }
                ],
                component: '',
                data: [],
            },
            {
                value:"patientInfo",
                name: "病人資料",
                children: [
                    {
                        value: "patientName",
                        name:"姓名",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "patientgGender",
                        name:"性別 (生理)",
                        component: 'checkboxesUni',
                        children:[],
                        data: [
                            {
                                value:"male",
                                name:"男",
                            },
                            {
                                value:"female",
                                name:"女",                            
                            }
                        ],
                    },
                    {
                        value: "patientChartno",
                        name:"病歷號",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "patientBed",
                        name:"病房號",
                        component: 'textbar',
                        children:[],
                        data: [],
                    },
                    {
                        value: "sugeryDoctor",
                        name:"主刀醫師",
                        component: 'textbar',
                        children:[],
                        data:[],
                    }
                ],
                component: '',
                data: [],
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
                                value:"",
                                name:"一般注射針頭",
                            },
                            {
                                value:"",
                                name:"縫合針",                                    
                            },
                            {
                                value:"",
                                name:"採血針",                                    
                            },
                            {
                                value:"",
                                name:"留置針",                                    
                            },
                            {
                                value:"",
                                name:"手術刀",                                    
                            },
                            {
                                value:"",
                                name:"切片刀",                                    
                            }
                        ],
                    },
                    {
                        value:"objectUse",
                        name:"尖銳物用途",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"肌肉注射",
                            },
                            {
                                value:"",
                                name:"動、靜脈注射",
                            },
                            {
                                value:"",
                                name:"皮下注射",
                            },
                            {
                                value:"",
                                name:"深部組織液抽吸",
                            },
                            {
                                value:"",
                                name:"組織穿刺",
                            },
                            {
                                value:"",
                                name:"採血",
                            },
                            {
                                value:"",
                                name:"手術",
                            },
                            {
                                value:"",
                                name:"整理或清洗器械",
                            },
                            {
                                value:"",
                                name:"廢棄物處理",
                            }
                        ],
                    },
                    {
                        value:"injuryReason",
                        name:"扎傷發生原因",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"肌肉注射",
                            },
                            {
                                value:"",
                                name:"動、靜脈注射",
                            },
                            {
                                value:"",
                                name:"皮下注射",
                            },
                            {
                                value:"",
                                name:"深部組織液抽吸",
                            },
                            {
                                value:"",
                                name:"組織穿刺",
                            },
                            {
                                value:"",
                                name:"採血",
                            },
                            {
                                value:"",
                                name:"手術",
                            },
                            {
                                value:"",
                                name:"整理或清洗器械",
                            },
                            {
                                value:"",
                                name:"廢棄物處理",
                            }
                        ],
                    },
                    {
                        value:"touchPlace",
                        name:"接觸部位",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"頭頸部",
                            },
                            {
                                value:"",
                                name:"手",
                            },
                            {
                                value:"",
                                name:"腿",
                            },
                            {
                                value:"",
                                name:"軀幹",
                            }
                        ],
                    },
                ],
                component: "",
                data:[],
            },
            {
                value:"otherDescript",
                name: "其他敘述",
                children: [                    
                    {
                        value: "otherDescript",
                        name:"",
                        component: 'textfield',
                        children:[],
                        data: [],
                    }
                ],
                component: '',
                data: [],
            },
            {
                value:"otherDescript",
                name: "非針扎事件",
                children: [
                    {
                        value:"userTouchProp",
                        name:"工作人員接觸處的特性",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"完整皮膚",
                            },
                            {
                                value:"",
                                name:"非完整皮膚",                                    
                            },
                            {
                                value:"",
                                name:"黏膜",                                    
                            }
                        ],
                    },
                    {
                        value:"userTouchPlace",
                        name:"工作人員接觸部位",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"頭頸部",
                            },
                            {
                                value:"",
                                name:"手",
                            },
                            {
                                value:"",
                                name:"腿",
                            },
                            {
                                value:"",
                                name:"軀幹",
                            }
                        ],
                    },
                    {
                        value:"bodyProperty",
                        name:"接觸的體液性質",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"",
                                name:"血",
                            },
                            {
                                value:"",
                                name:"腦脊髓液",
                            },
                            {
                                value:"",
                                name:"腹腔液",
                            },
                            {
                                value:"",
                                name:"心包液",
                            },
                            {
                                value:"",
                                name:"肋膜液",
                            },
                            {
                                value:"",
                                name:"羊水",
                            },
                            {
                                value:"",
                                name:"傷口",
                            },
                            {
                                value:"",
                                name:"滲出液",
                            },
                            {
                                value:"",
                                name:"尿",
                            },
                            {
                                value:"",
                                name:"精液",
                            },
                            {
                                value:"",
                                name:"陰道分泌物",
                            }
                        ],
                    },
                    {
                        value:"isBlood",
                        name:"是否含血液",
                        component: 'checkboxesUni',
                        children:[],
                        data:[
                            {
                                value:"0",
                                name:"否",
                            },
                            {
                                value:"1",
                                name:"是",
                            },
                            {
                                value:"2",
                                name:"不確定",
                            }
                        ],
                    },
                    {
                        value:"isProtected",
                        name:"當時有無防護措施",
                        component: 'checkboxesWithOtherWithMemo',
                        children:[],
                        data:[
                            {
                                value:"0",
                                name:"手套",
                            }
                        ],
                    },                    
                ],
                component: "",
                data:[],
            },
            {
                value:"bloodData",
                name: "血液資料",
                children: [                    
                    {
                        value: "empBlood",
                        name:"員工資料",
                        component: '',
                        children:[
                            {
                                value:"HBsAg",
                                name:"HBsAg",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"AntiHBs",
                                name:"Anti-HBs",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"AntiHBc",
                                name:"Anti-HBc",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"Anti-HCV",
                                name:"Anti-HCV",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"Anti-HIV",
                                name:"Anti-HIV",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            }                                                                                                               
                        ],
                        data: [
                        ],
                    },
                    {
                        value: "patientBlood",
                        name:"病人資料",
                        component: '',
                        children:[
                            {
                                value:"HBsAg",
                                name:"HBsAg",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"AntiHBs",
                                name:"Anti-HBs",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"AntiHBc",
                                name:"Anti-HBc",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"Anti-HCV",
                                name:"Anti-HCV",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            },
                            {
                                value:"Anti-HIV",
                                name:"Anti-HIV",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    },
                                    {
                                        value:"2",
                                        name:"未知",
                                    }
                                ],
                            }                                                                                                               
                        ],
                        data: [],
                    }
                ],
                component: '',
                data: []
            },
            {
                value:"infectProtector",
                name: "感染管制人員專用",
                children: [
                    {
                        value: "followUP",
                        name:"處置",
                        component: '',
                        children:[
                            {
                                value:"HBIG",
                                name:"HBIG 施打",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    }
                                ],
                            },
                            {
                                value:"AntiHIV",
                                name:"Anti-HIV 投藥",
                                component: 'checkboxesUni',
                                children:[],
                                data:[
                                    {
                                        value:"0",
                                        name:"無",
                                    },
                                    {
                                        value:"1",
                                        name:"有",
                                    }
                                ],
                            }
                        ],
                        data: [],
                    },
                    {
                        value: "command",
                        name:"建議",
                        component: '',
                        children:[],
                        data: [],
                    }
                ],
                component: '',
                data: [],
                id: 'infectProtector'
            },
        ]
    }
]
export default data