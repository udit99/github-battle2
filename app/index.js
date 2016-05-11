var USER_DATA = {
  name: 'Udit',
  username: 'udit99',
  image: 'https://avatars2.githubusercontent.com/u/77560?v=3&s=460'
}
var React = require("react");
var ReactDOM = require("react-dom");

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href="http://www.github.com/{this.props.username}">{this.props.username}</a>
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById("app")
)
