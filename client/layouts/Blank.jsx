/*
USAGE:
<App.layouts.Blank>
   Stuff
</App.layouts.Blank>
*/
App.layouts.Blank = React.createClass({

   render() {
      return (
         <div className="container app-width">
            <div className="row app-bg-color">
               <div className="col-xs-12">
                  <main>{this.props.children}</main>                  
               </div>
            </div>
         </div>
      );
   }
});
