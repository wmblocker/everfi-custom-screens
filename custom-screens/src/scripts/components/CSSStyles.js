import React, {Component} from "react";

export class Option4 extends Component{
    render(){
        const css = `
        .modal-dialog {
            height: 600px !important; }
            .modal-dialog .modal-content .modal-body {
              padding: 0px !important; }
        .option-4 {
            width: 100%;
            height: 100%; }
            .option-4 .cs-header {
              height: 75px;
              background-color: #f8f9fa;
              border-bottom: 6px solid #ee5030; }
              .option-4 .cs-header .cs-header-text {
                color: #000;
                font-size: 30px !important;
                padding: 25px 0px 0px 30px !important; }
            .option-4 .cs-sub-heading{
                font-size:24px !important;
            }
            .option-4 .col-wrap {
              width: 100%;
              height: 100%;
              padding: 0px 0px; }
            .option-4 .cs-bar {
              width: 100%;
              height: 523px;
              background-color: #f8f9fa;
              float: right; }
            .option-4 .col-25 {
              width: 25%;
              height: auto;
              float: left; }
            .option-4 .col-75 {
              width: 75%;
              float: right;
              padding: 40px 40px; }
            .option-4 .action-button {
              background-color: #25408f;
              color: #fff;
              padding: 10px 28px;
              font-size: 16px;
              border-radius: 7px;
              margin-top: 20px;
              margin-left: 15px;
              display: inline-block; }
        `
        return(
            <style>
                {css}
            </style>
        )
    }
}