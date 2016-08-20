/**
 * Created by Administrator on 2016/6/16.
 */

var SXT = {};
SXT.event = {};
    //���¼�
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
    //�Ƴ��¼�
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
//��ȡevent����
    SXT.event.getEvent = function(event){
        return event ?event : window.event ;
    };
//��ȡTarget����
    SXT.event.getTarget = function(event){
        var event = SXT.event.getEvent(event);
        return event.target;
    };
//��ֹð��
    SXT.event.stopPropagation = function(e){
        var event = SXT.event.getEvent(e);
        event.stopPropagation();
    };

SXT.dom = {};
//��ȡԪ��
    SXT.dom.getId = function(id){
        return document.getElementById(id);
    };
    SXT.dom.getClassName = function(cnames){
        if(document.getElementsByClassName){
            return document.getElementsByClassName(cnames);
        }
        return "��֧��getElementsByClassName";
    };
    SXT.dom.getTag = function(tag){
        if(document.getElementsByTagName){
            return document.getElementsByTagName(tag);
        }
        return "��֧��getElementsByTagName";
    };
//�޸�css��ʽ
    SXT.dom.css = function(id,key,value){
        //ע�����ֱ�Ӵ���������һ���Ѿ���ȡ����Ԫ�ض���
        SXT.dom.getId(id).style[key] = value;
    };
//������Ԫ��
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
//ΪԪ���������
    SXT.dom.html = function(id,value){
        if(value){
            SXT.dom.getId(id).innerHTML = value;
        }
        return SXT.dom.getId(id).innerHTML;
    };