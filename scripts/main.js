/**
 * for documentation and more demos,
 * visit https://audiomotion.dev
 */

// load module from Skypack CDN
import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

// callback function
function pulse( analyzer ) {
  const logo = document.getElementById('logo');
  // use song energy to scale logo image
  logo.height = 400 + analyzer.getEnergy() * 200;
}

// audio source
const audioEl = document.getElementById('audio');

// instantiate analyzer
const audioMotion = new AudioMotionAnalyzer(
  document.getElementById('container'),
  {
    source: audioEl,
    height: window.innerHeight - 50,
    mode: 3,
    barSpace: .6,
    ledBars: true,
    onCanvasDraw: pulse
  }
);//

// display module version
document.getElementById('version').innerText = `v${AudioMotionAnalyzer.version}`;

// play stream
document.getElementById('live').addEventListener( 'click', () => {
  audioEl.src = 'http://sv14.hdradios.net:7402/;';
  audioEl.play();
});