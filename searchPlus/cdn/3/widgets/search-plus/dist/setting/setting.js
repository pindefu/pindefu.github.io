System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/map","jimu-arcgis","jimu-core/react","jimu-for-builder","jimu-ui/basic/list-tree"],(function(e,t){var i={},s={},o={},a={},n={},r={},l={},d={},c={};return{setters:[function(e){i.AllDataSourceTypes=e.AllDataSourceTypes,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.DataSourceTypes=e.DataSourceTypes,i.Immutable=e.Immutable,i.JimuFieldType=e.JimuFieldType,i.React=e.React,i.SupportedJSAPILayerTypes=e.SupportedJSAPILayerTypes,i.classNames=e.classNames,i.css=e.css,i.getAppStore=e.getAppStore,i.jsx=e.jsx,i.polished=e.polished,i.urlUtils=e.urlUtils,i.utils=e.utils},function(e){s.Alert=e.Alert,s.Button=e.Button,s.ConfirmDialog=e.ConfirmDialog,s.Label=e.Label,s.PanelHeader=e.PanelHeader,s.Switch=e.Switch,s.TextInput=e.TextInput,s.defaultMessages=e.defaultMessages},function(e){o.MapWidgetSelector=e.MapWidgetSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection,o.SidePopper=e.SidePopper},function(e){a.DataSourceSelector=e.DataSourceSelector,a.FieldSelector=e.FieldSelector,a.dataComponentsUtils=e.dataComponentsUtils},function(e){n.JimuSymbolType=e.JimuSymbolType,n.SymbolSelector=e.SymbolSelector},function(e){r.featureUtils=e.featureUtils,r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){l.Fragment=e.Fragment},function(e){d.builderAppSync=e.builderAppSync},function(e){c.List=e.List,c.TreeItemActionType=e.TreeItemActionType}],execute:function(){e((()=>{var e={1027:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z" clip-rule="evenodd"></path></svg>'},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},3662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},2686:e=>{"use strict";e.exports=r},9244:e=>{"use strict";e.exports=i},8972:e=>{"use strict";e.exports=l},4108:e=>{"use strict";e.exports=d},4321:e=>{"use strict";e.exports=s},3089:e=>{"use strict";e.exports=a},8993:e=>{"use strict";e.exports=n},9298:e=>{"use strict";e.exports=o},8640:e=>{"use strict";e.exports=c}},t={};function p(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,p),o.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var i in t)p.o(t,i)&&!p.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var u={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(u),p.d(u,{__set_webpack_public_path__:()=>D,default:()=>w});var e=p(9244),t=p(4321),i=p(9298),s=p(3089);const o={caseSensitive:"Case sensitive",newLyrSource:"New layer source",addLayerFromMapTips:"Add layers from the map",geoMode:"Geometry and attribute",layerConfig:"Layer configuration",configFieldsTip:"Select fields to search",group:"Group",checkAll:"Check all",uncheckAll:"Uncheck all",configBlankStatus:'Click the "{newSoureString}" button to add and configure {ModeString}',searchLayer:"search layers",changeModeConfirmTitle:"Are you sure you want to switch the mode?",changeModeConfirmTips:"You will lose the settings configured.",editable:"Editable",editFieldDescription:"Please input the description.",noMapTips:"Please establish a connection with a Map widget."};var a=p(8993),n=p(2686),r=p(8972);const l="root item for tree data entry";class d extends e.React.PureComponent{constructor(i){super(i),this.supportedDsTypes=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer]),this.componentDidMount=()=>{(0,n.loadArcGISJSAPIModules)(["esri/symbols/support/jsonUtils"]).then((e=>{[this.jsonUtils]=e,this.setState({isModulesLoaded:!0})})).catch((e=>{console.error(e)}))},this.onSymbolChanged=e=>{const{symbol:t}=this.state,i=e.toJSON();this.setState({symbol:i}),this.props.optionChange("symbol",i)},this.getInitSymbolFromConfig=e=>{let t;return this.jsonUtils&&(t=e||n.featureUtils.getDefaultSymbol("polygon")),t?this.jsonUtils.fromJSON(t):null},this.nameChange=e=>{const t=e.target.value;this.setState({itemLabel:t})},this.nameAccept=e=>{(e=""===(e=null==e?void 0:e.trim())?this.props.name:e)!==this.state.itemLabel&&this.setState({itemLabel:e}),this.props.optionChange("name",e)},this.getUncheckState=(e=[])=>e.some((e=>!e.editAuthority&&e.editable)),this.getIndeterminate=(e=[])=>{const t=e.some((e=>e.editAuthority&&e.editable)),i=e.some((e=>!e.editAuthority&&e.editable));return t&&i},this.handleSwitchChange=(e,t)=>{const i=e.currentTarget;i&&this.props.optionChange(t,i.checked)},this.findEditingIndex=e=>{const{groupedFields:t}=this.props;let i;return t.forEach(((t,s)=>{if(t.jimuName===e)i=[s];else if(null==t?void 0:t.children){const o=t.children.findIndex((t=>t.jimuName===e));o>-1&&(i=[s,o])}})),i},this.handleTreeBoxChange=e=>{const t=e.currentTarget;if(!t)return;const{groupedFields:i}=this.props,s=this.findEditingIndex(t.id);if(2===s.length){const[e,o]=s;i[e][o].editAuthority=t.checked}else if(1===s.length){const[e]=s;i[e].editAuthority=t.checked}this.props.optionChange("groupedFields",i);const o=this.constructTreeItem(i);this.setState({rootItemJson:o})},this.handleTreeDescChange=(e,t)=>{const{groupedFields:i}=this.props,s=this.findEditingIndex(e);if(2===s.length){const[e,o]=s;i[e].children[o].subDescription=t}else if(1===s.length){const[e]=s;i[e].subDescription=t}this.props.optionChange("groupedFields",i);const o=this.constructTreeItem(i);this.setState({rootItemJson:o,isOpenDetailPopper:!1})},this.formatMessage=(e,i)=>{const s=Object.assign({},o,t.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:s[e]},i)},this.minusArray=(e,t,i)=>{const s=i||"jimuName",o=e.length>t.length,a=o?t:e;return(o?e:t).filter((e=>!a.some((t=>(null==t?void 0:t[s])===(null==e?void 0:e[s])))))},this.onFieldChange=t=>{if(!t)return;if(!(t=t.filter((t=>(null==t?void 0:t.type)===e.JimuFieldType.String))))return;const{dataSource:i}=this.state,{searchFields:s,groupedFields:o}=this.props,a=t.filter((e=>e));if(0===t.length)o.length=0;else{const e=this.minusArray(t,s),a=null==e?void 0:e[0];let n;if(o.forEach(((e,t)=>{if(null==e?void 0:e.children){const i=e.children.findIndex((e=>e.jimuName===(null==a?void 0:a.jimuName)));i>-1&&(n=[t,i])}else e.jimuName===(null==a?void 0:a.jimuName)&&(n=[t])})),n){if(2===n.length){const[e,t]=n;o[e].children.splice(t,1)}else if(1===n.length){const[e]=n;o.splice(e,1)}}else{const e=null==i?void 0:i.getLayerDefinition(),t=((null==e?void 0:e.fields)||[]).find((e=>e.name===a.jimuName)),s=null==t?void 0:t.editable;o.push(Object.assign(Object.assign({},a),{editAuthority:s,subDescription:(null==a?void 0:a.description)||"",editable:s}))}}this.props.multiOptionsChange({searchFields:a,groupedFields:o});const n=this.constructTreeItem(o),r=this.getUncheckState(o),l=this.getIndeterminate(o);this.setState({rootItemJson:n,hasUncheck:r,indeterminate:l})},this.onDataSourceCreated=e=>{this.setState({dataSource:e},(()=>{const{groupedFields:e}=this.props,t=this.constructTreeItem(e);this.setState({rootItemJson:t})}))},this.getFieldsFromDatasource=()=>{const{useDataSource:t}=this.props,i=e.DataSourceManager.getInstance().getDataSource(null==t?void 0:t.dataSourceId),s=null==i?void 0:i.getSchema();return(null==s?void 0:s.fields)?Object.values(null==s?void 0:s.fields):[]},this.checkFieldsExist=(e,t)=>{let i=!1;for(const s of e)if(s.jimuName===t.jimuName){i=!0;break}return i},this.getSelectorFields=t=>{if(!this.props.useDataSource)return[];const i=[];return this.props.searchFields?(t&&t.length>0&&(t=t.filter((t=>(null==t?void 0:t.type)===e.JimuFieldType.String))).forEach((e=>{i.push(e.jimuName)})),i):i},this.handleTreeBoxAll=e=>{const{groupedFields:t}=this.props,i=t.map((t=>(null==t?void 0:t.children)?Object.assign(Object.assign({},t),{editAuthority:e,children:t.children.map((t=>Object.assign(Object.assign({},t),t.editable?{editAuthority:e}:{})))}):Object.assign(Object.assign({},t),t.editable?{editAuthority:e}:{})));this.props.optionChange("groupedFields",i);const s=this.constructTreeItem(i);this.setState({rootItemJson:s,hasUncheck:!e,indeterminate:!1})},this.constructTreeItem=(t=[])=>{const{theme:i,layerEditingEnabled:o}=this.props,a=this.getFieldsFromDatasource(),n=t=>Array.from(t).map(((t,r)=>Object.assign({itemKey:`${e.utils.getUUID()}_${r}`,itemStateChecked:!!o&&(null==t?void 0:t.editAuthority),itemStateTitle:t.alias||t.jimuName||t.name,itemStateIcon:s.dataComponentsUtils.getIconFromFieldType(t.type,i),itemStateDetailContent:t,itemStateDisabled:!(null==t?void 0:t.groupKey)&&!this.checkFieldsExist(a,t),itemStateCommands:[],isCheckboxDisabled:!o||!t.editable},t.children?{itemChildren:n(t.children)}:{}))),r=n(t);return{itemKey:l,itemStateTitle:l,itemChildren:r}},this.setRootItemJson=e=>{this.setState({rootItemJson:e})},this.showDetailPopper=(e,t)=>{const{isOpenDetailPopper:i}=this.state;this.setState({isOpenDetailPopper:!i,popperRef:e})},this.getCurrentEditField=e=>{const{groupedFields:t}=this.props,i=this.findEditingIndex(e);let s={jimuName:"",groupKey:"",editAuthority:!1,children:[],subDescription:"",description:"",name:""};if(2===(null==i?void 0:i.length)){const[e,o]=i;s=t[e].children[o]}else if(1===(null==i?void 0:i.length)){const[e]=i;s=t[e]}return s},this.jsonUtils=null,this.state={dataSource:void 0,rootItemJson:this.constructTreeItem(i.groupedFields),itemLabel:i.name||"",hasUncheck:this.getUncheckState(i.groupedFields),indeterminate:this.getIndeterminate(i.groupedFields),isOpenDetailPopper:!1,popperRef:void 0,symbol:null,groupUpdating:!1},this.colRef=e.React.createRef()}componentDidUpdate(e,t){this.props.name!==e.name&&this.setState({itemLabel:this.props.name||""}),this.props.id!==e.id&&this.setState({rootItemJson:this.constructTreeItem(this.props.groupedFields)})}getGroupMaxId(e=[]){const t=[];return e.forEach((e=>{(null==e?void 0:e.groupKey)&&t.push(null==e?void 0:e.groupKey)})),t.length>0?Math.max.apply(null,t):0}getStyle(t){return e.css`
      .layer-config-panel {
        .panel-inner {
          .title {
            max-width: 70%;
          }
        }
        .setting-container {
          height: calc(100% - ${e.polished.rem(58)});
          overflow: auto;
          .layer-mode {
            .layer-mode-item {
              display: flex;
              margin-bottom: 8px;
            }
          }
          .fields-list-header {
            background: ${t.colors.palette.light[200]};
            border-bottom: 1px solid ${t.colors.palette.light[600]};
            height: 34px;
            width: 100%;
            flex-wrap: nowrap;
            .jimu-checkbox {
              margin-top: 2px;
            }
          }
          .selected-fields-con{
            margin-top: 0;
            .selected-fields-list {
              flex: 1;
              max-height: 300px;
              overflow-y: auto;
            }
            .jimu-tree-item{
              background: ${t.colors.palette.light[200]};
              border-bottom: 1px solid ${t.colors.palette.light[300]};
              .jimu-tree-item__content{
                div:first-of-type{
                  padding-left: 2px;
                }
                .jimu-tree-item__body{
                  background: ${t.colors.palette.light[200]};
                  .jimu-tree-item__title{
                    .jimu-input{
                      width: 125px;
                    }
                  }
                }
              }
            }
          }
          .table-options {
            .table-options-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
            }
            .select-option {
              margin-bottom: 8px;
            }
          }
          .ds-container {
            position: absolute;
            display: none;
          }
          .component-field-selector {
            .search-input {
              width: 100%;
            }
            .field-list {
              max-height: 300px;
            }
          }
          .config-word-break {
            word-wrap: break-word;
          }
          .capability-item{
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .disabled-label{
            color: ${t.colors.palette.light[800]};
          }
        }
      }
    `}render(){const{onClose:o,optionChange:n,dataSourceChange:l,filterDs:d,id:c,useDataSource:p,theme:u,searchFields:h,symbol:m,groupedFields:g}=this.props,{rootItemJson:f,itemLabel:S,dataSource:y,hasUncheck:v,indeterminate:b,isOpenDetailPopper:x,popperRef:C,groupUpdating:j}=this.state,I=this.getSelectorFields(h);return y||e.DataSourceManager.getInstance().getDataSource(c),null==g||g.forEach((e=>{(null==e?void 0:e.children)?null==e||e.children.forEach((e=>{null==e||e.editAuthority})):null==e||e.editAuthority})),(0,e.jsx)("div",{className:"w-100 h-100",css:this.getStyle(u)},(0,e.jsx)("div",{className:"w-100 h-100 layer-config-panel"},(0,e.jsx)("div",{className:"w-100 d-flex px-4 py-0"},(0,e.jsx)(t.PanelHeader,{level:1,className:"py-4 panel-inner",showClose:!!o,onClose:o,title:this.formatMessage("layerConfig")})),(0,e.jsx)("div",{className:"setting-container"},(0,e.jsx)(i.SettingSection,{title:this.formatMessage("data"),className:"pt-0"},(0,e.jsx)(i.SettingRow,null,(0,e.jsx)(s.DataSourceSelector,{types:this.supportedDsTypes,hideDataView:!0,disableRemove:()=>!0,useDataSources:p?(0,e.Immutable)([p]):(0,e.Immutable)([]),mustUseDataSource:!0,onChange:l,closeDataSourceListOnChange:!0,hideDs:d,hideTabs:(0,e.Immutable)(["OUTPUT"])}))),p&&(0,e.jsx)(r.Fragment,null,(0,e.jsx)(i.SettingSection,{title:"Layer title"},(0,e.jsx)(i.SettingRow,null,(0,e.jsx)(t.TextInput,{size:"sm",type:"text",className:"w-100",value:S,onChange:this.nameChange,onAcceptValue:this.nameAccept,"aria-label":this.formatMessage("label")}))),(0,e.jsx)(i.SettingSection,null,(0,e.jsx)(r.Fragment,null,(0,e.jsx)(i.SettingRow,{flow:"wrap",label:this.formatMessage("configFieldsTip")},(0,e.jsx)(s.FieldSelector,{useDataSources:p?(0,e.Immutable)([p]):(0,e.Immutable)([]),types:(0,e.Immutable)([e.JimuFieldType.String]),onChange:this.onFieldChange,selectedFields:(0,e.Immutable)(I),isMultiple:!0,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0})))),(0,e.jsx)(i.SettingSection,null,(0,e.jsx)(i.SettingRow,{flow:"wrap"},(0,e.jsx)("table",{className:"w-100"},(0,e.jsx)("tr",null,(0,e.jsx)("td",null,(0,e.jsx)(t.Label,null,"Highlight symbol")),(0,e.jsx)("td",{className:"text-right"},(0,e.jsx)("div",null,(0,e.jsx)(a.SymbolSelector,{jimuSymbolType:a.JimuSymbolType.Polygon,symbol:this.getInitSymbolFromConfig(this.props.symbol),onPolygonSymbolChanged:this.onSymbolChanged}))))))),(0,e.jsx)("div",{className:"ds-container"},(0,e.jsx)(e.DataSourceComponent,{useDataSource:(0,e.Immutable)(p),onDataSourceCreated:this.onDataSourceCreated}))))))}}var c=p(4108),h=p(8640);class m extends e.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onCreateDataSourceFailed=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}render(){return(0,e.jsx)(e.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}var g=p(3662),f=p.n(g);const S=t=>{const i=window.SVG,{className:s}=t,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:a,src:f()},o)):e.React.createElement("svg",Object.assign({className:a},o))};var y=p(1027),v=p.n(y);const b=t=>{const i=window.SVG,{className:s}=t,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:a,src:v()},o)):e.React.createElement("svg",Object.assign({className:a},o))};function x(t){var i,s,o,a,n;let r=[];if(!t)return r;const l=(null===(i=null===window||void 0===window?void 0:window.jimuConfig)||void 0===i?void 0:i.isBuilder)?null===(o=null===(s=(0,e.getAppStore)().getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===o?void 0:o.appConfig:null===(a=(0,e.getAppStore)().getState())||void 0===a?void 0:a.appConfig;if(!l)return r;const d=null===(n=l.widgets[t])||void 0===n?void 0:n.useDataSources;return void 0!==d&&d.map((e=>e.dataSourceId)).forEach((t=>{const i=e.DataSourceManager.getInstance().getDataSource(t),s=null==i?void 0:i.getDataSourcesByType(e.DataSourceTypes.FeatureLayer);if(s){const t=s.filter((t=>!function(t){const i=t=>{var s,o;let a=!1;const n=null==t?void 0:t.parentDataSource,r=null===(s=null==t?void 0:t.layer)||void 0===s?void 0:s.isTable;if(((null===(o=null==n?void 0:n.layer)||void 0===o?void 0:o.type)===e.SupportedJSAPILayerTypes.MapImageLayer||r)&&(a=!0),a||!n)return a;i(n)};return i(t)}(t)));r=r.concat(t)}})),r}const C=p(2838),j=Object.assign({},o,t.defaultMessages);class I extends e.React.Component{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.updateDsHash=e=>{this.dsHash={};let t=0;e.forEach((e=>{this.dsHash[t]=e.useDataSource,t++}))},this.getNewConfigId=e=>{var t;return`${e}-${((null===(t=this.props.config)||void 0===t?void 0:t.layersConfig.length)>0?this.getArrayMaxId(this.props.config.layersConfig):0)+1}`},this.dataSourceChangeSave=t=>{if(!t)return;const{config:i}=this.props,s=(0,e.Immutable)(t[0]);this.dsManager.createDataSourceByUseDataSource(s).then((t=>{var i,o;const a=null==t?void 0:t.getLayerDefinition(),n=(null==a||a.allowGeometryUpdates,null==a||a.capabilities,null==t?void 0:t.getSchema());let r=(null==n?void 0:n.fields)?Object.values(null==n?void 0:n.fields):[];const l=(null==a?void 0:a.fields)||[],d=null===(o=null===(i=null==t?void 0:t.layer)||void 0===i?void 0:i.formTemplate)||void 0===o?void 0:o.elements;if(d){const e=[];d.forEach((t=>{var i;const s=t;(null===(i=null==s?void 0:s.elements)||void 0===i?void 0:i.length)>0?null==s||s.elements.forEach((t=>{t.fieldName&&e.push(t.fieldName)})):s.fieldName&&e.push(s.fieldName)})),r=r.filter((t=>e.includes(t.name)))}(null==r?void 0:r.length)>50&&(r=r.slice(0,50));const c=r.map((e=>{const t=l.find((t=>t.name===e.jimuName)),i=null==t?void 0:t.editable;return Object.assign(Object.assign({},e),{editAuthority:i,subDescription:(null==e?void 0:e.description)||"",editable:i})})),p={id:t.id,name:t.getLabel(),layerId:null==t?void 0:t.jimuChildId,useDataSource:s,searchFields:[],groupedFields:c,symbol:null};let u;if(this.props.config.layersConfig[this.index]){const t=this.props.config.layersConfig.asMutable({deep:!0});t.splice(this.index,1,p),u=(0,e.Immutable)(t)}else u=this.props.config.layersConfig.concat([(0,e.Immutable)(p)]);this.dsHash[this.index]=s,this.updateDsHash(u);const h={id:this.props.id,config:this.props.config.set("layersConfig",u),useDataSources:this.getUseDataSourcesByDsHash()};this.props.onSettingChange(h)})).catch((e=>{console.error(e)}))},this.onCaseSensitivePropertyChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("caseSensitive",e.currentTarget.checked)})},this.onFilterDs=e=>{if(!(null==e?void 0:e.url)||(null==e?void 0:e.isOutputFromWidget))return!0;const{useMapWidgetIds:t,config:i}=this.props,{layersConfig:s,editMode:o}=i;let a=!1;return a=s.map((e=>e.id)).includes(e.id),a},this.onCloseLayerPanel=()=>{this.setState({showLayerPanel:!1}),this.index=0},this.getUniqueValues=(e=[],t=[])=>e.concat(t).filter((function(e,t,i){return i.indexOf(e)===t})),this.getUseDataSourcesByDsHash=()=>{const t={};Object.keys(this.dsHash).forEach((i=>{const s=this.dsHash[i].dataSourceId;let o;o=t[s]?(0,e.Immutable)({dataSourceId:this.dsHash[i].dataSourceId,mainDataSourceId:this.dsHash[i].mainDataSourceId,dataViewId:this.dsHash[i].dataViewId,rootDataSourceId:this.dsHash[i].rootDataSourceId,fields:this.getUniqueValues(t[s].fields,this.dsHash[i].fields)}):this.dsHash[i],t[s]=o}));const i=[];return Object.keys(t).forEach((e=>{i.push(t[e])})),i},this.removeLayer=e=>{this.index===e&&this.onCloseLayerPanel();const t=this.props.config.layersConfig.asMutable({deep:!0});t.splice(e,1);let i=this.props.config.set("layersConfig",t);0===(null==t?void 0:t.length)&&(i=i.set("description","")),delete this.dsHash[e],this.updateDsHash(t);const s={id:this.props.id,config:i,useDataSources:this.getUseDataSourcesByDsHash()};this.props.onSettingChange(s),this.index>e&&this.index--,c.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"removeLayerFlag",value:!0})},this.optionChangeSave=(e,t)=>{const i=this.props.config.layersConfig[this.index];if(i){const s=this.props.config.setIn(["layersConfig",this.index.toString()],Object.assign(Object.assign({},i),{[e]:t})),o={id:this.props.id,config:s};this.props.onSettingChange(o)}},this.multiOptionsChangeSave=e=>{const t=this.props.config.layersConfig[this.index];if(t){const i=this.props.config.setIn(["layersConfig",this.index.toString()],Object.assign(Object.assign({},t),e)),s={id:this.props.id,config:i};this.props.onSettingChange(s)}},this.getStyle=t=>e.css`
      .widget-setting-edit {
        .layerlist-tools{
          .layerlist-tools-item{
            display: flex;
            margin-bottom: 8px;
          }
        }

        .filter-item {
          display: flex;
          padding: 0.5rem 0.75rem;
          margin-bottom: 0.25rem;
          line-height: 23px;
          cursor: pointer;
          background-color: ${t.colors.secondary};

          .filter-item-icon {
            width: 14px;
            margin-right: 0.5rem;
          }
          .filter-item-name {
            word-wrap: break-word;
          }
        }

        .edit-tips{
          font-style: italic;
          font-size: 12px;
          color: ${t.colors.palette.dark[500]};
        }
        .filter-item-active {
          border-left: 2px solid ${t.colors.palette.primary[600]};
        }
        .capability-header{
          margin-bottom: 12px;
        }
        .capability-item{
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .empty-placeholder {
          display: flex;
          flex-flow: column;
          justify-content: center;
          height: calc(100% - 379px);
          overflow: hidden;
          .empty-placeholder-inner {
            padding: 0px 20px;
            flex-direction: column;
            align-items: center;
            display: flex;

            .empty-placeholder-text {
              color: ${t.colors.palette.dark[500]};
              font-size: ${e.polished.rem(14)};
              margin-top: 16px;
              text-align: center;
            }
            .empty-placeholder-icon {
              color: ${t.colors.palette.dark[200]};
            }
          }
        }

        .setting-ui-unit-tree, .setting-ui-unit-list {
          width: 100%;
          .tree-item {
            justify-content: space-between;
            align-items: center;
            font-size: ${e.polished.rem(13)};
            &.tree-item_level-1 {
            }
            .jimu-checkbox {
              margin-right: .5rem;
            }
          }
        }
        .setting-ui-unit-list-new {
          padding-top: ${e.polished.rem(8)};
        }
      }
    `,this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:j[e]},t),this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e}),this.onPropertyChange("layersConfig",[])},this.onShowLayerPanel=(e,t=!1)=>{const{showLayerPanel:i}=this.state;this.settSidePopperAnchor(e,t),e===this.index?this.setState({showLayerPanel:!i}):(this.setState({showLayerPanel:!0,refreshPanel:!this.state.refreshPanel}),this.index=e)},this.settSidePopperAnchor=(e,t=!1)=>{let i;i=t?this.sidePopperTrigger.current.getElementsByClassName("add-edit-btn")[0]:this.sidePopperTrigger.current.getElementsByClassName("jimu-tree-item__body")[e],this.setState({popperFocusNode:i})},this.onItemUpdated=(e,t)=>{const{id:i,config:s,onSettingChange:o}=this.props,a=e.map((e=>e.itemStateDetailContent)),n={id:i,config:s.set("layersConfig",a)};this.updateDsHash(a),o(n)},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState((i=>{const s=Object.assign({},i.dataSources);return s[e]=t,{dataSources:s}}))},this.isDataSourceAccessible=e=>{var t;const i=(null===(t=this.props.useDataSources)||void 0===t?void 0:t.filter((t=>e===t.dataSourceId)).length)>0;return null!==this.state.dataSources[e]&&i},this.handleChangeModeOk=()=>{this.onMultiplePropertyChange([{name:"layersConfig",value:[]}]),this.setState({changeModeConfirmOpen:!1,showLayerPanel:!1})},this.handleChangeModeClose=()=>{this.setState({changeModeConfirmOpen:!1})},this.onPropertyChange=(e,t)=>{const{config:i}=this.props;if(t===i[e])return;const s=i.set(e,t),o={id:this.props.id,config:s};this.props.onSettingChange(o)},this.onMultiplePropertyChange=e=>{const{config:t}=this.props;let i=t;e.forEach((e=>{e.value!==t[e.name]&&(i=i.set(e.name,e.value))}));const s={id:this.props.id,config:i};this.props.onSettingChange(s)},this.getAllLayersOptions=()=>{const e=[],{useMapWidgetIds:t}=this.props,i=x(null==t?void 0:t[0]);return i.length>0&&i.forEach((t=>{const i=t.getDataSourceJson();e.push({value:i.id,label:i.sourceLabel})})),e},this.displaySelectedLayers=e=>this.formatMessage("numSelected",{number:e.length}),this.index=0,this.dsManager=e.DataSourceManager.getInstance(),this.updateDsHash(this.props.config.layersConfig?this.props.config.layersConfig:[]),this.state={showLayerPanel:!1,refreshPanel:!1,dataSources:{},changeModeConfirmOpen:!1,popperFocusNode:null}}componentDidUpdate(e){const{useMapWidgetIds:t}=this.props,{useMapWidgetIds:i}=e}getArrayMaxId(e){const t=e.map((e=>e.id.split("-").reverse()[0]));return t.length>0?Math.max.apply(null,t):0}render(){var s,a,n,l,c,p;const{showLayerPanel:u,changeModeConfirmOpen:g}=this.state,{theme:f,config:y,useMapWidgetIds:v}=this.props,{layersConfig:j}=y,I=this.formatMessage("newLyrSource"),w=this.formatMessage("searchLayer"),D=j.length,T=(0,e.getAppStore)().getState().appStateInBuilder.appConfig,O=null==v?void 0:v[0],M=!v||0===(null==v?void 0:v.length)||!(null===(s=T.widgets)||void 0===s?void 0:s[O]),F={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:h.TreeItemActionType.RenderOverrideItem,children:[{name:h.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:h.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:h.TreeItemActionType.RenderOverrideItemBody,children:[{name:h.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:h.TreeItemActionType.RenderOverrideItemDragHandle},{name:h.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:h.TreeItemActionType.RenderOverrideItemTitle},{name:h.TreeItemActionType.RenderOverrideItemDetailToggle},{name:h.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},A=x(O).find((e=>{var t;return(null===(t=j[this.index])||void 0===t?void 0:t.id)===e.id})),N=null===(l=null===(n=null===(a=null==A?void 0:A.getMainDataSource())||void 0===a?void 0:a.layer)||void 0===n?void 0:n.editingEnabled)||void 0===l||l;return e.css`
      .widget-setting-edit-test {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `,(0,e.jsx)("div",{css:this.getStyle(f),className:"h-100"},(0,e.jsx)("div",{className:"jimu-widget-setting widget-setting-edit-test h-100"},null===(c=this.props.useDataSources)||void 0===c?void 0:c.map(((t,i)=>(0,e.jsx)(m,{key:i,useDataSource:t,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed}))),(0,e.jsx)(i.SettingSection,{className:"p-0 m-0 "+(D>0?"":"border-0"),role:"group"},(0,e.jsx)("div",{ref:this.sidePopperTrigger},(0,e.jsx)(i.SettingSection,{className:"border-0"},(0,e.jsx)(r.Fragment,null,(0,e.jsx)(i.SettingRow,{label:this.formatMessage("selectMapWidget")}),(0,e.jsx)(i.SettingRow,null,(0,e.jsx)(i.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:v}))),(0,e.jsx)(i.SettingRow,null,(0,e.jsx)(t.Button,{className:"w-100 add-edit-btn",type:"primary",onClick:()=>{this.onShowLayerPanel(D,!0)},disabled:M,title:I,"aria-label":I,"aria-describedby":"edit-blank-msg"},(0,e.jsx)("div",{className:"w-100 px-2 text-truncate"},(0,e.jsx)(S,{className:"mr-1 mb-1"}),I))),(0,e.jsx)(i.SettingRow,null,(0,e.jsx)("div",{className:"text-break edit-tips"},this.formatMessage("addLayerFromMapTips")))),(0,e.jsx)(i.SettingSection,{className:"pt-0 border-0"},(0,e.jsx)("div",{className:"setting-ui-unit-list"},!!D&&(0,e.jsx)(h.List,Object.assign({className:"setting-ui-unit-list-exsiting",itemsJson:Array.from(y.layersConfig).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateTitle:e.name,itemStateChecked:u&&t===this.index,itemStateCommands:[{label:this.formatMessage("remove"),iconProps:()=>({icon:C,size:12}),action:()=>{this.removeLayer(t)}}]}))),dndEnabled:!1,renderOverrideItemDetailToggle:(i,s)=>{var o,a;const{itemJsons:n}=s.props,[r]=n,l=null===(a=null===(o=null==r?void 0:r.itemStateDetailContent)||void 0===o?void 0:o.useDataSource)||void 0===a?void 0:a.dataSourceId;return this.isDataSourceAccessible(l)?"":(0,e.jsx)(t.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[s,o]=i;this.onItemUpdated(o,+s.itemKey)},onClickItemBody:(e,t)=>{const{itemJsons:[i]}=t.props;this.onShowLayerPanel(+i.itemKey)}},F)),D===this.index&&u&&(0,e.jsx)(h.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:e,itemKey:`${this.index}`,itemStateTitle:e.name,itemStateChecked:!0,itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},F)))))),0===D&&!u&&(0,e.jsx)("div",{className:"empty-placeholder w-100"},(0,e.jsx)("div",{className:"empty-placeholder-inner"},(0,e.jsx)("div",{className:"empty-placeholder-icon"},(0,e.jsx)(b,{size:48})),(0,e.jsx)("div",{className:"empty-placeholder-text",id:"edit-blank-msg",dangerouslySetInnerHTML:{__html:this.formatMessage("configBlankStatus",{newSoureString:I,ModeString:w})}}))),(0,e.jsx)(i.SidePopper,{isOpen:u&&!e.urlUtils.getAppIdPageIdFromUrl().pageId,position:"right",toggle:this.onCloseLayerPanel,trigger:null===(p=this.sidePopperTrigger)||void 0===p?void 0:p.current,backToFocusNode:this.state.popperFocusNode},(0,e.jsx)(d,Object.assign({},y.layersConfig.asMutable({deep:!0})[this.index],{intl:this.props.intl,theme:f,editorConfig:this.props.config,layerEditingEnabled:N,dataSourceChange:this.dataSourceChangeSave,filterDs:this.onFilterDs,optionChange:this.optionChangeSave,multiOptionsChange:this.multiOptionsChangeSave,onClose:this.onCloseLayerPanel}))),(0,e.jsx)("br",null),(0,e.jsx)(i.SettingSection,null,(0,e.jsx)(i.SettingRow,{flow:"wrap"},(0,e.jsx)("table",{className:"w-100"},(0,e.jsx)("tr",null,(0,e.jsx)("td",null,(0,e.jsx)(t.Label,null,o.caseSensitive)),(0,e.jsx)("td",{className:"text-right"},(0,e.jsx)("div",null,(0,e.jsx)(t.Switch,{checked:this.props.config&&this.props.config.caseSensitive||!1,onChange:this.onCaseSensitivePropertyChange}))))))),g&&(0,e.jsx)(t.ConfirmDialog,{level:"warning",title:this.formatMessage("changeModeConfirmTitle"),hasNotShowAgainOption:!1,content:this.formatMessage("changeModeConfirmTips"),onConfirm:this.handleChangeModeOk,onClose:this.handleChangeModeClose})))}}I.mapExtraStateProps=(e,t)=>{var i,s;return{activeTabId:null===(s=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.widgetsState[t.id])||void 0===s?void 0:s.activeTabId}};const w=I;function D(e){p.p=e}})(),u})())}}}));