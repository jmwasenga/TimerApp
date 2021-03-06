var React = require('react');


var Clock = React.createClass ({
   getDefaultProps: function() {
      totalSeconds: 0


   },

   propTypes: {
     totalSeconds: React.PropTypes.number
   },
   formatSeconds: function(totalSeconds) {
     var seconds = totalSeconds % 60;
     var minutes = Math.floor(totalSeconds / 60);
     
     if (seconds < 10) {
	seconds = '0' + seconds;

     }
    
     if (minutes < 10) {
      minutes = '0' + minutes;
     }
     return minutes + ":" + seconds; 

   },
   render: function () {
     var {totalSeconds} = this.props;
     return (
        <div style={{width: '300px', height: '300px', backgroundColor: '#B5D0E2',
               borderRadius: '50%',display: 'flex', justifyContent: 'center', paddingTop: '140px',
               fontSize: '2.25rem',
               border: '2px solid #209938',
               color: 'white',
               fontWeight: '300px',
               position: 'relative',
               left: '250px'
        }}> 
	  <span>
           {this.formatSeconds(totalSeconds)}
         </span>
        </div>

     );

  }

});


module.exports = Clock;
