var React=require('react');
var Gc=require('./Gc');

var Movielist=React.createClass({

render:function(){

  var commentNodes = this.props.movieArr.map(function(arr) {
   return (
     <div>

     <Gc Title={arr.Title} />
     <Gc Year={arr.Year} />
     <Gc imdbID={arr.imdbID} />
     <Gc Type={arr.Type} />
     <Gc Poster={arr.Poster} />
     </div>
   );
 });
 return (

       <div className="Movielist">
         {commentNodes}
       </div>
     );
}
});

module.exports=Movielist;
