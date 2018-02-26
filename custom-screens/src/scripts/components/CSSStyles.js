import React, {Component} from "react";

export class Option1 extends Component{
    render(){
        const css = `
        .option-1 {
            width: 100%;
            height: 100%; }
            .option-1 .header {
              height: 75px;
              background-color: #f8f9fa;
              border-bottom: 6px solid #ee5030; }
              .option-1 .header .header-text {
                color: #000;
                font-size: 28px;
                padding: 26px 0px 0px 15px; }
            .option-1 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-1 .bar {
              width: 100%;
              height: 523px;
              background-color: #f8f9fa;
              float: right; }
            .option-1 .col-25 {
              width: 25%;
              height: auto;
              float: left; }
            .option-1 .col-75 {
              width: 75%;
              float: right;
              padding: 40px 40px; }
            .option-1 .action-button {
              background-color: #25408f;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              display: inline-block; }
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}