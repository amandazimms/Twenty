let timeToLook = false; //global var that tracks whether it is time to look (20 min is up; and user hasn't looked yet)
let toggleOutput = $('#toggleOutput');

$( document ).ready( function(){
  console.log('jq');
  toggleOutput.on('click', '#lookToggle', hasLooked);
  addCheckbox();

  
});

//creates a notifiation 'right now'
// chrome.runtime.sendMessage('', {
//       type: 'notification',
//       options: {
//         title: 'INITIAL',
//         message: 'notification',
//         iconUrl: '/Eye128.png',
//         type: 'basic',
//         priority: 2
//  }});




function hasLooked(){
  timeToLook = true;

  toggleOutput.empty();
  toggleOutput.append(`<p>you have now looked! Great work</p>`);
  //todo display a timer

  setInterval(function () {  
    addCheckbox();
  }, 5000); //todo hard coding 5 sec for now
}

function addCheckbox(){
  toggleOutput.empty();
  toggleOutput.append(`
      <p>Time to look! Check the box when you've looked</p>
      <button id="lookToggle">&#x1F441;I'm Looking!&#x1F441;
      </button>
    `);
}



