import React from "react";
import { directive } from "@babel/types";
// import './App.css';

export default function contactOnStage({}) {
  return (
    <div className="contact-on-stage-video-container contact-on-stage__no-video">
      <img
        src={avatar}
        alt={name}
        className="user-avatar contact-on-stage-video-avatar"
      ></img>
      <div class="contact-on-stage-audio-container hidden">
        <audio class="contact-on-stage-audio" autoplay=""></audio>
      </div>
      <div class="contact-on-stage-details">
        <span class="contact-on-stage-details-text">
          <!-- react-text: 506 -->Maggie<!-- /react-text --><!-- react-text: 507 --> <!-- /react-text -->
          <!-- react-text: 851 -->McClellan<!-- /react-text --></span>
        <button class="contact-on-stage-details-button">
          <span name="highvolume" class="tui-icon icon-highvolume" aria-hidden="true"></span>
        </button>
        <button class="contact-on-stage-details-button">
          <span name="search" class="tui-icon icon-search" aria-hidden="true">
            </span>
            </button>
            <div class="volume-indicator-container">
              <div class="volume-indicator">
                <canvas id="meter" width="410" height="3">
                  </canvas>
                  </div>
                  </div>
                  </div>
    </div>
  );
}
