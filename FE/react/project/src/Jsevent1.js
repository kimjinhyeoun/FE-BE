import React from "react";
import $ from 'jquery';

class Event extends React.Component{
    componentDidMount(){ //랜더링하고 즉시 호출
        $('.ex1').on('click', ()=>{
            $('.ex1 span')
            .text('변경되었음.')
            .css({backgroundColor : 'pink', color : 'blue'});
        });

        $('.ex2 button').on('mousedown', ()=>{
            $('.ex2 span').text('변경되었음1.')
        })
        $('.ex2 button').on('mouseup', ()=>{
            $('.ex2 span').text('변경되었음2.')
        })
    }



    render(){
        return(
            <div>
             <h3>* 제이쿼리 *</h3>   
             <p className="ex1"><button>버튼</button><span>내용</span></p>
             <br />
             <p className="ex2"><button>버튼</button><span>내용</span></p>
            </div>
        );
    }
}



export default Event
