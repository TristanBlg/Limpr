import * as React from 'react'
import {connect} from 'react-redux'
// import {fetchAllPosts} from '../actions'
import Post from '../components/Post'

export class News extends React.Component{
  constructor(){
    super();
  }

  render(){
    const {posts} = this.props

    return (
      <section>
        <div className="container">
          {posts && posts.map((post, key) => {
            return (
              <Post key={key} {...post}/>
            )
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
