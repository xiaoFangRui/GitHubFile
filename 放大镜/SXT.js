/**
 * Created by Administrator on 2016/6/16.
 */

var SXT = {};
SXT.event = {};
    //绑定事件
    SXT.event.on = function(ele,type,handler){
        var element = SXT.dom.getId(ele);
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type] = handler;
        }
    };
    //移除事件
    SXT.event.off = function(ele,type,handler){
        var element = SXT.dom.getId(ele);
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false)
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler)
        }else{
            element["on"+type] = null;
        }
    };
//获取event对象
    SXT.event.getEvent = function(event){
        return event ?event : window.event ;
    };
//获取Target对象
    SXT.event.getTarget = function(event){
        var event = SXT.event.getEvent(event);
        return event.target;
    };
//阻止冒泡
    SXT.event.stopPropagation = function(e){
        var event = SXT.event.getEvent(e);
        event.stopPropagation();
    };

SXT.dom = {};
//获取元素
    SXT.dom.getId = function(id){
        return document.getElementById(id);
    };
    SXT.dom.getClassName = function(cnames){
        if(document.getElementsByClassName){
            return document.getElementsByClassName(cnames);
        }
        return "不支持getElementsByClassName";
    };
    SXT.dom.getTag = function(tag){
        if(document.getElementsByTagName){
            return document.getElementsByTagName(tag);
        }
        return "不支持getElementsByTagName";
    };
//修改css样式
    SXT.dom.css = function(id,key,value){
        //注：如果直接传进来的是一个已经获取过的元素对象？
        SXT.dom.getId(id).style[key] = value;
    };
//创建新元素
    SXT.dom.createElement = function(parent,ele,className,id){
        var cele = document.createElement(ele);
        if(className){
            cele.className = className;
        }
        if(id){
            cele.id = id;
        }
        parent.appendChild(cele);
    };
//为元素添加内容
    SXT.dom.html = function(id,value){
        if(value){
            SXT.dom.getId(id).innerHTML = value;
        }
        return SXT.dom.getId(id).innerHTML;
    };